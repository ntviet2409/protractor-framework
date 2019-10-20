import {AddEditChannelPageConstants} from './add-edit-channel-page.constants';
import {element, By} from 'protractor';
import {HtmlHelper} from "../../../../component/misc-utils/html-helper";
import {Constants} from "../../../../component/misc-utils/constants";
import {TextElements} from "../../../../component/html/text-elements";
import {TextboxElements} from "../../../../component/html/textbox-elements";

export class AddEditChannelPage {

    static get channelNameWithMaxLength() {
        return element(By.xpath(`//input[@id='${HtmlHelper.attributeValues.channelName}' and @maxlength='${Constants.number.fifty}']`));
    }

    static get buttons() {
        const button = AddEditChannelPageConstants.buttonLabel;
        return {
            addToList: TextElements.getItemByText(button.addToList),
            updateChannel: TextElements.getItemByText(button.updateChannel),
            createChannel: TextElements.getItemByText(button.createChannel),
            continue: TextElements.getItemByText(button.continue),
            addChannel: TextElements.getItemByText(button.addChannel),
            addToNewChannel: TextElements.getItemByText(button.addToNewChannel),
            addSearchToCustomChannel: TextElements.getItemByText(button.add),
            noThanks: element(By.xpath(`//${HtmlHelper.tags.anchor}
                    [@ng-click='removeChannel()']`)),
            cancel: TextElements.getItemByText(button.cancel),
            addCompany: element(By.className('jqi-add-search-btn')),
            okButton: TextElements.getItemByText(button.ok),
            createChannelDisabled: element(By.xpath(`//a[not(contains(@class,'secondary')) and normalize-space(text())='${button.createChannel}']`)),
            updateChannelDisabled: element(By.xpath(`//a[not(contains(@class,'secondary')) and normalize-space(text())='${button.updateChannel}']`)),
        };
    }

    static get messages() {
        const messageType = AddEditChannelPageConstants.messages;
        return {
            updateChannelSuccessMsg: TextElements.getItemByText(
                messageType.channelUpdateSuccessMsg, true),
            entityAddedSuccessMsg: TextElements.getItemByText(
                messageType.entityAddedSuccessMsg, true),
            searchSavedSuccessMsg: TextElements.getItemByText(
                messageType.searchSavedSuccessMsg),
            quickViewRenamedSuccessMsg: TextElements.getItemByText(
                messageType.quickViewRenameSuccessMsg),
            quickViewSavedSuccessMsg: TextElements.getItemByText(
                messageType.quickViewSavedSuccessMsg),
            blankChannelNameErrorMsg: TextElements.getItemByText(
                messageType.blankChannelNameErrorMessage),
            addInterestErrorMsg: TextElements.getItemByText(
                messageType.addInterestErrorMessage),
            addProductLinesErrorMsg: TextElements.getItemByText(
                messageType.addProductLinesErrorMessage),
        };
    }

    static get channelNameInputBox() {
        return TextboxElements.getInputById(HtmlHelper.attributeValues.channelName);
    }

    static get setUpChannelHeader() {
        const channel = AddEditChannelPageConstants.setUpChannelHeader;
        return {
            verticals: TextElements.getSpanByText(channel.verticals),
            territories: TextElements.getSpanByText(channel.territories),
            productLines: TextElements.getSpanByText(channel.productLines),
            custom: TextElements.getSpanByText(channel.custom),
            accounts: TextElements.getHeaderThreeByText(channel.accounts),
            setup: TextElements.getHeaderThreeByText(channel.setupUpPage, true),
        };
    }

    static get cancelChannelButton() {
        return element(By.css('[class^="jq_u_c_can button fr-button-cancel"]'));
    }
}
