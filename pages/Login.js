import BasePage from "./BasePage";

export default class Login extends BasePage {
	constructor() {
		super()

		this.navbar = ".menu-wrapper"
		this.inputEmail = "input[placeholder='Email']"
		this.inputPassword = "input[placeholder='Password']"
		this.submitBtn = "button[type='submit']"
		this.loginMessage = "Hi,"
	}

	async visit() {
		await page.goto("https://phptravels.net/login")
		await page.waitForSelector(this.navbar)
	}

	async login(email, password) {
		await page.waitForSelector(this.inputEmail)

		await this.type(this.inputEmail, email)
		await this.type(this.inputPassword, password)

		await this.click(this.submitBtn)

		await this.wait(5000)
	}

	async validateLogin() {
		const currentUrl = await this.getUrl()
		expect(currentUrl).toBe("https://phptravels.net/account/dashboard")
	}

	async searchFlight() {
		await this.click("a[title='flights']")
		await this.wait(5000)

		await this.click("label[for='round-trip']")

		await this.type("input[placeholder='Flying From']", "MIA - Miami Intl - Miami")
		await this.type("input[placeholder='To Destination']", "VLC - Valencia - Valencia")

		await this.click("#flights-search")
		await this.wait(9000)

		await page.waitForSelector("#data")
	}

	async bookFlight() {
		await this.click(".catalog-panel > li:first-child form button[type='submit']")
		await this.wait(5000)

		await page.waitForSelector("form[method='POST']")
	}
}