import {SuiteNames} from '../helpers/suite-names';
import {StepLogger} from '../../../core/logger/step-logger';
import {PageHelper} from '../../component/html/page-helper';
import {CommonPageHelper} from '../../pom/pages/common-page/common-page.helper';
import {LoginPageHelper} from '../../pom/pages/webapp/login-page/login-page.helper';
import {CustomersPageHelper} from '../../pom/pages/webapp/customer-page/customers-page.helper';
import {CustomersPageConstants} from '../../pom/pages/webapp/customer-page/customers-page.constants';

describe(SuiteNames.e2eTestSuite, () => {
    let stepLogger: StepLogger;
    let loginPageHelper: LoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = new LoginPageHelper();
        await PageHelper.maximizeWindow();
    });

    beforeEach(async () => {
        stepLogger = new StepLogger();
        await loginPageHelper.goToLlano(stepLogger);
        // await LoginPageHelper.logout(stepLogger);
    });

    afterAll(async () => {
        await CommonPageHelper.genericLogout();
    });

    it('User should be able to login with the correct credential', async () => {
        stepLogger.caseId = 1111;
        stepLogger.stepId(1);
        stepLogger.step('Login to Alertfind with eparoot credentials');
        await LoginPageHelper.login(stepLogger, CommonPageHelper.getCmRootUserName, CommonPageHelper.getCmRootUserPassword);
        stepLogger.verification('Eparoot should be able to login successfully');
        await CustomersPageHelper.verifyUserLogginSuccessfully(stepLogger);
    });

    it('User Login successfully and navigate to Customer page', async () => {
        stepLogger.caseId = 2222;
        stepLogger.stepId(1);
        stepLogger.step('Login to Alertfind with eparoot credentials');
        await LoginPageHelper.login(stepLogger, CommonPageHelper.getCmRootUserName, CommonPageHelper.getCmRootUserPassword);
        stepLogger.verification('Eparoot should be able to login successfully');
        await CustomersPageHelper.verifyUserLogginSuccessfully(stepLogger);

        stepLogger.stepId(2);
        stepLogger.step('Navigate to Customers menu');
        await CustomersPageHelper.navigateToMenuByName(CustomersPageConstants.menuBarItems.customers, stepLogger);
        stepLogger.verification('Eparoot should be able to login successfully');
        await CustomersPageHelper.verifyNavigation(stepLogger);
    });

    // tslint:disable-next-line:no-manual-specs
    it('Search result should be relevant', async () => {
        stepLogger.caseId = 3333;

        stepLogger.stepId(1);
        stepLogger.step('Login to Alert find as a CMCROOT with valid credentials');
        await LoginPageHelper.login(stepLogger, CommonPageHelper.getCmRootUserName, CommonPageHelper.getCmRootUserPassword);
        stepLogger.verification('Should be login successfully');
        await CustomersPageHelper.verifyUserLogginSuccessfully(stepLogger);

        stepLogger.stepId(2);
        stepLogger.step('Navigate to Customers menu');
        await CustomersPageHelper.navigateToMenuByName(CustomersPageConstants.menuBarItems.customers, stepLogger);
        stepLogger.verification('Eparoot should be able to login successfully');
        await CustomersPageHelper.verifyNavigation(stepLogger);

        stepLogger.stepId(3);
        stepLogger.step('Search Customer by name');
        await CustomersPageHelper.searchForCustomer(stepLogger, CustomersPageConstants.e2eTestCustomer);
        stepLogger.verification('Customer name should be correct according to search keyword');
        await CustomersPageHelper.verifySearchResult(stepLogger, CustomersPageConstants.e2eTestCustomer);
    });
});
