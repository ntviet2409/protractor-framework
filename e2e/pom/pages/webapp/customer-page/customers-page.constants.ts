export class CustomersPageConstants {
    static readonly pageTitle = 'Customer';
    static readonly launchCenter = 'Launch Center';
    static readonly customerName = 'Automated Testing - Regression Test - Chrome';
    static readonly byteStacker = 'Bytestacker';
    static readonly autoAdmtCust = 'Auto Admt Customer';
    static readonly e2eTestCustomer = 'Automated Testing - E2E Test - Chrome';
    static readonly impersonating = 'Impersonating:';
    static readonly customerList = 'Customer list';
    static readonly myAccount = 'My Account';
    static readonly yes = 'YES';

    static readonly labels = Object.freeze({
        searchBox: 'Search Box',
        emsTest: 'EMS test',
        ems: 'EMS',
    });

    static get allCustomerTables() {
        return {
            customers: 'All Customers'
        };
    }

    static get userTestData() {
        return {
            name: 'Automated Testing - E2E Test - Chrome',
            email: 'admin@chromeautoe2etest.com',
            partnerBrand: 'AlertFind',
            mapBased: true,
            mobileAlerting: true,
            confirmationOptions: true,
            domainNames: ['chromeautoe2etest.com']
        };
    }

    static menuBarItems = Object.freeze({
        customers: 'Customers',
        supportUser: 'Support Users',
        hotline: 'Hotline Phone Numbers',
        pageCarriers: 'Pager Carriers'
    });
}
