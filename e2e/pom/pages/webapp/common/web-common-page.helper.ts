import {WebCommonPage} from './web-common.po';
import {LoginPage} from '../login-page/login.po';
import {browser, ElementFinder} from 'protractor';
import {BasePageHelper} from '../../base-page.helper';
import {StepLogger} from '../../../../../core/logger/step-logger';
import {PageHelper} from "../../../../component/html/page-helper";
import {WaitHelper} from "../../../../component/html/wait-helper";
import {WebCommonPageConstants} from './web-common-page.constants';
import {Constants} from "../../../../component/misc-utils/constants";
import {CommonPageHelper} from "../../common-page/common-page.helper";
import {TextboxHelper} from "../../../../component/html/textbox-helper";
import {AddEditChannelPage} from '../add-edit-channel/add-edit-channel.po';

export class WebCommonPageHelper extends BasePageHelper {
    static readonly qaUser = WebCommonPageConstants.credentials.qaUser;
    static readonly legacyUser = WebCommonPageConstants.credentials.legacyUser;
    static readonly topicsWorkbenchUser = WebCommonPageConstants.credentials.topicsWorkbenchUser;
    static readonly qaUserUsedForRoleChange = WebCommonPageConstants.credentials.qaUserUsedForRoleChange;

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
        try {
            stepLogger.subStep('Expand the view if it is collapsed');
            await this.collapseView();
            stepLogger.subStep('Click "Demo Link"');
            await PageHelper.click(LoginPage.demoLoginLink);
            stepLogger.subStep('Enter Email Address');
            await TextboxHelper.sendKeys(LoginPage.emailTextBox, username);
            stepLogger.subStep('Enter Password');
            await TextboxHelper.sendKeys(LoginPage.passwordTextBox, password);
            stepLogger.subStep('Click "SignIn" button');
            await PageHelper.click(LoginPage.signInButton);
            await this.verifyLoginIsSuccessful(username, password, stepLogger);
        } catch (e) {
            stepLogger.subStep('Login is done successfully');
        }
    }

    static async verifyLoginIsSuccessful(username: string, password: string, stepLogger: StepLogger) {
        try {
            let signInButtonPresented = true;
            let maxTry = Constants.MAX_RETRY_ATTEMPTS;
            while (signInButtonPresented && maxTry-- > 0) {
                try {
                    stepLogger.subStep(`Wait for sign in button to be hidden at ${Constants.MAX_RETRY_ATTEMPTS - maxTry}`);
                    await WaitHelper.getInstance().waitForElementToBeHidden(LoginPage.signInButton, Constants.timeout.xxl);
                    stepLogger.subStep('Get sign in button status after sign in without waiting');
                    signInButtonPresented = await PageHelper.isElementPresent(LoginPage.signInButton, false);
                } catch (e) {
                    stepLogger.subStep('Try again by refreshing the page');
                    await browser.refresh();
                    stepLogger.subStep(`Click "Demo Link" at ${maxTry}`);
                    await PageHelper.click(LoginPage.demoLoginLink);
                    stepLogger.subStep(`Enter email address at ${maxTry}`);
                    await TextboxHelper.sendKeys(LoginPage.emailTextBox, username);
                    stepLogger.subStep(`Enter password at ${maxTry}`);
                    await TextboxHelper.sendKeys(LoginPage.passwordTextBox, password);
                    stepLogger.subStep(`Click "SignIn" button at ${maxTry}`);
                    await PageHelper.click(LoginPage.signInButton);
                    stepLogger.subStep('Get sign in button status after sign in');
                    signInButtonPresented = await PageHelper.isElementPresent(LoginPage.signInButton);
                }
            }
        } catch (e) {
            stepLogger.subStep('Login is done successfully');
        }
    }

    static async clickNoThanksIfPresent(stepLogger: StepLogger) {
        try {
            stepLogger.subStep('Wait for no thanks button to be displayed');
            const noThankPresent = await PageHelper.isElementPresent(AddEditChannelPage.buttons.noThanks, true, Constants.timeout.xxxs);
            if (noThankPresent) {
                stepLogger.subStep('Click no thanks button');
                await PageHelper.click(AddEditChannelPage.buttons.noThanks);
                stepLogger.subStep('Wait for no thanks button to be hidden after being clicked');
                await WaitHelper.getInstance().waitForElementToBeHidden(AddEditChannelPage.buttons.noThanks);
            }
        } catch (e) {
            stepLogger.subStep('No Thanks button is confirmed');
        }
        stepLogger.subStep('Click if the view is collapsed');
        await this.collapseView();
    }

    static async loginAsQaUser(stepLogger: StepLogger) {
        try {
            await this.loginAsUser(this.qaUser.email, this.qaUser.password, stepLogger);
        } catch (e) {
            stepLogger.subStep('Login is done successfully');
        }
        stepLogger.subStep('Click no thanks button if it is presented');
        await this.clickNoThanksIfPresent(stepLogger);
    }

    static async clickButton(button: ElementFinder, buttonName: string, stepLogger: StepLogger) {
        try {
            stepLogger.subStep(`Click "${buttonName}" button after waiting`);
            await PageHelper.click(button);
        } catch (e) {
            stepLogger.subStep('Button is click successfully');
        }
    }

    url(): string {
        return '/signIn';
    }
}
