import fs = require('fs');
import childProcess = require('child_process');

import { ApiResult } from './ApiResult';
import { ApiModuleConfig } from './ApiModuleConfig';
import { ApiCommandFactory } from './ApiCommandFactory';

const DEFAULT_API_PATH = '/data/data/com.termux/files/usr/libexec/termux-api';

export class TermuxApi {
    protected commandFactory: ApiCommandFactory = new ApiCommandFactory();

    constructor(public apiPath: string = DEFAULT_API_PATH) {

    }
    public async apiExists(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            fs.access(this.apiPath, fs.X_OK, err => {
                if (err)
                    resolve(false);
                resolve(true);
            });
        });
    }
    public runApi(moduleConfig: ApiModuleConfig): ApiResult {
        let args = [moduleConfig.moduleName].concat(moduleConfig.getArgs());
        let api = childProcess.spawn(this.apiPath, args);
        let childInput = moduleConfig.getInput();
        if (childInput !== null) {
            api.stdin.end(childInput);
        }
        return new ApiResult(api);
    }
    public createCommand(): ApiCommandFactory {
        return this.commandFactory;
    }
}
