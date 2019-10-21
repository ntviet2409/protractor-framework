import {By, element} from 'protractor';
import {HtmlHelper} from '../misc-utils/html-helper';

export class TextboxElements {

    static getInputById(text: string, isContains = false) {
        if (isContains) {
            return element.all(By.xpath(`//${HtmlHelper.tags.input}[contains(@id,"${text}")]`)).first();
        }
        return element.all(By.xpath(`//${HtmlHelper.tags.input}[@id="${text}"]`)).first();
    }
}
