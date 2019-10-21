import {ChannelPageConstants} from './channel-page.constants';
import {element, By} from 'protractor';
import {HtmlHelper} from '../../../../component/misc-utils/html-helper';
import {Constants} from '../../../../component/misc-utils/constants';
import {TextElements} from '../../../../component/html/text-elements';
import {TextboxElements} from '../../../../component/html/textbox-elements';

export class AddEditChannelPage {

    static get channelNameWithMaxLength() {
        return element(By.xpath(`//input[@id='jq-chn-name' and @maxlength='${Constants.number.fifty}']`));
    }

    static get buttons() {
        const button = ChannelPageConstants.buttonLabel;
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
        };
    }

    static get channelNameInputBox() {
        return TextboxElements.getInputById('jq-chn-name');
    }

    static get setUpChannelHeader() {
        const channel = ChannelPageConstants.setUpChannelHeader;
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
