import {browser, ElementFinder, protractor} from 'protractor';
import {Constants} from '../misc-utils/constants';

export class WaitHelper {

    private constructor() {
    }
    private static instance: WaitHelper;
    static readonly EC = protractor.ExpectedConditions;

    static getInstance() {
        if (!WaitHelper.instance) {
            WaitHelper.instance = new WaitHelper();
        }
        return WaitHelper.instance;
    }

    static async waitForElementOptionallyPresent(targetElement: ElementFinder, timeout = Constants.DEFAULT_TIMEOUT) {
        const isDisplayed = this.EC.presenceOf(targetElement);
        return await browser.wait(isDisplayed, timeout).then(function () {
            return true;
        }, function () {
            return false;
        });
    }

    static async waitForElementToBeInteractable(target: ElementFinder,
                                                timeout = Constants.DEFAULT_TIMEOUT,
                                                message = 'Element not interactable') {
        await WaitHelper.waitForElementToBeClickable(target);
        return browser.wait(async () => {
                try {
                    return (await target.isEnabled() && await target.isDisplayed());
                } catch (error) {
                    return false;
                }
            }, timeout,
            target.locator().toString() + message);
    }

    static async waitUntilElementIsNotInteractable(elementFinder: ElementFinder,
                                                   timeout = Constants.DEFAULT_TIMEOUT) {
        const message = `Wait until element is not interactable: '${elementFinder.locator()}'`;
        await WaitHelper.waitForElementToBeInteractable(elementFinder);
        return browser.wait(async () => {
            return browser.executeScript(`try {
                    return (arguments[0].parentElement && arguments[0].clientHeight > 0 && arguments[0].clientWidth > 0 && true);
                } catch (e) {
                    return false;
                }`, elementFinder);
        }, timeout, message);
    }

    /**
     * Wait for an element to hide
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     * @returns {any}
     */
    static async waitForElementToBeHidden(targetElement: ElementFinder,
                                          timeout = Constants.DEFAULT_TIMEOUT,
                                          message = 'Element should not be visible') {
        return browser.wait(this.EC.invisibilityOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }

    public static async waitForElementToBeDisplayed(targetElement: ElementFinder,
                                                    timeout = Constants.DEFAULT_TIMEOUT,
                                                    message = 'Element should be visible') {
        return browser.wait(this.EC.visibilityOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }

    /**
     * Wait for an element to become clickable
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    public static async waitForElementToBeClickable(targetElement: ElementFinder,
                                                    timeout = Constants.DEFAULT_TIMEOUT,
                                                    message = 'Element not clickable') {
        return await browser.wait(this.EC.elementToBeClickable(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }

    public static async waitForElementOptionallyDisplayed( targetElement: ElementFinder, timeout = Constants.DEFAULT_TIMEOUT ) {
        const isDisplayed = this.EC.visibilityOf( targetElement );
        return browser.wait( isDisplayed, timeout ).then( function() {
            return true;
        }, function() {
            return false;
        } );
    }

    /**
     * Wait for an element to present
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    public static async waitForElementToBePresent(targetElement: ElementFinder,
                                                  timeout = Constants.DEFAULT_TIMEOUT,
                                                  message = 'Element should be visible') {
        return browser.wait(this.EC.presenceOf(targetElement),
            timeout,
            targetElement.locator().toString() + message)
            .then(() => true, () => false);
    }

    public async waitForElementToResolve(promiseCall: Function,
                                         resolver: Function,
                                         timeout = Constants.DEFAULT_TIMEOUT,
                                         message = '') {
        let result = false;
        return browser.wait(() => {
            promiseCall().then((value: any) => (result = resolver(value)));
            return result;
        }, timeout, message);
    }

    public async waitForElementToHaveText(
        targetElement: ElementFinder,
        timeout = Constants.DEFAULT_TIMEOUT, message = '') {
        return this.waitForElementToResolve(
            () => targetElement.getText(),
            (text: string) => text.length > 0,
            timeout,
            message);
    }

}
