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

		const url = await this.getUrl()
		console.log(url)
	}

	async validateLogin() {
		const currentUrl = await this.getUrl()
		expect(currentUrl).toBe("https://phptravels.net/account/dashboard")

	}
}