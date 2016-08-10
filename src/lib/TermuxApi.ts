import { ApiModuleConfig } from './ApiModuleConfig';
import { ApiCommandFactory } from './ApiCommandFactory';
import { ApiRunner } from './ApiRunner';
import { ApiResult } from './ApiResult';
import { access, X_OK } from 'fs';

const DEFAULT_API_PATH = '/data/data/com.termux/files/usr/libexec/termux-api';

export class TermuxApi {
    protected commandFactory: ApiCommandFactory = new ApiCommandFactory();
    protected apiRunner: ApiRunner;

    constructor(apiPath: string = DEFAULT_API_PATH) {
        this.apiRunner = new ApiRunner(apiPath);
    }
    public async apiExists(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            access(this.apiRunner.apiPath, X_OK, err => {
                if (err)
                    resolve(false);
                resolve(true);
            });
        });
    }
    public runApi(moduleConfig: ApiModuleConfig): ApiResult {
        return this.apiRunner.runCommand(moduleConfig);
    }
    public createCommand(): ApiCommandFactory {
        return this.commandFactory;
    }
}
