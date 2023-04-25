import { test, expect } from '@playwright/test';

test.only('Check codeblock performance', async ({ page }) => {
  const client = await page.context().newCDPSession(page);
  // Tell the devtools session ro record performance metrics
  await client.send('Performance.enable');

  await page.goto('/codeblock', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/A CodeBlock/);
  await expect(page.locator('.ndl-code-block-container')).toBeVisible({ timeout: 10000 });
  const metrics = await client.send('Performance.getMetrics') as { metrics: { name: string; value: number; }[] };
  const processTimeMetric = metrics.metrics.find(metric => metric.name === 'ProcessTime');
  const jsheaptotalsize = metrics.metrics.find(metric => metric.name === 'JSHeapTotalSize');
  console.log('Process Time: ' + processTimeMetric?.value + ' Seconds');
  if (jsheaptotalsize) {
    const jsheapmb = jsheaptotalsize.value / (1024 * 1024);
    console.log('JSHeapTotalSize: ' + jsheapmb.toFixed(2) + ' MB');
  }
  expect(processTimeMetric?.value).toBeLessThan(1.1);
  expect(jsheaptotalsize?.value).toBeLessThan(70000000);
});

test.only('Check buttons performance', async ({ page }) => {
  const client = await page.context().newCDPSession(page);
  // Tell the devtools session to record performance metrics
  await client.send('Performance.enable');

  await page.goto('/codeblocks', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/A CodeBlock/);
  await expect(page.locator('.ndl-code-block-container').last()).toBeVisible({ timeout: 1000000 });
  const metrics = await client.send('Performance.getMetrics') as { metrics: { name: string; value: number; }[] };
  const processTimeMetric = metrics.metrics.find(metric => metric.name === 'ProcessTime');
  const jsheaptotalsize = metrics.metrics.find(metric => metric.name === 'JSHeapTotalSize');
  console.log('Process Time: ' + processTimeMetric?.value + ' Seconds');
  if (jsheaptotalsize) {
    const jsheapmb = jsheaptotalsize.value / (1024 * 1024);
    console.log('JSHeapTotalSize: ' + jsheapmb.toFixed(2) + ' MB');
  }
  expect(processTimeMetric?.value).toBeLessThan(2.0);
  expect(jsheaptotalsize?.value).toBeLessThan(109904872);
});
