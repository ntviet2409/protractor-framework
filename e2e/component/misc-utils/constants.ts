export class Constants {
    static readonly MAX_RETRY_ATTEMPTS = 3;
    /**
     * Timeout collection to meet various needs
     * @type {{xxs: number; xs: number; s: number; m: number; l: number; xl: number; xxl: number; xxxl: number}}
     */
    static timeout = {
        xxxs: 500,
        xxs: 1000,
        xs: 2000,
        s: 5000,
        m: 10000,
        l: 25000,
        xl: 50000,
        xxl: 75000,
    };

    /* tslint:disable:no-large-timeout*/
    static DEFAULT_TIMEOUT = Constants.timeout.l;

    static get symbols() {
        return {
            comma: ',',
            dot: '.'
        };
    }

    static get keys() {
        return {
            escape: 'protractor.Key.ESCAPE'
        };
    }

    static get number() {
        return {
            zero: 0,
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            ten: 10,
            eleven: 11,
            twelve: 12,
            thirteen: 13,
            fourteen: 14,
            fifteen: 15,
            twentyOne: 21,
            twentyEight: 28,
            fifty: 50,
            oneHundred: 100,
            twoHundred: 200,
            fourHundred: 400,
            eightHundred: 800,
            minorOneHundred: -100,
            minorTwoHundred: -200
        };
    }
}
