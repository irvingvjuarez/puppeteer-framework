describe("First example test", () => {
	it("Navigating to a page", async () => {
		await page.goto("https://google.com")

		const logo = await page.waitForSelector("img[alt='Google']")
		await expect(logo).toBeVisible
	})
})