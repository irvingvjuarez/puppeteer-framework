import { MAX_TIMEOUT } from "../globals"
import Login from "../pages/Login"

describe("Login steps", () => {
	let loginPage

	beforeAll(async () => {
		loginPage = new Login()
	}, MAX_TIMEOUT)

	it("Visiting the site", async () => {
		await loginPage.visit()
	}, MAX_TIMEOUT)

	it("Type login info", async () => {
		await loginPage.login("user@phptravels.com", "demouser")
	}, MAX_TIMEOUT)

	it("Validate login", async () => {
		await loginPage.validateLogin()
	}, MAX_TIMEOUT)
})