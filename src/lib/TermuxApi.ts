import { ApiCommand } from './ApiCommand';
import { ApiCommandFactory } from './ApiCommandFactory';
import { ApiRunner } from './ApiRunner';
import { ApiResult } from './ApiResult';
import { access, constants } from 'fs';

const DEFAULT_API_PATH = '/data/data/com.termux/files/usr/libexec/termux-api';

export class TermuxApi {
    private static _instance: TermuxApi = new TermuxApi();
    protected commandFactory: ApiCommandFactory;
    protected apiRunner: ApiRunner;

    constructor(apiPath: string = DEFAULT_API_PATH) {
        if (TermuxApi._instance) {
            throw new Error('Use TermuxApi.getInstance() instead!');
        }
        TermuxApi._instance = this;
        this.apiRunner = new ApiRunner(apiPath);
        this.commandFactory = new ApiCommandFactory();
    }
    public static getInstance(): TermuxApi {
        return TermuxApi._instance;
    }
    public async apiExists(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            access(this.apiRunner.apiPath, constants.X_OK, err => {
                if (err)
                    resolve(false);
                resolve(true);
            });
        });
    }
    public runApi(moduleConfig: ApiCommand): ApiResult {
        return this.apiRunner.runCommand(moduleConfig);
    }
    public createCommand(): ApiCommandFactory {
        return this.commandFactory;
    }
}
