
import { BaseCommandBuilder } from './BaseCommandBuilder';

export class ClipboardSetBuilder extends BaseCommandBuilder {
    constructor() {
        super('Clipboard');
        this.instance.setEParam('api_version', '2');
        this.instance.setEZParam('set', true);
    }
    setContents(text: string): ClipboardSetBuilder {
        this.instance.setStdinInput(text);
        return this;
    }
}
