import { ApiCommand } from './ApiCommand';
import { ApiResult } from './ApiResult';
import { spawn } from 'child_process';

export class ApiRunner {
    constructor(public apiPath: string) {
        
    }
    public runCommand(command: ApiCommand): ApiResult {
        let args = [command.commandName].concat(command.getArgs());
        let api = spawn(this.apiPath, args);
        let childInput = command.getInput();
        if (childInput !== null) {
            api.stdin.end(childInput);
        }
        return new ApiResult(api);
    }
}