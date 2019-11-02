import {StepLogger} from '../../../../../core/logger/step-logger';
import {LoginPage} from './login.po';
import {BasePageHelper} from '../../base-page.helper';
import {CommonPageConstants} from '../../common-page/common-page.constants';
import {WaitHelper} from '../../../../component/html/wait-helper';
import {PageHelper} from '../../../../component/html/page-helper';
import {browser} from 'protractor';
import {CommonPage} from '../../common-page/common.po';
import {TextboxHelper} from '../../../../component/html/textbox-helper';

export class LoginPageHelper extends BasePageHelper {
    static async login(stepLogger: StepLogger, username: string, password: string) {
        await WaitHelper.waitForElementOptionallyPresent(
            LoginPage.formControls.username, PageHelper.timeout.xxl);
        stepLogger.subStep('Delete all cookies');
        await browser.driver.manage().deleteAllCookies();
        await PageHelper.refreshPage();
        await WaitHelper.waitForElementToBeHidden(CommonPage.loadingContainer.loadingContainer, PageHelper.timeout.xxl);
        await WaitHelper.waitForElementOptionallyPresent(
            LoginPage.formControls.username, PageHelper.timeout.xxl);
        stepLogger.subStep('Fill out valid username and password that you added in initial wizard C1160434 and press "Login".');
        stepLogger.subStep('Enter Username');
        await TextboxHelper.sendKeys(LoginPage.formControls.username, username);

        stepLogger.subStep('Enter Password and press enter');
        await TextboxHelper.sendKeys(LoginPage.formControls.password, password, true);
        await WaitHelper.waitForElementToBeHidden(CommonPage.loadingContainer.loadingContainer, PageHelper.timeout.xxxl);
    }

    async goToLlano(stepLogger: StepLogger) {
        stepLogger.subStep(`Open Test URL: ${CommonPageConstants.llanoUrl}`);
        return this.get(CommonPageConstants.llanoUrl);
    }

    url(): string {
        return '/login';
    }
}
