import { test, expect } from '@playwright/test';

test.only('Check button performance', async ({ page }) => {
  const client = await page.context().newCDPSession(page);
  // Tell the devtools session ro record performance metrics
  await client.send('Performance.enable');

  await page.goto('localhost:3001/button', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/A Button/);
  await expect(page.locator('.basicbutton')).toBeVisible();
  const metrics = await client.send('Performance.getMetrics') as { metrics: { name: string; value: number; }[] };
  const processTimeMetric = metrics.metrics.find(metric => metric.name === 'ProcessTime');
  const jsheaptotalsize = metrics.metrics.find(metric => metric.name === 'JSHeapTotalSize');
  expect(processTimeMetric?.value).toBeLessThan(0.5);
  expect(jsheaptotalsize?.value).toBeLessThan(47000000);
});