import {browser, ElementFinder, protractor} from 'protractor';
import {Constants} from '../misc-utils/constants';

export class WaitHelper {
    private static instance: WaitHelper;
    private readonly EC = protractor.ExpectedConditions;

    private constructor() {
    }

    static getInstance() {
        if (!WaitHelper.instance) {
            WaitHelper.instance = new WaitHelper();
        }
        return WaitHelper.instance;
    }

    public async waitForElementToBeDisplayed(targetElement: ElementFinder,
                                             timeout = Constants.DEFAULT_TIMEOUT,
                                             message = 'Element should be visible') {
        return browser.wait(this.EC.visibilityOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }

    /**
     * Wait for an element to hide
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     * @returns {any}
     */
    public async waitForElementToBeHidden(targetElement: ElementFinder,
                                          timeout = Constants.DEFAULT_TIMEOUT,
                                          message = 'Element should not be visible') {
        return browser.wait(this.EC.invisibilityOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }

    /**
     * Wait for an element to become clickable
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    public async waitForElementToBeClickable(targetElement: ElementFinder,
                                             timeout = Constants.DEFAULT_TIMEOUT,
                                             message = 'Element not clickable') {
        return await browser.wait(this.EC.elementToBeClickable(targetElement),
            timeout,
            targetElement.locator().toString() + message);
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

    public async waitForElementOptionallyDisplayed( targetElement: ElementFinder, timeout = Constants.DEFAULT_TIMEOUT ) {
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
    public async waitForElementToBePresent(targetElement: ElementFinder,
                                           timeout = Constants.DEFAULT_TIMEOUT,
                                           message = 'Element should be visible') {
        return browser.wait(this.EC.presenceOf(targetElement),
            timeout,
            targetElement.locator().toString() + message)
            .then(() => true, () => false);
    }
}
