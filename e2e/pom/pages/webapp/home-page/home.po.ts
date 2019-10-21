import {By, element} from 'protractor';
import {HomePageConstants} from './home-page.constants';

export class HomePage {
    static get buttonName() {
        return {
            add: element(By.css('.jq-fr-add-channel')),
            edit: element(By.css('.jq-fr-edit-channels')),
        };
    }

    static get itemName() {
        const addMenuItem = HomePageConstants.itemSelectors;
        return {
            account: element(By.css(`[item="${addMenuItem.account}"]`)),
            company: element(By.css(`[item="${addMenuItem.company}"]`)),
        };
    }
}
