import { test, expect, } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

let componentList = {
  banner: "/banner",
  button: "/button",
  checkbox: "/checkbox",
  codeblock: "/codeblock",
  dialog: "/dialog",
  label: "/label",
  modal: "/modal",
  radio: "/radio",
  siteNavigation: "/sitenavigation",
  spinner: "/spinner",
  textInput: "/textinput",
  tooltip: "/tooltip"
}


test.describe('Accessibility test - light mode:', () => {
  test.use({
    colorScheme: 'dark'
  })

    test('Banner', async ({ page }) => {
      await page.goto(componentList.banner);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Button', async ({ page }) => {
      await page.goto(componentList.button);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('checkbox', async ({ page }) => {
      await page.goto(componentList.checkbox);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    //https://dequeuniversity.com/rules/axe/4.7/scrollable-region-focusable?application=playwright
    test('CodeBlock', async ({ page }) => {
      await page.goto(componentList.codeblock);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Dialog', async ({ page }) => {
      await page.goto(componentList.dialog);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Lable', async ({ page }) => {
      await page.goto(componentList.label);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Modal', async ({ page }) => {
      await page.goto(componentList.modal);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Radio', async ({ page }) => {
      await page.goto(componentList.radio);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Site Navigation', async ({ page }) => {
      await page.goto(componentList.siteNavigation);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Spinner', async ({ page }) => {
      await page.goto(componentList.spinner);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    //https://dequeuniversity.com/rules/axe/4.7/color-contrast?application=playwright
    test('Text Input', async ({ page }) => {
      await page.goto(componentList.textInput);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Tooltip', async ({ page }) => {
      await page.goto(componentList.tooltip);
      await page.waitForLoadState('networkidle')
      page.waitForLoadState('domcontentloaded')
      await expect(page.locator('h1')).toBeVisible()
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
});
