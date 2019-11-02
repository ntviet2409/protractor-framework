import {By, element} from 'protractor';
import {ButtonHelper} from '../../../component/html/button-helper';
import {CommonPageConstants} from './common-page.constants';

export class CommonPage {
    static get pageTitle() {
        return element(By.css('h1'));
    }

    static get loader() {
        return element(By.css('div.df-loader__container'));
    }

    static get profileOptionsButton() {
        return element(By.css('[class="ml-1 ng-star-inserted"]'));
    }

    static get profileOptions() {
        return {
            logout: ButtonHelper.getButtonByText(CommonPageConstants.profileOptions.logOut),
            configuration: ButtonHelper.getButtonByText(CommonPageConstants.profileOptions.configuration)
        };
    }

    static get loadingContainer() {
        return {
            loadingSpinner: element(By.className('df-loading-spinner')),
            loadingContainer: element(By.className('df-loader__container'))
        };
    }

    public static linkMenu(linkText: string) {
        return element(By.cssContainingText('a', linkText));
    }
}
