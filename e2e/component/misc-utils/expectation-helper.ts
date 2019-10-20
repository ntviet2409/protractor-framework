import {PageHelper} from '../html/page-helper';
import {browser, ElementFinder, ElementHelper} from 'protractor';
import {StepLogger} from '../../../core/logger/step-logger';
import {ValidationsHelper} from './validation-helper';
import {HtmlHelper} from "./html-helper";

export class ExpectationHelper {
    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyDisplayedStatus(targetElement: ElementFinder,
                                       elementName: string,
                                       stepLogger: StepLogger,
                                       toWait = true,
                                       timeout = PageHelper.DEFAULT_TIMEOUT) {
        stepLogger.subVerification(`${elementName} should display`);
        await expect(await PageHelper.isElementDisplayed(targetElement, toWait, timeout))
            .toBe(true,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is hidden or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyHiddenStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should be hidden`);
        await expect(await PageHelper.isElementHidden(targetElement))
            .toBe(true,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is hidden or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyCheckboxIsChecked(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should be checked`);
        const checkBoxStatus = await PageHelper.isElementSelected(targetElement);
        await expect(checkBoxStatus).toBe(true, ValidationsHelper.getCheckedValidation(elementName));
    }

    /**
     * Verify whether an element is hidden or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyRemovedStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should be removed`);
        await expect(await PageHelper.isElementHidden(targetElement))
            .toBe(true,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is enabled or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyEnabledStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should be enabled`);
        await expect(await PageHelper.isElementEnabled(targetElement))
            .toBe(true,
                ValidationsHelper.getEnabledValidation(elementName));
    }

    /**
     * Verify whether an element is disabled or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyDisabledStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should be disabled`);
        await expect(await PageHelper.isElementEnabled(targetElement))
            .toBe(false,
                ValidationsHelper.getDisabledValidation(elementName));
    }

    /**
     * Verify that TextBox has the exact text
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyTextBoxContains(targetElement: ElementFinder, elementName: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should contain ${expectedValue} value`);
        const val = await PageHelper.getAttributeValue(
            targetElement,
            HtmlHelper.attributes.value,
        );
        await expect(val === expectedValue)
            .toBe(true, ValidationsHelper.getFieldValueValidation(elementName, expectedValue));
    }

    /**
     * Verify that element has the exact text
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyText(targetElement: ElementFinder, elementName: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should have exact text as ${expectedValue} `);
        await expect((await PageHelper.getText(targetElement)).toLowerCase())
            .toBe(expectedValue.toLowerCase(),
                ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue));
    }

    /**
     * Verify that element contains the text
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyTextContains(targetElement: ElementFinder, elementName: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should contain ${expectedValue} value`);
        await expect((await PageHelper.getText(targetElement)).toLowerCase())
            .toContain(expectedValue.toLowerCase(),
                ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue));
    }

    /**
     * Verify that value is grater than other value
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyValueGreaterThan(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.subVerification(`${actualValue} should be grater than ${expectedValue} value`);
        await expect(actualValue).toBeGreaterThan(
            expectedValue, ValidationsHelper.getGraterThanValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is less or equal than other value
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyValueLessOrEqualTo(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.subVerification(`${actualValue} should be less ot equal to ${expectedValue} value`);
        await expect(actualValue).toBeLessThanOrEqual(
            expectedValue, ValidationsHelper.getLessThanOrEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is equal to other value
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyValueEqualTo(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        await expect(actualValue).toEqual(
            expectedValue, ValidationsHelper.getEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is not equal to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyValueNotEqualTo(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${actualValue} should be not equal to  ${expectedValue} value`);
        await expect(actualValue).not.toEqual(
            expectedValue, ValidationsHelper.getNotEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that checkbox is checked
     * @param targetElement
     * @param elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyCheckBoxNotSelected(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        const actualValue = await targetElement.isSelected();
        stepLogger.subVerification(`${elementName} should not be selected`);
        await expect(actualValue).toEqual(
            false, ValidationsHelper.getUnSelectedValidation(elementName));
    }

    /**
     * Verify that attribute values is equal to expected Value
     * @param targetElement
     * @param attribute
     * @param attribute
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyAttributeValue(targetElement: ElementFinder, attribute: string, expectedValue: string, stepLogger: StepLogger) {
        const actualValue = await PageHelper.getAttributeValue(targetElement, attribute);
        stepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        await expect(actualValue).toEqual(
            expectedValue, ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is equal to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyStringValueEqualTo(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        await expect(actualValue).toEqual(
            expectedValue, ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value contains to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyStringValueContain(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${actualValue} should be contains to  ${expectedValue} value`);
        await expect(actualValue).toContain(
            expectedValue, ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value not contains to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyStringValueNotContain(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${actualValue} should be not contains to  ${expectedValue} value`);
        await expect(actualValue).not.toContain(
            expectedValue, ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that actual value contains expected value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyActualValueContainsExpectedValue(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${actualValue} should contain ${expectedValue} value`);
        await expect(actualValue).toContain(expectedValue.toLowerCase(),
            ValidationsHelper.getFieldShouldHaveValueValidation(actualValue, expectedValue));
    }

    /**
     * Verify that element contains text
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyContainsText(targetElement: ElementFinder, elementName: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should have exact text as ${expectedValue} `);
        await expect((await PageHelper.getText(targetElement)).toLowerCase())
            .toContain(expectedValue.toLowerCase(),
                ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue));
    }

    /**
     * Verify that element is not present
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */

    static async verifyNotPresentStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger, toWait = true) {
        stepLogger.subVerification(`${elementName} should not be present`);
        await expect(await PageHelper.isElementPresent(targetElement, toWait))
            .toBe(false,
                ValidationsHelper.getNotPresentValidation(elementName));
    }

    static async verifyNotDisplayedStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should not be displayed`);
        await expect(await PageHelper.isElementDisplayed(targetElement, false))
            .toBe(false,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @param {boolean} toWait
     * @returns {Promise<void>}
     */
    static async verifyElementPresentStatus(targetElement: ElementFinder,
                                            elementName: string,
                                            stepLogger: StepLogger,
                                            toWait: boolean = true,
                                            timeout = PageHelper.DEFAULT_TIMEOUT) {
        stepLogger.subVerification(`${elementName} should present`);
        await expect(await PageHelper.isElementPresent(targetElement, toWait, timeout))
            .toBe(true,
                ValidationsHelper.getPresentValidation(elementName));
    }

    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @param {boolean} toWait
     * @returns {Promise<void>}
     */
    static async verifyNewWindowUrlContains(urlSubString: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`new window URl contains ${urlSubString}`);
        await browser.getAllWindowHandles().then(async function (handles) {
            await browser.switchTo().window(handles[1]).then(async function () {
                await expect(browser.getCurrentUrl()).toContain(urlSubString);
            });
        });
    }

    static async verifyAttributeContainsValue(targetElement: ElementFinder, attribute: string, expectedValue: string, stepLogger: StepLogger) {
        const actualValue = await PageHelper.getAttributeValue(targetElement, attribute);
        stepLogger.subVerification(`${actualValue} should contain to  ${expectedValue} value`);
        await expect(actualValue).toContain(
            expectedValue, ValidationsHelper.getValueContainsValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is not empty
     * @param {boolean} actualValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyBooleanValue(actualValue: boolean, expectedValue: boolean, stepLogger: StepLogger) {
        stepLogger.subVerification(`${actualValue} should be ${expectedValue}`);
        await expect(actualValue).toBe(expectedValue,
            ValidationsHelper.getBooleamValidation(actualValue, expectedValue));
    }
}
