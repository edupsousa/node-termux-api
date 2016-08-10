import { BaseCommandBuilder } from './BaseCommandBuilder';

export class ToastBuilder extends BaseCommandBuilder {
    constructor() {
        super('Toast');
    }
    setText(text: string): ToastBuilder {
        this.instance.setStdinInput(text);
        return this;
    }
    shortDuration(): ToastBuilder {
        this.instance.setEZParam('short', true);
        return this;
    }
}
