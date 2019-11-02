import {browser} from 'protractor';

const freeze = Object.freeze;

export class CommonPageConstants {

    public static number = freeze ({
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
    });

    static get llanoUrl() {
        return browser.params.urls.llanoUrl;
    }

    static profileOptions = freeze ({
        configuration: 'Configuration',
        logOut: 'Log Out'
    });

    static get credentials() {
        const user = browser.params.users.user;
        const cmRoot = browser.params.users.cmroot;
        const epaRoot = browser.params.users.epaRoot;
        return {
            cmRootCredentials: {
                username: cmRoot.username.toString(),
                password: cmRoot.password.toString()
            },
            user: {
                username: user.username.toString(),
                password: user.password.toString()
            },
            epaRoot: {
                username: epaRoot.username.toString(),
                password: epaRoot.password.toString()
            },
        };
    }
}
