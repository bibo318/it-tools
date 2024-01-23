import { expect, test } from '@playwright/test';

test.describe('Tool - Kiểm tra chữ ký PDF', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pdf-signature-checker');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Kiểm tra chữ ký PDF - it-tools');
  });
});
