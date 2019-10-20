export class DateHelper {

    static getCurrentYear() {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    static getCurrentMonth() {
        const currentDate = new Date();
        return currentDate.getMonth();
    }

    static parseDate(dateString: string) {
        const p = dateString.split('-');
        const month = DateHelper.getMonthNumberForString(p[1].toLowerCase());
        return new Date(+p[2], month , +p[0]);
    }

    static getMonthNumberForString(month: string) {
        switch (month) {
            case 'jan': return 0;
            case 'feb': return 1;
            case 'mar': return 2;
            case 'apr': return 3;
            case 'may': return 4;
            case 'jun': return 5;
            case 'jul': return 6;
            case 'aug': return 7;
            case 'sep': return 8;
            case 'oct': return 9;
            case 'nov': return 10;
            case 'dec': return 11;
        }
    }
}
