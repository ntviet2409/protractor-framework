/* tslint:disable:max-file-line-count */
import {StepLogger} from '../../../../../core/logger/step-logger';
import {HomePage} from './home.po';
import {HomePageConstants} from './home-page.constants';
import {ElementFinder} from 'protractor';
import {AddEditChannelPage} from '../add-edit-channel/add-edit-channel.po';
import {AddEditChannelPageConstants} from '../add-edit-channel/add-edit-channel-page.constants';
import {WebCommonPageHelper} from '../common/web-common-page.helper';
import {PageHelper} from "../../../../component/html/page-helper";
import {Constants} from "../../../../component/misc-utils/constants";
import {ElementHelper} from "../../../../component/misc-utils/element-helper";
import {ExpectationHelper} from "../../../../component/misc-utils/expectation-helper";
import {TextboxHelper} from "../../../../component/html/textbox-helper";

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
        await ExpectationHelper.verifyDisplayedStatus(menuItem.singleAccount, menuItemTexts.singleAccount, stepLogger);
        await ExpectationHelper.verifyDisplayedStatus(menuItem.company, menuItemTexts.company, stepLogger);
        await ExpectationHelper.verifyDisplayedStatus(menuItem.search, menuItemTexts.search, stepLogger);
        await ExpectationHelper.verifyDisplayedStatus(menuItem.browseSharedChannel, menuItemTexts.browseSharedChannel, stepLogger);
    }

    static async clickItem(option: ElementFinder, optionName: string, stepLogger: StepLogger) {
        let maxTry = Constants.MAX_RETRY_ATTEMPTS;
        let isOptionDisplayed = false;
        let isSetupLabelDisplayed = false;
        while (maxTry-- > 0 && !isOptionDisplayed && !isSetupLabelDisplayed) {
            try {
                stepLogger.subStep(`Wait for '${optionName}' to be displayed`);
                isOptionDisplayed = await PageHelper.isElementDisplayed(option);
                stepLogger.subStep(`Click on '${optionName}' from Add Menu Item`);
                await PageHelper.click(option);
                stepLogger.subStep(`Check the status of Setup label display status`);
                isSetupLabelDisplayed = await PageHelper.isElementDisplayed(AddEditChannelPage.setUpChannelHeader.setup,
                    true, Constants.timeout.s);
                stepLogger.subStep(`Option status is ${isOptionDisplayed} and Setup label is ${isSetupLabelDisplayed}`);
            } catch (e) {
                stepLogger.subStep(`Try again at ${maxTry - Constants.MAX_RETRY_ATTEMPTS} attempt`);
                await PageHelper.refreshPage();
                await HomePageHelper.clickOnButtonFromLhsTray(
                    HomePage.buttonName.add,
                    HomePageConstants.buttonSelectors.add,
                    stepLogger);
                await HomePageHelper.verifyAddButtonMenuItems(stepLogger);
            }
        }
    }

    static async verifyHomePageIsDisplayed(stepLogger: StepLogger) {
        await this.verifyHomePageDashboard(stepLogger);
    }

    static async clickContinueButton(stepLogger: StepLogger) {
        await WebCommonPageHelper.clickButton(
            AddEditChannelPage.buttons.continue,
            AddEditChannelPageConstants.buttonLabel.continue,
            stepLogger);
    }

    static async verifyCreateChannelButtonIsShown(stepLogger: StepLogger) {
        const button = AddEditChannelPage.buttons;
        const buttonTexts = AddEditChannelPageConstants.buttonLabel;
        stepLogger.subStep('Verify create channel button is shown');
        await ExpectationHelper.verifyDisplayedStatus(button.createChannel, buttonTexts.createChannel, stepLogger);
    }

    static async renameChannelName(channelName: string, stepLogger: StepLogger, clickCreateButton = false) {
        stepLogger.subStep('Enter "ChannelName"');
        await TextboxHelper.sendKeys(AddEditChannelPage.channelNameInputBox, channelName);
        if (clickCreateButton) {
            stepLogger.subStep('Click create channel button');
            await WebCommonPageHelper.clickButton(AddEditChannelPage.buttons.createChannel,
                AddEditChannelPageConstants.buttonLabel.createChannel,
                stepLogger);
        }
    }
}
