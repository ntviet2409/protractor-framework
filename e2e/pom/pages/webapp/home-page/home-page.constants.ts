export class HomePageConstants {

    public static readonly dashboard = 'HomePage Dashboard';
    public static readonly summaryStreamBar = 'Stream Summary Bar';
    public static readonly account = 'ACCOUNT';
    public static readonly selectChannelMessage = 'Please select a channel';

    static get buttonSelectors() {
        return {
            add: 'Add New Channel',
            edit: 'Edit Channels'
        };
    }

    static get itemSelectors() {
        return {
            account: 'ACCOUNT',
            singleAccount: 'SINGLE_ACCOUNT',
            company: 'COMPANY',
            competitor: 'COMPETITOR',
            productArea: 'PRODUCT_AREA',
            territory: 'TERRITORY',
            vertical: 'VERTICAL',
            search: 'Search topics, companies...',
            browseSharedChannel: 'Browse shared channels',
        };
    }

    static get channelIdSelector() {
        return {
            singleAccount: '99-',
            accounts: '101-',
            verticals: '103-',
            territories: '105-',
            productLines: '107-',
            competitors: '109-',
            accountShared: '101-3170371',
        };
    }

    static get lhsTrayNavigationLinksLabel() {
        return {
            search: 'Search',
            saveForLater: 'Saved For Later'
        };
    }

    static get channelName() {
        return {
            account: 'Account',
            competitor: 'Competitor',
            productLine: 'Product Line',
            territory: 'Territor',
            vertical: 'Vertical',
            accounts: 'Accounts',
            competitors: 'Competitors',
            territories: 'Territories',
            verticals: 'Verticals',
            firstLetterAccounts: 'Accounts'
        };
    }

    static readonly classSelectors = Object.freeze({
        userName: 'fr-hd-label jq-profile-name',
        userProfile: 'jq-profile-dropdown',
        overlay: 'jq-lhs-over-lay'
    });

    static get userProfileOptions() {
        return {
            administration: 'Administration',
            accountSettings: 'Account Settings',
            updateRoleAndChannels: 'Update Role & Channels',
            emailSettings: 'Email Settings',
            logOut: 'Log Out',
        };
    }

    static get administrationPage() {
        return {
            header: 'Administration',
            findNameField: 'Find name field',
            searchButton: 'Search button',
            userListResult: 'User list result',
            manageInApp: 'Manage in app',
            endManageUser: 'End manage user',
            manageEmailSettings: 'Manage email settings',
            emailSettingHeader: 'Email setting header',
            emailSaveButton: 'Email save button',
            emailCancelButton: 'Email cancel button',
            emailWhoToCall: 'Who to call',
            summary: 'Summary',
            account: 'ACCOUNT',
            accounts: 'Accounts',
            referenceDetailedView: 'Reference Detailed View',
        };
    }

    static get administrationTestData() {
        return {
            searchName: 'krbartle@us.ibm.com',
            saveMessage: 'Your email settings have been saved.',
            morning: 'In the mornings',
            afternoon: 'In the afternoon',
            evening: 'In the evenings'
        };
    }
}
