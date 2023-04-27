import { test, expect } from '@playwright/test';

import * as performancemetrics from '../metrics.json';

interface Data {
  name: string;
  value: number;
}

let buttonProcesstime: number | null = null;
let buttonJSHeapTotalSize: number | null = null;
let buttonAmountofnodes: number | null = null;

try {
  for (const data of performancemetrics.metrics as unknown as Data[]) {
    if (data.name === 'button.processtime') {
      buttonProcesstime = data.value;
    } else if (data.name === 'button.jsheaptotalsize') {
      buttonJSHeapTotalSize = data.value;
    } else if (data.name === 'button.amountofnodes') {
      buttonAmountofnodes = data.value;
    }
    if (buttonProcesstime !== null && buttonJSHeapTotalSize !== null && buttonAmountofnodes !== null) {
      break;
    }
  }
} catch (err) {
  console.error('Error importing metrics:', err);
}

test.only('Ndl - button performance', async ({ page }) => {
  const client = await page.context().newCDPSession(page);
  // Tell the devtools session ro record performance metrics
  await client.send('Performance.enable');

  await page.goto('/button', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/A Button/);
  await expect(page.locator('.basicbutton')).toBeVisible();
  const metrics = await client.send('Performance.getMetrics') as { metrics: { name: string; value: number; }[] };
  const processTimeMetric = metrics.metrics.find(metric => metric.name === 'ProcessTime');
  const amountofnodes = metrics.metrics.find(metric => metric.name === 'Nodes');
  const jsheaptotalsize = metrics.metrics.find(metric => metric.name === 'JSHeapTotalSize');

  console.log('Process Time: ' + processTimeMetric?.value + ' Seconds');
  if (jsheaptotalsize) {
    const jsheapmb = jsheaptotalsize.value / (1024 * 1024);
    console.log('JSHeapTotalSize: ' + jsheapmb.toFixed(2) + ' MB');
  }
  console.log(amountofnodes?.value + ' Nodes')

  if(buttonAmountofnodes !== null) {
  expect(amountofnodes?.value).toBeLessThan(buttonAmountofnodes);
  }
  if (buttonProcesstime !== null) {
  expect(processTimeMetric?.value).toBeLessThan(buttonProcesstime);
  }
  if (buttonJSHeapTotalSize !== null) {
  expect(jsheaptotalsize?.value).toBeLessThan(buttonJSHeapTotalSize);
  }
});

test('Ndl - buttons performance', async ({ page }) => { 
  const client = await page.context().newCDPSession(page);
  // Tell the devtools session ro record performance metrics
  await client.send('Performance.enable');

  await page.goto('/buttons', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/A Button/);
  await expect(page.locator('.basicbutton-outlined')).toBeVisible();
  await expect(page.locator('.basicbutton-filled')).toBeVisible();
  await expect(page.locator('.basicbutton-text')).toBeVisible();
  const metrics = await client.send('Performance.getMetrics') as { metrics: { name: string; value: number; }[] };
  const processTimeMetric = metrics.metrics.find(metric => metric.name === 'ProcessTime');
  const jsheaptotalsize = metrics.metrics.find(metric => metric.name === 'JSHeapTotalSize');
  const amountofnodes = metrics.metrics.find(metric => metric.name === 'Nodes');

  console.log('Process Time: ' + processTimeMetric?.value + ' Seconds');
  if (jsheaptotalsize) {
    const jsheapmb = jsheaptotalsize.value / (1024 * 1024);
    console.log('JSHeapTotalSize: ' + jsheapmb.toFixed(2) + ' MB');
  }
  console.log(amountofnodes)
  expect(processTimeMetric?.value).toBeLessThan(1);
  expect(jsheaptotalsize?.value).toBeLessThan(120166016);
});

test('MUi - button performance', async ({ page }) => {
  const client = await page.context().newCDPSession(page);
  // Tell the devtools session ro record performance metrics
  await client.send('Performance.enable');

  await page.goto('/mui/button', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/A Button/);
  await expect(page.locator('.basicbutton')).toBeVisible();
  const metrics = await client.send('Performance.getMetrics') as { metrics: { name: string; value: number; }[] };
  const processTimeMetric = metrics.metrics.find(metric => metric.name === 'ProcessTime');
  const amountofnodes = metrics.metrics.find(metric => metric.name === 'Nodes');
  const amountofrescourese = metrics.metrics.find(metric => metric.name === 'Resources');
  const jsheaptotalsize = metrics.metrics.find(metric => metric.name === 'JSHeapTotalSize');
  const FirstMeaningfulPaint = metrics.metrics.find(metric => metric.name === 'FirstMeaningfulPaint');
  console.log('Process Time: ' + processTimeMetric?.value + ' Seconds');
  if (jsheaptotalsize) {
    const jsheapmb = jsheaptotalsize.value / (1024 * 1024);
    console.log('JSHeapTotalSize: ' + jsheapmb.toFixed(2) + ' MB');
  }
  console.log(amountofnodes)
  console.log(amountofrescourese)
  console.log(FirstMeaningfulPaint)
  expect(processTimeMetric?.value).toBeLessThan(1);
  expect(jsheaptotalsize?.value).toBeLessThan(110166016);
});