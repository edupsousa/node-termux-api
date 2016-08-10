import { ApiCommand } from '../ApiCommand';
import { ApiResult } from '../ApiResult';
import { TermuxApi } from '../TermuxApi';

export class BaseCommandBuilder {
    protected command: ApiCommand;
    constructor(apiCommand: string) {
        this.command = new ApiCommand(apiCommand);
    }
    public build(): ApiCommand {
        return this.command;
    }
}