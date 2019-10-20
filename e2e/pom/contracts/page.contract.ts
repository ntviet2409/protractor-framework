/**
 * General contract which has to be implemented by all the page
 * objects to maintain consistency for basic functionality
 */

export interface PageContract {
    /**
     * Url for identification for derived page
     */
    url(): string;
}
