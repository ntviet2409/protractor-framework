import { expect } from 'chai';
import { PageHelper } from '../html/page-helper';
import { ElementFinder } from 'protractor';
import { StepLogger } from '../../../core/logger/step-logger';
import { ValidationsHelper } from './validation-helper';
import { HtmlHelper } from './html-helper';
import { CheckboxHelper } from '../html/checkbox-helper';
import { TextboxHelper } from '../html/textbox-helper';
import { WaitHelper } from '../html/wait-helper';
import { ElementHelper } from './element-helper';

export class ExpectationHelper {
    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyDisplayedStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger, _refresh = true) {
        stepLogger.subVerification(`${elementName} should display`);
        expect(await WaitHelper.waitForElementToBeDisplayed(targetElement))
            .to.equal(true, ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyNotDisplayedStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should not display`);
        expect(await PageHelper.isElementPresent(targetElement, false))
            .to.equal(false, ValidationsHelper.getNotDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyElementPresentStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should present`);
        expect(await PageHelper.isElementPresent(targetElement))
            .to.equal(true, ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is hidden or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyHiddenStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger, _toWait = true) {
        stepLogger.subVerification(`${elementName} should be hidden`);
        // tslint:disable-next-line:no-large-timeout
        expect(await WaitHelper.waitForElementToBeHidden(targetElement, PageHelper.timeout.xl))
            .to.equal(true, ValidationsHelper.getNotDisplayedValidation(elementName));
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
        const checkBoxStatus = await CheckboxHelper.isCheckboxChecked(targetElement);
        expect(checkBoxStatus).to.equal(true, ValidationsHelper.getDisplayedValidation(elementName));
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
        expect(await PageHelper.isElementHidden(targetElement))
            .to.equal(true, ValidationsHelper.getDisplayedValidation(elementName));
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
        expect(await PageHelper.isElementEnabled(targetElement))
            .to.equal(true, ValidationsHelper.getEnabledValidation(elementName));
    }

    /**
     * Verify whether an element is present or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyPresentStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should present`);
        expect(await PageHelper.isElementPresent(targetElement))
            .to.equal(true, ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is enabled or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifySelectedStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should be selected`);
        expect(await PageHelper.isElementSelected(targetElement))
            .to.equal(true, ValidationsHelper.getSelectedValidation(elementName));
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
        expect(await PageHelper.isElementEnabled(targetElement))
            .to.equal(false, ValidationsHelper.getDisabledValidation(elementName));
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
        expect(val.toLowerCase() === expectedValue.toLowerCase())
            .to.equal(true, ValidationsHelper.getFieldValueValidation(val, expectedValue));
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
        stepLogger.subVerification(`'${elementName}' should have exact text as '${expectedValue}'`);
        expect((await ElementHelper.getText(targetElement)).toLowerCase())
            .to.equal(expectedValue.toLowerCase(),
            ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue));
    }

    /**
     * Verify that textbox element has the exact value
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyValue(targetElement: ElementFinder, elementName: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${elementName}' should have exact value as '${expectedValue}'`);
        expect(await TextboxHelper.hasValue(targetElement, expectedValue))
            .to.equal(true, ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue));
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
        stepLogger.subVerification(`'${elementName}' should contain '${expectedValue}' value`);
        expect((await ElementHelper.getText(targetElement)).toLowerCase())
            .to.include(expectedValue.toLowerCase(),
            ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue));
    }

    /**
     * Verify that value is grater than other value
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyValueGraterThan(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${actualValue}' should be greater than '${expectedValue}' value`);
        expect(actualValue).to.be.at.least(expectedValue,
            ValidationsHelper.getGraterThanValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is less or equal than other value
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyValueLessOrEqualTo(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${actualValue}' should be less ot equal to '${expectedValue}' value`);
        expect(actualValue).to.be.at.most(expectedValue,
            ValidationsHelper.getLessThanOrEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is less or equal than other value
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyValueGreaterOrEqualTo(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${actualValue}' should be greater or equal to '${expectedValue}' value`);
        expect(actualValue).to.be.at.least(expectedValue,
            ValidationsHelper.getGreaterThanOrEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is equal to other value
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyValueEqualTo(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${actualValue}' should be equal to '${expectedValue}' value`);
        expect(actualValue).to.equal(expectedValue,
            ValidationsHelper.getEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is not equal to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyValueNotEqualTo(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${actualValue}' should be not equal to '${expectedValue}' value`);
        expect(actualValue).not.to.equal(expectedValue,
            ValidationsHelper.getNotEqualToValidation(actualValue, expectedValue));
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
        stepLogger.subVerification(`'${elementName}' should not be selected`);
        expect(actualValue).to.equal(false,
            ValidationsHelper.getUnSelectedValidation(elementName));
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
        stepLogger.subVerification(`'${actualValue}' should be equal to '${expectedValue}' value`);
        expect(actualValue).to.equal(expectedValue,
            ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
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
    static async verifyAttributeValueNotToBe(targetElement: ElementFinder,
                                             attribute: string,
                                             expectedValue: string,
                                             stepLogger: StepLogger) {
        const actualValue = await PageHelper.getAttributeValue(targetElement, attribute);
        stepLogger.subVerification(`'${actualValue}' should not be equal to '${expectedValue}' value`);
        expect(actualValue).not.to.equal(expectedValue,
            ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is equal to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyStringValueEqualTo(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${actualValue}' should be equal to '${expectedValue}' value`);
        expect(actualValue).to.equal(expectedValue,
            ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value contains to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyStringValueContain(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${actualValue}' should contains  '${expectedValue}' value`);
        expect(actualValue).to.include(
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
        stepLogger.subVerification(`'${actualValue}' should not contains '${expectedValue}' value`);
        expect(actualValue).not.to.include(
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
        stepLogger.subVerification(`'${actualValue}' should contain '${expectedValue}' value`);
        expect(actualValue).to.include(expectedValue.toLowerCase(),
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
        stepLogger.subVerification(`'${elementName}' should have contains text as '${expectedValue}'`);
        expect((await PageHelper.getText(targetElement)).toLowerCase())
            .to.include(expectedValue.toLowerCase(),
            ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue));
    }

    /**
     * Verify that value is not equal to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyStringValueNotEqualTo(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        expect(actualValue).not.to.equal(expectedValue,
            ValidationsHelper.getNotEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that String is equal to other String
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyStringEqualTo(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${actualValue}' should be equal to '${expectedValue}' value`);
        expect(actualValue).to.equal(expectedValue,
            ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that String is not equal to other String
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyStringNotEqualTo(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${actualValue}' should not be equal to '${expectedValue}' value`);
        expect(actualValue).not.to.equal(expectedValue,
            ValidationsHelper.getStringNotEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that CSS values is equal to expected Value
     * @param targetElement
     * @param attribute
     * @param {string} expectedValue
     * @param {StepLogger} stepLogger
     * @returns {Promise<void>}
     */
    static async verifyCssAttributeValue(targetElement: ElementFinder, attribute: string, expectedValue: string, stepLogger: StepLogger) {
        const actualValue = await PageHelper.getCssValue(targetElement, attribute);
        stepLogger.subVerification(`'${actualValue}' should be equal to '${expectedValue}' value`);
        expect(actualValue).to.equal(expectedValue,
            ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    static async verifyAttributeNotContains(targetElement: ElementFinder, attribute: string, expectedValue: string,
                                            stepLogger: StepLogger) {
        const actualValue = await PageHelper.getAttributeValue(targetElement, attribute);
        stepLogger.subVerification(`'${actualValue}' should be equal to '${expectedValue}' value`);
        expect(actualValue).not.to.include(expectedValue,
            ValidationsHelper.getStringNotEqualToValidation(actualValue, expectedValue));
    }

    static async verifyTextBoxHasValue(elementLocator: ElementFinder, locatorValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`The ${locatorValue} values should display.`);
        expect(await TextboxHelper.hasValue(elementLocator, locatorValue))
            .to.equal(true, ValidationsHelper.getFieldDisplayedValidation(locatorValue));
    }

    static async verifyElementNotPresentStatus(targetElement: ElementFinder, elementName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`${elementName} should not present`);
        expect(await PageHelper.isElementPresent(targetElement))
            .to.equal(false, ValidationsHelper.getNotPresentValidation(elementName));
    }

    static async verifyTextNotContains(targetElement: ElementFinder, elementName: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`'${elementName}' should contain '${expectedValue}' value`);
        expect((await ElementHelper.getText(targetElement)).toLowerCase())
            .to.not.include(expectedValue.toLowerCase(),
            ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue));
    }
}
