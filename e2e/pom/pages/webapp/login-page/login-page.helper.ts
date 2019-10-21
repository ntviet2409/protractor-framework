import {StepLogger} from '../../../../../core/logger/step-logger';
import {ExpectationHelper} from '../../../../component/misc-utils/expectation-helper';
import {LoginPageConstants} from './login-page.constants';
import {LoginPage} from './login.po';

export class LoginPageHelper {

    static async verifyNavigation(stepLogger: StepLogger) {
        const page = LoginPage.mainContainer;
        const pageTexts = LoginPageConstants.pageText;
        await ExpectationHelper.verifyDisplayedStatus(page.loginPage, pageTexts, stepLogger);
    }
}
