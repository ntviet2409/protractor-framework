import { By, element } from 'protractor';
import { CustomersPageConstants } from './customers-page.constants';
import { TextElements } from '../../../../component/html/text-elements';
import {ButtonHelper} from '../../../../component/html/button-helper';

export class CustomerPage {

    static get getFirstCustomer() {
        return {
            impersonateButton: ButtonHelper.getAllButtonByText('Impersonate').first(),
            firstE2eTestCustomer: TextElements.getItemByText(CustomersPageConstants.e2eTestCustomer, true),
            viewButton: ButtonHelper.getAllButtonByText('View').first(),
            delete: ButtonHelper.getButtonByText('Delete'),
            name: element.all(By.css('tbody [data-header="Name"]')).first(),
            yes: element.all(By.css('.modal-footer button')).first(),
            deleteTextBox: element.all(By.css('.form-group input')).first(),
            id: element.all(By.css('tbody [data-header=ID]')).first(),
            impersonateButtons: ButtonHelper.getAllButtonByText('Impersonate'),
        };
    }

    static get getTopMenuOptions() {
        return {
            addNewCustomerButton: element(By.cssContainingText('span', 'Add new customer')),
            downloadButton: element(By.cssContainingText('span', 'Download')),
            searchTextBox: element(By.id('search')),
            searchButton: element(By.className('search-btn')),
            customerList: element(By.cssContainingText('a', CustomersPageConstants.customerList))
        };
    }

    static get allCustomersTable() {
        return {
            customers: element.all(By.css('tbody tr.ng-star-inserted')),
            firstPage: element(By.className('fa-step-backward')),
            previousPage: element(By.className('fa-caret-left')),
            page: element(By.css('input.df-table-paginator__options__pages__input')),
            of: element(By.xpath('//div[contains(@class,"df-table-paginator__options__pages")]//span[contains(text(),"of")]')),
            nextPage: element(By.className('fa-caret-right')),
            lastPage: element(By.className('fa-step-forward')),
            refresh: element(By.className('fa-refresh')),
            total: element(By.xpath('//div[contains(@class,"df-table-paginator__options__total")]//span[contains(text(),"Total")]')),
            itemsPerPage: element(By.css('.df-table-paginator__options__per-page df-select')),
            itemsPerPageOptions: element.all(By.css('.df-option div')),
            selectedOption: element(By.css('.df-select__options-list .ng-star-inserted.df-option.df-option--selected')),
            impersonating: TextElements.getSpanByText(CustomersPageConstants.impersonating, true),
            byteStacker: TextElements.getSpanByText(CustomersPageConstants.byteStacker, true),
        };
    }

    static get customerDetail() {
        return element.all(By.css('.action-bar')).first();
    }

    static get dropDownHelpMenu() {
        return element(By.css('.topbar__right__item--help-link'));
    }

    static get dropDownItems() {
        return element.all(By.css('.topbar__right__item--help-link .dropdown-item'));
    }

    static get popupLogo() {
        return element(By.css('.modal-content .df-topbar-logo__name'));
    }

    static get composeNotificationBreadcrumb() {
        return element(By.cssContainingText('a.df-breadcrumbs__link', 'Compose Notification'));
    }

    static get myAccountHeader() {
        return element(By.cssContainingText('h1', CustomersPageConstants.myAccount));
    }
}
