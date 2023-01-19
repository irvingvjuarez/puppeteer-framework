import { MAX_TIMEOUT } from "../globals"
import Login from "../pages/Login"

describe("Login steps", () => {
	let loginPage

	beforeAll(async () => {
		loginPage = new Login()
		await loginPage.visit()
	}, MAX_TIMEOUT)

	it("Filling data", async () => {
		await loginPage.login("user@phptravels.com", "demouser")
	}, MAX_TIMEOUT)

	// it("Type login info", async () => {
	// }, MAX_TIMEOUT)

	// it("Validate login", async () => {
	// }, MAX_TIMEOUT)
})