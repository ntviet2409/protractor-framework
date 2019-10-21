import {browser} from 'protractor';

export class WebCommonPageConstants {

    static get credentials() {
        const user = browser.params.login.webapp;
        return {
            qaUser: {
                email: user.qaUser.email,
                password: user.qaUser.password,
            },
        };
    }

    static get channelName() {
        return {
            accounts: 'Accounts',
            singleAccount: 'Single Account Focus',
            fiftyCharacters: 'This Channel contains more than fifty characters in its name',
            channelNameFifty: 'This Channel contains more than fifty characters i',
        };
    }

    static get urls() {
        const param = browser.params;
        return {
            frQaUrl: param.frQaUrl,
        };
    }
}
