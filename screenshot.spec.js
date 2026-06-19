const { test, expect } = require('@playwright/test');

test('homepage screenshot', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  // Wait for the animation
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'homepage-desktop.png', fullPage: false });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'homepage-mobile.png', fullPage: false });
});
