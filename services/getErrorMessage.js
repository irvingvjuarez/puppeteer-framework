export const getErrorMessage = (selector, error) => {
	return `Error at selector: ${selector}. ${error.message}`
}