import { By, element } from 'protractor';

export class ButtonHelper {
    static getButtonByText(text: string, isContains = false) {
        const xpath = isContains ? `//button[contains(text(),${text})]` : `//button[text()='${text}']`;
        return element(By.xpath(xpath));
    }

    static getAllButtonByText(text: string, isContains = false) {
        const xpath = isContains ? `//button[contains(text(),${text})]` : `//button[text()='${text}']`;
        return element.all(By.xpath(xpath));
    }
}
