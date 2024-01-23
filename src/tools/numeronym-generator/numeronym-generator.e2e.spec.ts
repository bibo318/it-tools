import { expect, test } from '@playwright/test';

test.describe('Tool - Numeronym generator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/numeronym-generator');
  });

  test('Có đúng tiêu đề', async ({ page }) => {
    await expect(page).toHaveTitle('Numeronym generator - it-tools');
  });

  test('một chữ số được tạo ra khi một từ được nhập vào', async ({ page }) => {
    await page.getByTestId('word-input').fill('internationalization');
    const numeronym = await page.getByTestId('numeronym').inputValue();

    expect(numeronym).toEqual('i18n');
  });

  test('khi một từ có 3 chữ cái trở xuống thì chữ số chính là từ đó', async ({ page }) => {
    await page.getByTestId('word-input').fill('abc');
    const numeronym = await page.getByTestId('numeronym').inputValue();

    expect(numeronym).toEqual('abc');
  });
});
