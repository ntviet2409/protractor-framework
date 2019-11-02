import {ElementFinder} from 'protractor';
import {WebCommonPage} from './web-common.po';
import {LoginPage} from '../login-page/login.po';
import {BasePageHelper} from '../../base-page.helper';
import {AddEditChannelPage} from '../channel/channel.po';
import {StepLogger} from '../../../../../core/logger/step-logger';
import {PageHelper} from '../../../../component/html/page-helper';
import {WaitHelper} from '../../../../component/html/wait-helper';
import {WebCommonPageConstants} from './web-common-page.constants';
import {Constants} from '../../../../component/misc-utils/constants';
import {CommonPageHelper} from '../../common-page/common-page.helper';
import {TextboxHelper} from '../../../../component/html/textbox-helper';

export class WebCommonPageHelper extends BasePageHelper {
    static readonly qaUser = WebCommonPageConstants.credentials.qaUser;

    static async navigateToWebApp(logout = true) {
        const frQaUrl = WebCommonPageConstants.urls.frQaUrl;
        await PageHelper.goToUrl(frQaUrl);
        if (logout) {
            await CommonPageHelper.genericLogout();
        }
    }

    public static async collapseView() {
        const isBodyPresent = await PageHelper.isElementDisplayed(
            WebCommonPage.bodyCollapsed,
            true,
            Constants.timeout.xxs);
        if (isBodyPresent) {
            await PageHelper.click(WebCommonPage.collapseIcon);
        }
    }

    static async loginAsUser(username: string, password: string, stepLogger: StepLogger) {
        stepLogger.subStep('Click "Demo Link"');
        await PageHelper.click(LoginPage.demoLoginLink);
        stepLogger.subStep('Enter Email Address');
        await TextboxHelper.sendKeys(LoginPage.emailTextBox, username);
        stepLogger.subStep('Enter Password');
        await TextboxHelper.sendKeys(LoginPage.passwordTextBox, password);
        stepLogger.subStep('Click "SignIn" button');
        await PageHelper.click(LoginPage.signInButton);
    }

    static async clickNoThanksIfPresent(stepLogger: StepLogger) {
        try {
            stepLogger.subStep('Wait for no thanks button to be displayed');
            const noThankPresent = await PageHelper.isElementPresent(AddEditChannelPage.buttons.noThanks, true, Constants.timeout.xxxs);
            if (noThankPresent) {
                stepLogger.subStep('Click no thanks button');
                await PageHelper.click(AddEditChannelPage.buttons.noThanks);
                stepLogger.subStep('Wait for no thanks button to be hidden after being clicked');
                await WaitHelper.waitForElementToBeHidden(AddEditChannelPage.buttons.noThanks);
            }
        } catch (e) {
            stepLogger.subStep('No Thanks button is confirmed');
        }
        stepLogger.subStep('Click if the view is collapsed');
        await this.collapseView();
    }

    static async loginAsQaUser(stepLogger: StepLogger) {
        await this.loginAsUser(this.qaUser.email, this.qaUser.password, stepLogger);
        await this.clickNoThanksIfPresent(stepLogger);
    }

    static async clickButton(button: ElementFinder, buttonName: string, stepLogger: StepLogger) {
        stepLogger.subStep(`Click "${buttonName}" button after waiting`);
        await PageHelper.click(button);
    }

    url(): string {
        return '/signIn';
    }
}
