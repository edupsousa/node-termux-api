import { ApiModuleConfig } from './ApiModuleConfig';
import { ApiResult } from './ApiResult';
import { spawn } from 'child_process';

export class ApiRunner {
    constructor(public apiPath: string) {
        
    }
    public runCommand(commandConfig: ApiModuleConfig): ApiResult {
        let args = [commandConfig.moduleName].concat(commandConfig.getArgs());
        let api = spawn(this.apiPath, args);
        let childInput = commandConfig.getInput();
        if (childInput !== null) {
            api.stdin.end(childInput);
        }
        return new ApiResult(api);
    }
}