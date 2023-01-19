import BasePage from "./BasePage";

export default class SignIn {
	constructor() {
		this.base = new BasePage()
	}

	async clickSignInBtn() {
		this.base.click(".login-btn")
	}

	async typeName() {
		this.base.type(".name", "Irving Juárez")
	}

	async typeEmail() {
		this.base.type(".email", "example@gmail.com")
	}

	async setPassword() {
		this.base.type(".original-password", "password")
		this.base.type(".confirm-password", "password")
	}

	async confirmAccount() {
		this.base.click(".create-account")
	}
}