// tslint:disable:no-large-timeout
// tslint:disable:no-browser-sleep
import { BasePageHelper } from '../../base-page.helper';
import { StepLogger } from '../../../../../core/logger/step-logger';
import {CustomersPageConstants} from './customers-page.constants';
import {WaitHelper} from '../../../../component/html/wait-helper';
import {CommonPage} from '../../common-page/common.po';
import {PageHelper} from '../../../../component/html/page-helper';
import {CommonPageHelper} from '../../common-page/common-page.helper';
import {CustomerPage} from './customer-page.po';
import {TextboxHelper} from '../../../../component/html/textbox-helper';
import {ExpectationHelper} from '../../../../component/misc-utils/expectation-helper';
import {By} from 'protractor';

export class CustomersPageHelper extends BasePageHelper {
    static async verifyUserLogginSuccessfully(stepLogger: StepLogger) {
        const menuItems = CustomersPageConstants.menuBarItems;
        stepLogger.subVerification('User should be landed at My Account page');
        await ExpectationHelper.verifyDisplayedStatus(CustomerPage.myAccountHeader, CustomersPageConstants.myAccount, stepLogger);
        stepLogger.subVerification('Menu bar from the left should contain: Customers');
        await ExpectationHelper.verifyDisplayedStatus(CommonPage.linkMenu(menuItems.customers),
            menuItems.customers, stepLogger);
        stepLogger.subVerification('Menu bar from the left should contain: Support Users');
        await ExpectationHelper.verifyDisplayedStatus(CommonPage.linkMenu(menuItems.supportUser),
            menuItems.supportUser, stepLogger);
        stepLogger.subVerification('Menu bar from the left should contain: Hotline Phone Number');
        await ExpectationHelper.verifyDisplayedStatus(CommonPage.linkMenu(menuItems.hotline),
            menuItems.hotline, stepLogger);
        stepLogger.subVerification('Menu bar from the left should contain: Page Carriers');
        await ExpectationHelper.verifyDisplayedStatus(CommonPage.linkMenu(menuItems.pageCarriers),
            menuItems.pageCarriers, stepLogger);
    }

    static async navigateToMenuByName(menuName: string, stepLogger: StepLogger) {
        stepLogger.subStep('Wait for loading icon to be hidden');
        await WaitHelper.waitForElementToBeHidden(
            CommonPage.loadingContainer.loadingContainer, PageHelper.timeout.xxl);
        stepLogger.subStep('Navigate to Customers menu bar on the left');
        await PageHelper.click(CommonPage.linkMenu(menuName));
    }

    static async verifyNavigation(stepLogger: StepLogger) {
        stepLogger.subStep('Wait for loading icon to be hidden');
        await WaitHelper.waitForElementToBeHidden(
            CommonPage.loadingContainer.loadingContainer, PageHelper.timeout.xxl);
        stepLogger.subStep('Wait for customer name to be displayed');
        await WaitHelper.waitForElementToBeDisplayed(CustomerPage.getFirstCustomer.name);
        stepLogger.subVerification('Verify page title');
        await CommonPageHelper.verifyPageNavigation(
            stepLogger, CustomersPageConstants.pageTitle);
        stepLogger.subVerification('Search box should be displayed');
        await ExpectationHelper.verifyDisplayedStatus(CustomerPage.getTopMenuOptions.searchTextBox,
            CustomersPageConstants.labels.searchBox, stepLogger);
    }

    static async searchForCustomer(stepLogger: StepLogger, customerName: string) {
        stepLogger.subStep(`Search for ${customerName} customer`);
        await WaitHelper.waitForElementToBeHidden(CommonPage.loadingContainer.loadingContainer, PageHelper.timeout.xl);
        return TextboxHelper.sendKeys(CustomerPage.getTopMenuOptions.searchTextBox, customerName, true);
    }

    static async verifySearchResult(stepLogger: StepLogger,
                                    customerName = CustomersPageConstants.e2eTestCustomer) {
        stepLogger.subStep(`Verifying the search result contains ${customerName}`);
        await WaitHelper.waitForElementToBeDisplayed(CustomerPage.allCustomersTable.customers.first());
        await ExpectationHelper.verifyDisplayedStatus(CustomerPage.allCustomersTable.customers.first(),
            CustomersPageConstants.allCustomerTables.customers,
            stepLogger);
        const customerTableList = CustomerPage.allCustomersTable.customers;
        const customers = [];
        for (let i = 0; i < await customerTableList.count(); i++) {
            customers[i] = await PageHelper.getText(customerTableList.get(i).element(By.css('td[data-header=Name]')));
        }
        expect(customers.includes(customerName)).toBe(true);
    }

    url(): string {
        return '/dashboard/customer';
    }
}
