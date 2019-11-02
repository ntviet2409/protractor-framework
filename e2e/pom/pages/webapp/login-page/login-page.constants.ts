export class LoginPageConstants {

    static readonly pageText = 'Login';

    static get signInFormIDs() {
        return {
            email: 'email',
            password: 'password',
            demoLogin: 'Demo login',
        };
    }

    static get topicWorkbenchLoginFormIds() {
        return {
            username: 'userName',
            password: 'password',
            signIn: 'Login',
         };
    }

    static get legacyLoginFormIds() {
        return {
            email: 'email',
            password: 'password',
            signIn: 'jq-signin',
        };
    }
    static get legacyVerificationLabels() {
        return {
            username: 'Username',
            password: 'Password',
            signIn: 'SignIn',
        };
    }

    static elementName = Object.freeze( {
            userName: 'username',
            password: 'password'
    });
}
