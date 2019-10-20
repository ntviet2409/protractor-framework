import {HomePageConstants} from './home-page.constants';
import {WebCommonPageConstants} from '../common/web-common-page.constants';
import { element, By } from 'protractor';
import {TextElements} from "../../../../component/html/text-elements";

export class HomePage {
    static get buttonName() {
        const button = HomePageConstants.buttonSelectors;
        return {
            add: TextElements.getItemByTitle(button.add),
            edit: TextElements.getItemByTitle(button.edit),
        };
    }

    static get itemName() {
        const addMenuItem = HomePageConstants.itemSelectors;
        const addMenuItemLabel = WebCommonPageConstants.channelName;
        return {
            account: TextElements.getItemByItemAndText(
                addMenuItem.account, addMenuItemLabel.accounts),
            singleAccount: TextElements.getItemByItemAndText(
                addMenuItem.singleAccount, addMenuItemLabel.singleAccount),
            company: TextElements.getItemByItemAndText(
                addMenuItem.company, addMenuItemLabel.companiesToWatch),
            search: TextElements.getItemByText(addMenuItem.search),
            browseSharedChannel: TextElements.getItemByText(
                addMenuItem.browseSharedChannel),
        };
    }

    static get searchLink() {
        return TextElements.getItemByText(HomePageConstants.lhsTrayNavigationLinksLabel.search);
    }

    static get lhsLink() {
        return {
            saveForLater: TextElements.getItemByText(HomePageConstants.lhsTrayNavigationLinksLabel.saveForLater),
            userProfile: TextElements.getItemByClass(HomePageConstants.classSelectors.userName),
            overlay: TextElements.getItemById(HomePageConstants.classSelectors.overlay),
        };
    }

    static get userProfileOptions() {
        return {
            administration: TextElements.getItemByTextInsideItemById(HomePageConstants.classSelectors.userProfile,
                HomePageConstants.userProfileOptions.administration),
            accountSettings: TextElements.getItemByTextInsideItemById(HomePageConstants.classSelectors.userProfile,
                HomePageConstants.userProfileOptions.accountSettings),
            updateRoleAndChannels: TextElements.getItemByTextInsideItemById(HomePageConstants.classSelectors.userProfile,
                HomePageConstants.userProfileOptions.updateRoleAndChannels),
            emailSettings: TextElements.getItemByTextInsideItemById(HomePageConstants.classSelectors.userProfile,
                HomePageConstants.userProfileOptions.emailSettings),
            logOut: TextElements.getItemByTextInsideItemById(HomePageConstants.classSelectors.userProfile,
                HomePageConstants.userProfileOptions.logOut),
        };
    }

    static get searchInputField() {
        return element(By.css('[name="search"]'));
    }
}
