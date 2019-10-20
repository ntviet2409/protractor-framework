import {browser} from 'protractor';

export class WebCommonPageConstants {

    static get credentials() {
        const user = browser.params.login.webapp;
        return {
            qaUser: {
                email: user.qaUser.email,
                password: user.qaUser.password,
            },

            topicsWorkbenchUser: {
                username: user.topicsWorkbenchUser.username,
                password: user.topicsWorkbenchUser.password,
            },
            qaUserUsedForRoleChange: {
                email: user.qaUserUsedForRoleChange.email,
                password: user.qaUserUsedForRoleChange.password,
            },
            legacyUser: {
                email: user.legacyUser.email,
                password: user.legacyUser.password,
            },
        };
    }

    static get channelName() {
        return {
            accounts: 'Accounts',
            singleAccount: 'Single Account Focus',
            companiesToWatch: 'Companies to Watch',
            fiftyCharacters: 'This Channel contains more than fifty characters in its name',
            channelNameFifty: 'This Channel contains more than fifty characters i',
            channelNameSuffix: 'This is a free online calculator which counts the number of characters',
        };
    }

    static get urls() {
        const param = browser.params;
        return {
            frQaUrl: param.frQaUrl,
        };
    }
}
