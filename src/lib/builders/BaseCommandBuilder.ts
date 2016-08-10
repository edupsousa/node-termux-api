import { ApiModuleConfig } from '../ApiModuleConfig';
import { ApiResult } from '../ApiResult';
import { TermuxApi } from '../TermuxApi';

export class BaseCommandBuilder {
    protected instance: ApiModuleConfig;
    constructor(apiCommand: string) {
        this.instance = new ApiModuleConfig(apiCommand);
    }
    public build(): ApiModuleConfig {
        return this.instance;
    }
}