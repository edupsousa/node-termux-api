
import { BaseCommandBuilder } from './BaseCommandBuilder';

export class ClipboardSetBuilder extends BaseCommandBuilder {
    constructor() {
        super('Clipboard');
        this.instance.addE('api_version', '2');
        this.instance.addEZ('set', true);
    }
    setContents(text: string): ClipboardSetBuilder {
        this.instance.addInput(text);
        return this;
    }
}
