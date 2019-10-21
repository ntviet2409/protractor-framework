# protractor-automated-tests
This repository keeps the automation project for the First Rain. The automation project is written with the Protractor framework.

## Popular issue on docker
In case if any of you come across, chrome getting 'no session' or 'chrome not reachable' on docker
It's due to low shared memory
/dev/shm
Please [increase shared memory](https://stackoverflow.com/questions/30210362/how-to-increase-the-size-of-the-dev-shm-in-docker-container) to around 1G as default is only 64MB and might cause issues even with single instance


## Code organization

For integration tests the folder structure should be similar to this as our spec files are going to utilize multiple page objects for completing a test
```
─e2e
    │   tsconfig.e2e.json
    │
    ├───components
    │   ├───devfactory
    │   │   ├───component-helpers
    │   │   │       component-helpers.ts
    │   │   │
    │   │   └───component-types
    │   │       └───(component-name)-component
    │   │    breadcrumbs-component-selectors.ts
    │   │
    │   ├───html
    │   │       (type)-helper.ts
    │   │
    │   ├───misc-utils
    │   │       common-label.ts
    │   │       constants.ts
    │   │       html-helper.ts
    │   │
    │   └───vendor
    │       └───vendor-name
    │    vendor-name.ts
    │
    ├───page-objects
    │   ├───contracts
    │   │       page.ts
    │   │
    │   └───pages
    │       │   base-page.ts
    │       │
    │       └───(page-name)
    │               (page-name)-page.constants.ts
    │               (page-name)-page.helper.ts
    │               (page-name)-page.validations.ts
    │               (page-name).po.ts
    │
    └───test-suites
        ├───(test-rail-suite-name)-test-suite
        │   └───(testrail-root-after-suite)
        │(testrail-root-after-suite).e2e-spec.ts
        │
        └───helpers
     suite-names.ts
```

## Framework components


### Contracts


e2e\modules\Contracts are basically a kind of interface, like those things which are compulsory to be implemented by every page object file. Right now we have it for Page, so whatever is declared in it is a unified requirement for all the components that should be put in here. So this `Page` contract has to be inherited by all the page objects


### Base Page

e2e\page-objects\base-page it's basically a utility for all the tricky selectors so this page has to be inherited by all the page objects

### Naming convention


We are using default conventions which are suggested by angular team on top of that we are also using some more configuration parameters to produce high quality code.
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines


### Spec files


We must post fix `.e2e-spec.ts` for all the test files

## Docker execution

We have a Dockerfile created in root of the repo for test execution in interactive mode and usage VNC for debugging as well. Documentation [here](https://docs.google.com/document/d/1JGfpa_HDR0COUyC58XlhJEv05SPn2ZGophMbC6X0jTw "Click here to see docker execuion documentation")


## Reporting component

Allure reporting is integrated. For configuration please visit https://github.com/allure-framework/allure-jasmine

On Jenkins we have to use Jenkins plugin

https://docs.qameta.io/allure/#_jenkins

on local machine it can be generated via command line

```
npm install -g allure-commandline --save-dev
```

allure serve <path of artifacts>, example

```
allure serve allure-results
allure generate ./auto-generated/allure-results --clean -o allure-report
```

To view the report: index.html, make sure that on Firefox, leveraging the restriction by going to about:config url and then uncheck privacy.file_unique_origin boolean value.
## Running parallel tests execution

Following keys are defined in [default-config-setup.js](https://github.com/trilogy-group/common-automation-framework-protractor/blob/develop/core/config-setup/default-config-setup.js)

multiCapabilities.maxInstances: 5  Default max instances for selenium grid

bsMultiCapabilities.maxInstances: 5 Default max instances for browser stack


3 Ways to pass the max instances

1. Using environment variable MAX_INSTANCES

2. Using command line param --params.maxInstances

3. Default is 5



## Running end-to-end tests

1. Install NodeJS in local (https://nodejs.org/en/download/) v9.10
2. Install protractor globally. Command: npm install -g protractor
3. Clone the repo in local
4. Open terminal/cmd inside cloned directory (where package.json is present)
5. Install project dependencies. Command: npm install
6. Execute command: npm run postinstall
7. Execute command: npm run lint
8. Execute command to run functional API+UI tests on CI: npm run e2e-tc -- --suite functional_tests
9. Execute command to run e2e, regression web tests on CI: npm run e2e-tc -- --params.frQaUrl=https://qaapp.firstrain.com --suite e2e_tests,regression_tests


Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Customization switches

Almost all the switches are configurable using Environment variable, Check the respective section for more details

### Passing parameters to NPM

NPM scripts can have parameters passed by command line.  E.g.:

```
// Notice extra -- with cmd line args
npm run e2e -- --baseUrl=<URL>

OR  ./node_modules/.bin/webdriver-manager update

protractor <conf-file> --baseUrl=<URL>
```

## Thumb rules to be followed for organizing the code -
* `*.constant.ts`, can have field/objects/properties but not methods
* `*.po.ts` can have objects/properties but not methods
* `*.validation.ts` can have everything
* `*.helper.ts` can only have methods

## Training references

-[Javascript tutorials](https://www.w3schools.com/js/)

-[Typescript language](https://www.typescriptlang.org/)

-[Typescript Tutorials](https://www.tutorialspoint.com/typescript/)

-[Protractor Foundation & Api](http://www.protractortest.org/)
