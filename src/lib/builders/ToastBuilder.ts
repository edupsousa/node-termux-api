import { BaseCommandBuilder } from './BaseCommandBuilder';

export class ToastBuilder extends BaseCommandBuilder {
    constructor() {
        super('Toast');
    }
    setText(text: string): ToastBuilder {
        this.command.setStdinInput(text);
        return this;
    }
    shortDuration(): ToastBuilder {
        this.command.setEZParam('short', true);
        return this;
    }
}
