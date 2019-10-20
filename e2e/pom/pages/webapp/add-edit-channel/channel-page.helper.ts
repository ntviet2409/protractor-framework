import {StepLogger} from '../../../../../core/logger/step-logger';
import {WebCommonPageConstants} from "../common/web-common-page.constants";
import {ExpectationHelper} from "../../../../component/misc-utils/expectation-helper";
import {AddEditChannelPage} from "./add-edit-channel.po";

export class ChannelPageHelper {

    static async verifyChannelNameLength(stepLogger: StepLogger) {
        const item = AddEditChannelPage.channelNameWithMaxLength;
        const itemTexts = WebCommonPageConstants.channelName.channelNameFifty;
        await ExpectationHelper.verifyDisplayedStatus(item, itemTexts, stepLogger);
    }
}
