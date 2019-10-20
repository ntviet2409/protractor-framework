import {browser, ElementFinder, WebElement, ElementArrayFinder} from 'protractor';
import {WaitHelper} from './wait-helper';
import {Constants} from '../misc-utils/constants';

export class PageHelper {
    /* tslint:disable:no-large-timeout*/
    static DEFAULT_TIMEOUT = Constants.timeout.l;

    static actionKeyDown(key: string) {
        return browser.actions().keyDown(key).perform();
    }

    static actionKeyUp(key: string) {
        return browser.actions().keyUp(key).perform();
    }

    static keyPressForBrowser(key: string) {
        return browser.actions().sendKeys(key).perform();
    }

    static actionMouseUp(location: WebElement) {
        return browser.actions().mouseUp(location).perform();
    }

    /**
     * Sets window size
     * @param {number} width
     * @param {number} height
     */
    public static async setWindowSize(width: number, height: number) {
        return browser.driver
            .manage()
            .window()
            .setSize(width, height);
    }

    /**
     * Wrapper for executing javascript code
     * @param {string | Function} script
     * @param varAargs
     * @returns {promise.Promise<any>}
     */
    public static async executeScript(script: string | Function,
                                      ...varAargs: any[]) {
        return browser.driver.executeScript(script, varAargs);
    }

    /**
     * Wrapper to return an active element
     * @returns {WebElementPromise}

     public static async getFocusedElement() {
    return browser.driver.switchTo().activeElement()
  } */

    /**
     * Switch to a new tab if browser has availability
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    public static async switchToNewTabIfAvailable(timeout = Constants.timeout.xs) {
        const handles = await browser.getAllWindowHandles();
        const newWindowHandle = handles[1]; // this is your new window
        if (newWindowHandle) {
            await this.closeAlertIfPresent(timeout);
            await browser.switchTo().window(newWindowHandle);
        }
        const url = await browser.getCurrentUrl();

        // Avoiding bootstraping issue, Known issue
        // Error: Error while waiting for Protractor to sync with the page:
        // "window.angular is undefined. This could be either because this is a non-angular page or
        // because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.
        // See http://git.io/v4gXM for details
        return browser.driver.get(url);
    }

    public static async switchToFirstTab() {
        const handles = await browser.getAllWindowHandles();
        const newWindowHandle = handles[0]; // this is your new window
        if ( newWindowHandle ) {
            await browser.driver.close();
            await browser.switchTo().window( newWindowHandle );
        }
    }

    public static async switchToNewTab() {
        const handles = await browser.getAllWindowHandles();
        const newWindowHandle = handles[1]; // this is your new window
        if ( newWindowHandle ) {
            await browser.switchTo().window( newWindowHandle );
        }
    }

    /**
     * Gets inner text
     * @param {WebElementPromise} elem
     * @returns {string} inner text
     */
    public static async getText(elem: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBePresent(elem);
        const text = await elem.getText();
        return text.trim();
    }

    /**
     * Gets html attribute value
     * @param {WebElementPromise} elem
     * @param {string} attribute
     * @returns {string} attribute value
     */
    public static async getAttributeValue(elem: ElementFinder,
                                          attribute: string) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(elem);
        const attributeValue = await elem.getAttribute(attribute);
        return attributeValue.trim();
    }

    /**
     * Click on element
     * @param {ElementFinder} targetElement
     * @returns {any}
     */
    public static async click(targetElement: ElementFinder, timeout = PageHelper.DEFAULT_TIMEOUT) {
        await WaitHelper.getInstance().waitForElementToBeClickable(targetElement, timeout);
        return targetElement.click();
    }

    /**
     * Click on the element and wait for it to get hidden
     * @param {ElementFinder} targetElement
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    public static async clickAndWaitForElementToHide(targetElement: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeClickable(targetElement);
        await targetElement.click();
        return WaitHelper.getInstance().waitForElementToBeHidden(targetElement);
    }

    /**
     * Gets promise for current url
     * @returns {any}
     */
    public static async currentUrl() {
        return browser.getCurrentUrl();
    }

    /**
     * Verify whether element is present on page or not
     * @param {ElementFinder} targetElement
     * @param {boolean} toWait
     * @param {number} timeout
     * @returns {Promise<boolean>}
     */
    public static async isElementPresent(targetElement: ElementFinder, toWait = true, timeout = PageHelper.DEFAULT_TIMEOUT) {
        if (toWait) {
            await WaitHelper.getInstance().waitForElementToBePresent(targetElement, timeout);
        }
        return targetElement.isPresent();
    }

    /**
     * Verify whether element is displayed on page or not
     * @param {ElementFinder} targetElement
     * @returns {Promise<boolean>}
     */
    public static async isElementDisplayed(targetElement: ElementFinder,
                                           toWait = true,
                                           timeout = PageHelper.DEFAULT_TIMEOUT) {
        try {
            if (toWait) {
                await WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement, timeout);
            }
            return targetElement.isDisplayed();
        } catch (e) {
            return false;
        }
    }

    /**
     * Refresh a page
     *
     */
    public static async refreshPage() {
        await browser.refresh();
    }

    static pageLoaded() {
        return browser.waitForAngular();
    }

    public static async maximizeWindow() {
        await browser.driver.manage().window().maximize();
    }

    public static async getPageTitle() {
       return await browser.getTitle();
    }

    public static async clickAllElements(targetElements: ElementArrayFinder) {
        await targetElements.each(async function (elem) {
            await elem.click();
        });
    }

    /**
     * Mouse hover on element
     * @param {targetElement} targetElement
     * @returns {any}
     */
    public static async actionHoverOver(targetElement: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
        return await browser.actions().mouseMove(targetElement).perform();
    }

    static async switchToDefaultContent() {
        await browser.switchTo().defaultContent();
    }

    static async closeAlertIfPresent(timeout = Constants.timeout.xs) {
        await PageHelper.staticWait(timeout);
        await browser.switchTo().alert().accept().then(null, async function() {
            await PageHelper.staticWait(timeout);
        });
    }

    /**
     * Verify whether element is enabled on page or not
     * @param {ElementFinder} targetElement
     * @returns {Promise<boolean>}
     */
    public static async isElementEnabled( targetElement: ElementFinder, toWait = true ) {
        if ( toWait ) {
            await WaitHelper.getInstance().waitForElementToBeDisplayed( targetElement );
        }
        return targetElement.isEnabled();
    }

    public static async goToUrl(url: string, waitForAngular = false) {
        await PageHelper.maximizeWindow();
        await browser.waitForAngularEnabled(waitForAngular);
        return await browser.get(url, PageHelper.DEFAULT_TIMEOUT);
    }

    public static async staticWait(millisec = Constants.timeout.s) {
        await browser.sleep(millisec);
    }

    static async isElementHidden(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            return browser.wait(async () =>
                !(await targetElement.isPresent()) || !(await targetElement.isDisplayed()),
            ).then(() => true).catch(() => false);
        }
        return !(await targetElement.isPresent()) || !(await targetElement.isDisplayed());
    }

    public static async isElementSelected(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            await WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
        }
        return targetElement.isSelected();
    }

    static async restart() {
        await browser.restart();
    }

    static async getNewTabAvailable(windowNumber = 1) {
        const handles = await browser.getAllWindowHandles();
        return handles[windowNumber];
    }

    public static async acceptAlert() {
        return await browser.switchTo().alert().accept();
    }

    public static async getAlertText() {
        return await browser.switchTo().alert().getText();
    }

    static async getCssValue(elem: ElementFinder, attribute: string) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(elem);
        const attributeValue = await elem.getCssValue(attribute);
        return attributeValue.trim();
    }

    public static async switchToOriginalTab() {
        const handles = await browser.getAllWindowHandles();
        const newWindowHandle = handles[0];
        if (newWindowHandle) {
            await browser.switchTo().window(newWindowHandle);
        }
        const url = await browser.getCurrentUrl();
        return browser.driver.get(url);
    }

    static async randomString(size: number) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < size; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
