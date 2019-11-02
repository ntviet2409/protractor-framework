import {LoginPageConstants} from './login-page.constants';
import {TextboxElements} from '../../../../component/html/textbox-elements';
import {TextElements} from '../../../../component/html/text-elements';
import {HtmlHelper} from '../../../../component/misc-utils/html-helper';
import {By, element} from 'protractor';

export class LoginPage {
    static get formControls() {
        const elementName = LoginPageConstants.elementName;
        return {
            username: element(By.name(elementName.userName)),
            password: element(By.name(elementName.password)),
            login: element(By.className('df-button__content')),
        };
    }
    static get emailTextBox() {
        return TextboxElements.getInputById(LoginPageConstants.signInFormIDs.email);
    }

    static get passwordTextBox() {
        return TextboxElements.getInputById(LoginPageConstants.signInFormIDs.password);
    }

    static get signInButton() {
        return element(By.id(HtmlHelper.attributeValues.signIn));
    }

    static get demoLoginLink() {
        return TextElements.getItemByText(LoginPageConstants.signInFormIDs.demoLogin);
    }

    static get mainContainer() {
        return {
            loginPage: element(By.className('fr-signup-padding clearfix')),
        };
    }
}
