import { test, expect, Locator } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

let componentList: string[] = []

test.describe('Accessibility test', () => {

  test('get components list', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await expect(page.locator('h1')).toBeVisible()
    const elemList = page.locator('a')
    const elementsCount = await elemList.count()
    
    for (let i= 0; i < elementsCount ; i++) {
        const element = elemList.nth(i);
        const href = await element.getAttribute('href')
        if (href) {
          componentList.push(href)
        }
    }
  });


    test('detect component accessibility issue', async ({ page }) => {
     
      const listCount = componentList.length
      for (let i:number= 0; i < listCount ; i++) {
        await page.goto(componentList[i]);
        console.log(componentList[i])
        await page.waitForLoadState('networkidle')
        page.waitForLoadState('domcontentloaded')
        await expect(page.locator('h1')).toBeVisible()
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
      }
    });



});
