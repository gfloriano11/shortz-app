const { test, expect } = require('@playwright/test');

test('deve realizar um registro', async ({ page }) => {

  await page.goto('/register');

  await page.fill('input[name="username"]', 'gfloriano');
  await page.fill('input[name="fullName"]', 'Gustavo Floriano');
  await page.fill('input[name="email"]', 'gustavo@catolica.sc');
  await page.fill('input[name="password"]', '123456');
  await page.fill('input[name="confirmPassword"]', '123456');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/login/);
});