import { expect, test } from '@playwright/test';

test.describe('Tool - Phân tích độ mạnh mật khẩu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/password-strength-analyser');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Phân tích độ mạnh mật khẩu - it-tools');
  });

  test('Tính toán thời gian tấn công bạo lực của mật khẩu', async ({ page }) => {
    await page.getByTestId('password-input').fill('ABCabc123!@#');

    const crackDuration = await page.getByTestId('crack-duration').textContent();

    expect(crackDuration).toEqual('15,091 millennia, 3 centuries');
  });
});
