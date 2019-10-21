import {StepLogger} from '../../../../../core/logger/step-logger';
import {HomePage} from './home.po';
import {HomePageConstants} from './home-page.constants';
import {ElementFinder} from 'protractor';
import {ChannelPageConstants} from '../channel/channel-page.constants';
import {WebCommonPageHelper} from '../common/web-common-page.helper';
import {PageHelper} from '../../../../component/html/page-helper';
import {Constants} from '../../../../component/misc-utils/constants';
import {ElementHelper} from '../../../../component/misc-utils/element-helper';
import {ExpectationHelper} from '../../../../component/misc-utils/expectation-helper';
import {TextboxHelper} from '../../../../component/html/textbox-helper';
import {AddEditChannelPage} from '../channel/channel.po';

export class HomePageHelper {
    static async verifyHomePageDashboard(stepLogger: StepLogger) {
        stepLogger.subStep('Click if the view is collapsed');
        await WebCommonPageHelper.collapseView();
        const isCancelDisplayed = await PageHelper.isElementDisplayed(AddEditChannelPage.cancelChannelButton,
            true, Constants.timeout.xs);
        stepLogger.subStep('Click no thanks button if it is presented');
        await WebCommonPageHelper.clickNoThanksIfPresent(stepLogger);
        if (isCancelDisplayed) {
            stepLogger.subStep('Click Cancel button if it is displayed');
            await PageHelper.click(AddEditChannelPage.cancelChannelButton);
        }
    }

    static async verifySetUpChannelPageIsOpened(channel: ElementFinder, channelName: string, stepLogger: StepLogger) {
        stepLogger.subVerification(`verify '${channelName}' shown`);
        await ExpectationHelper.verifyDisplayedStatus(channel, channelName, stepLogger);
    }

    static async clickOnButtonFromLhsTray(button: ElementFinder,
                                          buttonName: string,
                                          stepLogger: StepLogger) {
        let maxTry = Constants.MAX_RETRY_ATTEMPTS;
        let isButtonDisplayed = false;
        while (maxTry-- > 0 && !isButtonDisplayed) {
            try {
                stepLogger.subStep(`Click on '${buttonName}' button from LHS Tray`);
                isButtonDisplayed = await PageHelper.isElementDisplayed(button);

                stepLogger.subStep(`Status of the button is ${isButtonDisplayed}`);
                await ElementHelper.clickUsingJs(button);
            } catch (e) {
                stepLogger.subStep(`Page is crash. Hence refresh the page at ${Constants.MAX_RETRY_ATTEMPTS - maxTry}`);
                await PageHelper.refreshPage();
            }
        }
    }

    static async verifyAddButtonMenuItems(stepLogger: StepLogger) {
        const menuItem = HomePage.itemName;
        const menuItemTexts = HomePageConstants.itemSelectors;
        await ExpectationHelper.verifyDisplayedStatus(menuItem.account, menuItemTexts.account, stepLogger);
        await ExpectationHelper.verifyDisplayedStatus(menuItem.company, menuItemTexts.company, stepLogger);
    }

    static async clickItem(option: ElementFinder, optionName: string, stepLogger: StepLogger) {
        stepLogger.subStep(`Click on '${optionName}' from Add Menu Item`);
        await PageHelper.click(option);
    }

    static async clickContinueButton(stepLogger: StepLogger) {
        await WebCommonPageHelper.clickButton(
            AddEditChannelPage.buttons.continue,
            ChannelPageConstants.buttonLabel.continue,
            stepLogger);
    }

    static async verifyCreateChannelButtonIsShown(stepLogger: StepLogger) {
        const button = AddEditChannelPage.buttons;
        const buttonTexts = ChannelPageConstants.buttonLabel;
        stepLogger.subStep('Verify create channel button is shown');
        await ExpectationHelper.verifyDisplayedStatus(button.createChannel, buttonTexts.createChannel, stepLogger);
    }

    static async inputChannelName(channelName: string, stepLogger: StepLogger) {
        stepLogger.subStep(`Enter ${channelName}`);
        await TextboxHelper.sendKeys(AddEditChannelPage.channelNameInputBox, channelName);
    }
}
