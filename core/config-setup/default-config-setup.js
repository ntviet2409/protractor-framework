const setupUtilities = require('./setup-utilities');

const maxBrowserInstances = process.env.MAX_INSTANCES || setupUtilities.getParam(
    5,
    "--params.maxInstances",
    false);
const useHeadlessBrowser = process.env.HEADLESS_BROWSER || setupUtilities.toBoolean(
    setupUtilities.getParam(
        false,
        "--params.headlessBrowser",
        false
    )
);
const chromeHeadlessArgs = [
  '--headless',
    '--disable-gpu',
    '--window-size=1280x800',
    '--disable-dev-shm-usage',
    '--no-sandbox',
    '--acceptInsecureCerts',
    '--ignore-certificate-errors',
    '--remote-debugging-port=9222',
    '--disable-blink-features=BlockCredentialedSubresources',
    '--disable-web-security'
];
/*  ABOUT --disable-dev-shm-usage:
    By default, Docker runs a container with a /dev/shm shared memory space 64MB.
    This is typically too small for Chrome and will cause Chrome to crash when rendering large pages.
    To fix, run the container with docker run --shm-size=1gb to increase the size of /dev/shm.
    Since Chrome 65, this is no longer necessary. Instead, launch the browser with the --disable-dev-shm-usage flag

    sources:
        - https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#tips
        - https://developers.google.com/web/tools/puppeteer/troubleshooting
*/
const chromeOptions = {
    args: useHeadlessBrowser ? chromeHeadlessArgs : [],
    prefs: {
        'download': {
            'prompt_for_download': false,
            'directory_upgrade': true,
            'default_directory': 'Downloads'
        }
    },
    useAutomationExtension: false,
};
const configSetup = {
    restartBrowserBetweenTests: false,
    SELENIUM_PROMISE_MANAGER: false,
    multiCapabilities: [
        {
            browserName: 'chrome',
            shardTestFiles: 'true',
            maxInstances: maxBrowserInstances,
            'chromeOptions': chromeOptions
        }
    ],
    allScriptsTimeout: 400000,
    suites: {
        e2e_tests: './e2e/test-suites/e2e/*.e2e-spec.ts',
    },
    capabilities: {
        browserName: 'chrome',
        name: process.env.JOB_BASE_NAME || 'Test',
        recordVideo: false,
        chromeOptions: chromeOptions
    },
    params: {
        verboseLogging: process.env.ENABLE_VERBOSE_LOGGING || setupUtilities.getParam(false, '--params.enableVerboseLogging', false),
        maxInstances: 5,
        maxSessions: 5,
        users: {
            cmroot: {
                "username": "cmcroot",
                "password": "!hailst0rm"
            },
            user: {
                "username": "all@bytestacker.com",
                "password": "!hailst0rm"
            },
            epaRoot: {
                "username": "Eparoot",
                "password": "!hailst0rm"
            },
        },
        selenium: {
            hub: process.env.SELENIUM_URL || setupUtilities.getParam('http://10.26.241.71:4444/wd/hub', "--params.selenium.hub", false)
        },
        urls: {
            llanoUrl: 'https://llano.alertfind.com',
        }
    },
    baseUrl: 'https://llano.alertfind.com',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 600000,
        print: function () {}
    }
};
module.exports = configSetup;
