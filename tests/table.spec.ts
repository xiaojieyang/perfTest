import { test, expect } from '@playwright/test';
import * as performancemetrics from '../metrics.json';

interface Data {
  name: string;
  value: number;
}

let tableProcesstime: number | null = null;
let tableJSHeapTotalSize: number | null = null;

try {
  for (const data of performancemetrics.metrics as unknown as Data[]) {
    if (data.name === 'table.processtime') {
      tableProcesstime = data.value;
    } else if (data.name === 'table.jsheaptotalsize') {
      tableJSHeapTotalSize = data.value;
    }
    if (tableProcesstime !== null && tableJSHeapTotalSize !== null) {
      break;
    }
  }
} catch (err) {
  console.error('Error importing metrics:', err);
}

test('Check table performance', async ({ page }) => {
  const client = await page.context().newCDPSession(page);
  await client.send('Performance.enable');

  await page.goto('/table/table', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/A Table/);
  await expect(page.locator('.ndl-table-root')).toBeVisible({ timeout: 10000 });
  const metrics = await client.send('Performance.getMetrics') as { metrics: { name: string; value: number; }[] };
  const processTimeMetric = metrics.metrics.find(metric => metric.name === 'ProcessTime');
  const jsheaptotalsize = metrics.metrics.find(metric => metric.name === 'JSHeapTotalSize');
  console.log('Process Time: ' + processTimeMetric?.value + ' Seconds');
  if (jsheaptotalsize) {
    const jsheapmb = jsheaptotalsize.value / (1024 * 1024);
    console.log('JSHeapTotalSize: ' + jsheapmb.toFixed(2) + ' MB');
  }
  if (tableProcesstime !== null) {
    expect(processTimeMetric?.value).toBeCloseTo(tableProcesstime, 20);
  }
  if (tableJSHeapTotalSize !== null) {
  expect(jsheaptotalsize?.value).toBeLessThan(tableJSHeapTotalSize);
  }
});

let tablesProcesstime: number | null = null;
let tablesJSHeapTotalSize: number | null = null;

try {
  for (const data of performancemetrics.metrics as unknown as Data[]) {
    if (data.name === 'table.processtime') {
      tablesProcesstime = data.value;
    } else if (data.name === 'table.jsheaptotalsize') {
      tablesJSHeapTotalSize = data.value;
    }
    if (tablesProcesstime !== null && tablesJSHeapTotalSize !== null) {
      break;
    }
  }
} catch (err) {
  console.error('Error importing metrics:', err);
}


test('Check 100 tables performance', async ({ page }) => {
  const client = await page.context().newCDPSession(page);
  await client.send('Performance.enable');

  await page.goto('/table/tables', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/A Tables/);
  await expect(page.locator('.ndl-table-root').last()).toBeVisible({ timeout: 1000000 });
  const metrics = await client.send('Performance.getMetrics') as { metrics: { name: string; value: number; }[] };
  const processTimeMetric = metrics.metrics.find(metric => metric.name === 'ProcessTime');
  const jsheaptotalsize = metrics.metrics.find(metric => metric.name === 'JSHeapTotalSize');
  console.log('Process Time: ' + processTimeMetric?.value + ' Seconds');
  if (jsheaptotalsize) {
    const jsheapmb = jsheaptotalsize.value / (1024 * 1024);
    console.log('JSHeapTotalSize: ' + jsheapmb.toFixed(2) + ' MB');
  }
  if (tablesProcesstime !== null) {
  expect(processTimeMetric?.value).toBeCloseTo(tablesProcesstime , -1);
  }
  if (tablesJSHeapTotalSize !== null) {
  expect(jsheaptotalsize?.value).toBeLessThan(tablesJSHeapTotalSize);
  }
});
