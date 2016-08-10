
import { BaseCommandBuilder } from './BaseCommandBuilder';

export class ClipboardSetBuilder extends BaseCommandBuilder {
    constructor() {
        super('Clipboard');
        this.command.setEParam('api_version', '2');
        this.command.setEZParam('set', true);
    }
    setContents(text: string): ClipboardSetBuilder {
        this.command.setStdinInput(text);
        return this;
    }
}
