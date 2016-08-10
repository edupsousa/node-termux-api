import { BaseCommandBuilder } from './BaseCommandBuilder';

export class DialogBuilder extends BaseCommandBuilder {
    constructor() {
        super('Dialog');
    }
    public setTypePassword(): DialogBuilder {
        this.instance.setESParam('input_type', 'password');
        return this;
    }
    public setTitle(title: string): DialogBuilder {
        this.instance.setESParam('input_title', title);
        return this;
    }
    public setHint(title: string): DialogBuilder {
        this.instance.setESParam('input_hint', title);
        return this;
    }
    public setMultiline(): DialogBuilder {
        this.instance.setEZParam('multiple_lines', true);
        return this;
    }
}
