const { test, expect } = require('@playwright/test');

test('deve realizar login', async ({ page }) => {

  await page.goto('/login');

  await page.fill('input[name="login"]', 'gfloriano');
  await page.fill('input[name="password"]', '123456');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/feed/);
});