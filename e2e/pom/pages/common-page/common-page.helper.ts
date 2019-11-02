import {browser, ElementFinder} from 'protractor';
import {PageHelper} from '../../../component/html/page-helper';
import {CommonPageConstants} from './common-page.constants';
import {StepLogger} from '../../../../core/logger/step-logger';
import {WaitHelper} from '../../../component/html/wait-helper';
import {CommonPage} from './common.po';
import {ValidationsHelper} from '../../../component/misc-utils/validation-helper';
import { expect } from 'chai';

export class CommonPageHelper {

    static get userName(): string {
        return browser.params.login.user.userName;
    }

    static get userPassword(): string {
        return browser.params.login.user.password;
    }

    static async genericLogout() {
        await browser.manage().deleteAllCookies();
        await PageHelper.executeScript('window.onbeforeunload = function(e){};' +
        'try{window.sessionStorage.clear();window.localStorage.clear();}catch(e){};location.reload();');
    }

    static get getCmRootUserName(): string {
        return CommonPageConstants.credentials.epaRoot.username;
    }

    static get getCmRootUserPassword(): string {
        return CommonPageConstants.credentials.epaRoot.password;
    }

    static async verifyExactText(
        stepLogger: StepLogger, element: ElementFinder,
        expectedValue: string, toContain = true
    ) {
        stepLogger.subVerification(`Verify ${expectedValue} text is displayed`);
        const actualValue = await PageHelper.getText(element);
        expect(actualValue).to.equal(expectedValue, toContain ?
            ValidationsHelper.getDisplayedValidation(actualValue)
            : ValidationsHelper.getNotDisplayedValidation(actualValue));
    }

    static async verifyPageNavigation(
        stepLogger: StepLogger, page: string
    ) {
        await WaitHelper.waitForElementToBeHidden(CommonPage.loadingContainer.loadingContainer,
            PageHelper.timeout.xxl);
        await this.verifyExactText(stepLogger, CommonPage.pageTitle, page);
    }
}
