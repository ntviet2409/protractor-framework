import {LoginPageConstants} from './login-page.constants';
import {HtmlHelper} from '../../../../components/misc-utils/html-helper';
import {TextElements} from '../../../../components/html/html-component-types/text-elements';
import {element, By} from 'protractor';
import {TextboxElements} from '../../../../components/html/html-component-types/textbox-elements';

export class LoginPage {

    static get emailTextBox() {
        return TextboxElements.getInputById(LoginPageConstants.signInFormIDs.email);
    }

    static get passwordTextBox() {
        return TextboxElements.getInputById(LoginPageConstants.signInFormIDs.password);
    }

    static get signInButton() {
        return TextElements.getItemById(HtmlHelper.attributeValues.signIn);
    }

    static get demoLoginLink() {
        return TextElements.getItemByText(LoginPageConstants.signInFormIDs.demoLogin);
    }

    static get mainContainer() {
        return {
            loginPage: element(By.className('fr-signup-padding clearfix')),
        };
    }

    static get topicsWorkbenchFormControls() {
        const formIds = LoginPageConstants.topicWorkbenchLoginFormIds;
        return {
            username: element(By.css('input[name=userName]')),
            password: element(By.css('input[name=password]')),
            signIn: element(By.id(`${formIds.signIn}`)),
        };
    }
    static get labels() {
        return {
            username: 'Username',
            password: 'Password',
            signIn: 'SignIn',
        };
    }

    static get legacyFormControls() {
        const formIds = LoginPageConstants.legacyLoginFormIds;
        return {
            username: element(By.id(formIds.email)),
            password: element(By.id(formIds.password)),
            signIn: element(By.id(formIds.signIn)),
        };
    }
}
