import {By, element} from 'protractor';
import {HtmlHelper} from "../misc-utils/html-helper";

export class TextElements {

    static getItemByText(text: string, isContains = false, tag = '*') {
        if (isContains) {
            return element.all(By.xpath(`//${tag}[contains(text(),"${text}")]`)).first();
        }
        return element.all(By.xpath(`//${tag}[normalize-space(text())="${text}"]`)).first();
    }

    static getSpanByText(text: string, isContains = false, tag = HtmlHelper.tags.span) {
        return this.getItemByText(text, isContains, tag);
    }

    static getHeaderThreeByText(text: string, textIsContains = false) {
        return this.getItemByText(text, textIsContains, HtmlHelper.tags.h3);
    }
}
