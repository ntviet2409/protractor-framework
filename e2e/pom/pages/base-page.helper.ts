import {PageContract} from '../contracts/page.contract';

export abstract class BasePageHelper implements PageContract {

    abstract url(): string;
}
