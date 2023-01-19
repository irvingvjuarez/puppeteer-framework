import { getErrorMessage } from "../services/getErrorMessage"

export default class BasePage {
	async getTitle() {
		return await page.title()
	}

	async getByText(textContent) {
		return await page.getByText(textContent)
	}

	async getUrl() {
		return await page.url()
	}

	async getText(selector) {
		try {
			await page.waitForSelector(selector)
			const selectorText = page.$eval(selector, (el) => el.textContent)

			return selectorText
		} catch(err) {
			throw new Error(getErrorMessage(selector, err))
		}
	}

	async getAttribute(selector, attribute) {
		try {
			// const attr = await page.$eval(selector, (el) => el[attribute])
			const attr = await page.$eval(selector, (el) => el.getAttribute(attribute))
			return attr
		} catch(err) {
			throw new Error(getErrorMessage(selector, err))
		}
	}

	async getValue(selector) {
		try {
			const element = page.$eval(selector, (el) => el.value)
			return element
		} catch (err) {
			throw new Error(getErrorMessage(selector, err))
		}
	}

	async getCount(selector) {
		try {
			const count = await page.$$eval(selector, (els) => els.lenght)
			return count
		} catch(err) {
			throw new Error(selector, err)
		}
	}
}