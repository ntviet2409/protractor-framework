import {browser} from 'protractor';
import {PageHelper} from '../../../component/html/page-helper';

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
}
