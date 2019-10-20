import {By, element} from 'protractor';
import {HtmlHelper} from "../../../../component/misc-utils/html-helper";

export class WebCommonPage {

    static get bodyCollapsed() {
        return element(By.xpath(`//${HtmlHelper.tags.body}[@class='is-collapsed']`));
    }

    static get collapseIcon() {
        return element(By.className('nav-logo-collapsed'));
    }
}
