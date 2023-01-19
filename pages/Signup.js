import BasePage from "./BasePage";

export default class Signup extends BasePage {
	constructor() {
		super()
	}

	async clickSignupBtn() {
		this.click(".signup-btn")
	}

	async typeName() {
		this.type(".name", "Irving Juárez")
	}

	async typeEmail() {
		this.type(".email", "example@gmail.com")
	}

	async setPassword() {
		this.type(".original-password", "password")
		this.type(".confirm-password", "password")
	}

	async confirmAccount() {
		this.click(".create-account")
	}
}