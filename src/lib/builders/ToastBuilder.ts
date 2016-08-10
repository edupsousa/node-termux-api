import { BaseCommandBuilder } from './BaseCommandBuilder';

export class ToastBuilder extends BaseCommandBuilder {
    constructor() {
        super('Toast');
    }
    setText(text: string): ToastBuilder {
        this.instance.addInput(text);
        return this;
    }
    shortDuration(): ToastBuilder {
        this.instance.addEZ('short', true);
        return this;
    }
}
