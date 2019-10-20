import {StepLogger} from '../../../../../core/logger/step-logger';
import {SecondExtendWebCommonPageHelper} from '../common/web-common-page-second-extend.helper';

export class LoginPageHelper {

    static async verifyNavigation(stepLogger: StepLogger) {
        await SecondExtendWebCommonPageHelper.verifyNavigation(stepLogger);
    }
}
