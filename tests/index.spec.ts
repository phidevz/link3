import { test, expect } from "@playwright/test";

test("homepage has title and links", async ({ page }) => {
  await page.goto("http://localhost:4300");

  await expect(page).toHaveTitle("Jane Doe | Link3");

  const youtube = page.getByRole("link", { name: "YouTube", exact: true });
  await expect(youtube).toHaveAttribute("href", "https://example.com");

  const youtube2 = page.getByRole("link", { name: "YouTube Live", exact: true });
  await expect(youtube2).toHaveAttribute("href", "https://example.com");

  const twitch = page.getByRole("link", { name: "Twitch", exact: true });
  await expect(twitch).toHaveAttribute("href", "https://example.com");

  const yahoo = page.getByRole("link", { name: "Yahoo", exact: true });
  await expect(yahoo).toHaveAttribute("href", "https://yahoo.com");

  const shop = page.getByRole("link", { name: "Shop", exact: true });
  await expect(shop).toHaveAttribute("href", "https://example.com");
});
