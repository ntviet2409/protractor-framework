export class AddEditChannelPageConstants {

    public static readonly on = ' on';

    static get buttonLabel() {
        return {
            addToList: 'Add to list',
            updateChannel: 'Update Channel',
            createChannel: 'Create Channel',
            copy: 'Copy',
            continue: 'Continue',
            addChannel: 'Add Channel',
            addToNewChannel: 'Add to new Channel',
            addToExistingChannel: 'Add to existing Channel',
            add: 'Add',
            relatedCompaniesAndTopics: 'Related companies and topics',
            cancel: 'Cancel',
            noThanks: 'No Thanks',
            cancelUpdate: 'cancelupdate',
            bulkRemove: 'Bulk Remove',
            ok: 'Ok',
        };
    }

    static get messages() {
        return {
            copySuccessMessage: 'copied sucessfully',
            channelUpdateSuccessMsg: 'Your channel settings have been saved.',
            entityAddedSuccessMsg: 'added to the list',
            searchSavedSuccessMsg: 'Your search has been added to',
            quickViewRenameSuccessMsg: 'Your QuickView has been updated.',
            quickViewSavedSuccessMsg: 'Your QuickView has been saved.',
            blankChannelNameErrorMessage: 'Please provide a Channel Name',
            addInterestErrorMessage: 'Please add an Interest',
            addProductLinesErrorMessage: 'Please select a product line to proceed.',
        };
    }

    static get setUpChannelHeader() {
        return {
            verticals: 'Set Up Your Verticals Channel',
            territories: 'Set Up Your Territories Channel',
            productLines: 'Set Up Your Product Lines Channel',
            singleAccount: 'Set Up Your Single Account Focus',
            companies: 'Set Up Your Companies Channel',
            competitors: 'Set Up Your Competitors Channel',
            custom: 'Set Up Your Custom Channel',
            accounts: 'Set Up Your Accounts Channel',
            setupUpPage: 'Set Up Your'
        };
    }

    static get channelSetupSelectors() {
        return {
            accountName: 'acname',
            autoCompleteList: 'jq-auto-complete-list',
            companyName: 'jq-comp-name',
            addMultipleCompanies: 'addmultiplecompanies',
            competitorSection: 'jq-competitor-sec',
            createCustomButton: 'create-custom-button',
            searchLabel: 'jq-srch-label',
            plusIcon: 'fr-icon-accordion fr-cur-p',
            advanceFilter: 'jq-adv-filter',
            buttonActionTiny: 'button action tiny',
            customChannelListing: 'fr-role-check pick-table-item',
            searchPlusIcon: 'search-plus',
            inlineAddcompany: 'inline-addcompany',
            pencilEdit: 'fa-pencil jq-edit-comp',
            customSetup: 'custom-setup',
            suggestedEntities: 'suggested jq-comp-sett selected',
            fileUpload: 'fileupload',
            childCheckbox: 'tree-child',
            noneId: 'jq-ua-n',
            selectAllId: 'jq-ua-sa',
            bulkRemoveClass: 'jq-remove-comp-all',
            bulkRemoveCancelId: 'jq-br-can',
            bulkRemoveRemoveId: 'jq-br-rem',
            aToZClass: 'jq-ua-s-items',
            aToZArrowClass: 'jq-ua-s-items-arr',
            cancelOkId: 'jq-ur-p-ok',
            companyNameChannel: 'jq-srch-label',
        };
    }

    static get addCompanyInputBoxPlaceholder() {
        return {
            singleAccount: 'Type Company name',
            companiesToWatch: 'Enter company name or stock symbol...',
            companiesOrThemes: 'Companies or themes',
        };
    }
}
