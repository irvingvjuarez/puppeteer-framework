const puppeteer = require("puppeteer")

describe("First example test", () => {
	let browser, page

	beforeAll(async () => {
		browser = await puppeteer.launch({
			defaultViewport: null
		})

		page = await browser.newPage()
	})

	afterAll(async () => {
		await browser.close()
	})

	it("Navigating to a page", async () => {
		await page.goto("https://google.com")

		const logo = await page.waitForSelector("img[alt='Google']")
		await expect(logo).toBeVisible
	})
})