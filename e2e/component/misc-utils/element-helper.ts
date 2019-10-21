import {browser, By, element, ElementFinder, protractor} from 'protractor';
import {Constants} from '../misc-utils/constants';
import {WaitHelper} from '../html/wait-helper';
import {PageHelper} from '../html/page-helper';

export class ElementHelper {
    private static readonly EC = protractor.ExpectedConditions;

    static async getBrowser() {
        const capabilities = await browser.getCapabilities();
        return capabilities.get('browserName');
    }

    static async actionMouseMove(item: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(item);
        return browser.actions().mouseMove(item).perform();
    }

    static async actionMouseDown(item: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(item);
        return browser.actions().mouseDown(item).perform();
    }

    static async actionDragAndDrop(source: ElementFinder, destination: ElementFinder) {
        return browser.actions().dragAndDrop(source, destination).perform();
    }

    static async actionDoubleClick(optElementOrButton ?: ElementFinder | string, optButton ?: string) {
        if (optElementOrButton) {
            return browser.actions().doubleClick(optElementOrButton).perform();
        }
        if (optButton) {
            return browser.actions().doubleClick(optButton).perform();
        }
    }

    static async actionClick(optElementOrButton ?: ElementFinder | string, optButton ?: string) {
        if (optElementOrButton) {
            return browser.actions().click(optElementOrButton).perform();
        }
        if (optButton) {
            return browser.actions().click(optButton).perform();
        }
    }

    static async actionHoverOver(locator: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
        return browser.actions().mouseMove(locator).perform();
    }

    static async actionHoverOverAndClick(hoverOverLocator: ElementFinder, clickLocator: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(hoverOverLocator);
        return browser.actions().mouseMove(hoverOverLocator).click(clickLocator).perform();
    }

    static async hasOption(select: ElementFinder, option: string) {
        return select
            .element(By.cssContainingText('option', option))
            .isPresent();
    }

    static async getFocusedElement() {
        return browser
            .driver
            .switchTo()
            .activeElement();
    }

    static async currentSelectedOptionByText(text: string) {
        const selector = `//option[@selected="selected" and normalize-space(.)="${text}"]`;
        return element(By.xpath(selector));
    }

    static async getSelectedOption(select: ElementFinder) {
        return select.element(By.css('option[selected]'));
    }

    static async isVisible(locator: ElementFinder) {
        return this.EC.visibilityOf(locator);
    }

    static async isNotVisible(locator: ElementFinder) {
        return this.EC.invisibilityOf(locator);
    }

    static async inDom(locator: ElementFinder) {
        return this.EC.presenceOf(locator);
    }

    static async notInDom(locator: ElementFinder) {
        return this.EC.stalenessOf(locator);
    }

    static async isClickable(locator: ElementFinder) {
        return this.EC.elementToBeClickable(locator);
    }

    static async hasText(locator: ElementFinder, text: string) {
        return this.EC.textToBePresentInElement(locator, text);
    }

    static async titleIs(title: string) {
        return this.EC.titleIs(title);
    }

    static async hasClass(locator: ElementFinder, klass: string) {
        return locator.getAttribute('class').then((classes: string) => {
            return classes && classes.split(' ').indexOf(klass) !== -1;
        });
    }

    static async hasClassRegex(locator: ElementFinder, klass: string) {
        const classAttribute = await locator.getAttribute('class');
        const pattern = new RegExp('(^|\\s)' + klass + '(\\s|$)');
        return pattern.test(classAttribute);
    }

    static async click(targetElement: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeClickable(targetElement);
        return targetElement.click();
    }

    static async clickUsingJs(targetElement: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
        return this.clickUsingJsNoWait(targetElement);
    }

    static clickUsingJsNoWait(targetElement: ElementFinder) {
        return browser.executeScript('arguments[0].click();', targetElement.getWebElement());
    }

    static async waitForElementToHaveClass(targetElement: ElementFinder,
                                           kClass: string,
                                           timeout = PageHelper.DEFAULT_TIMEOUT,
                                           message = '') {
        await WaitHelper.getInstance().waitForElementToResolve(() => this.hasClass(targetElement, kClass),
            (result: any) => result, timeout, message);
    }

    static async selectDropdownByIndex(elementt: ElementFinder, optionNum: number) {
        if (optionNum) {
            await elementt.findElements(By.tagName('option'))
                .then(async function (options) {
                    await options[optionNum].click();
                });
        }
    }

    static async scrollToElement(ele: ElementFinder, offset = '0') {
        await WaitHelper.getInstance().waitForElementToBePresent(ele);
        await browser.executeScript(`arguments[0].scrollIntoView(true); window.scrollBy(0,${offset});`, ele);
        await PageHelper.staticWait(Constants.timeout.xxs);
    }

    static async scrollToElementBottom(elementt: ElementFinder) {
        await browser.executeScript('arguments[0].scrollIntoView(false);', elementt);
        // tslint:disable-next-line:no-browser-sleep
        await browser.sleep(Constants.timeout.xxs);
    }

    static async scrollToElementTop(elementt: ElementFinder) {
        await browser.executeScript('arguments[0].scrollIntoView(true);', elementt);
    }

    static async getAttributeValue(elem: ElementFinder, attribute: string) {
        return elem.getAttribute(attribute)
            .then(function (text) {
                return text.trim();
            });
    }

    static async getText(elem: ElementFinder) {
        return elem.getText()
            .then(function (text) {
            return text.trim();
        });
    }

    static async scrollToTop() {
        await PageHelper.staticWait(Constants.timeout.xxs);
        await browser.executeScript('window.scrollTo(0,0);');
        await PageHelper.staticWait(Constants.timeout.xxs);
    }
}
