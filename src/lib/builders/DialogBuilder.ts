import { BaseCommandBuilder } from './BaseCommandBuilder';

export class DialogBuilder extends BaseCommandBuilder {
    constructor() {
        super('Dialog');
    }
    public setTypePassword(): DialogBuilder {
        this.instance.addES('input_type', 'password');
        return this;
    }
    public setTitle(title: string): DialogBuilder {
        this.instance.addES('input_title', title);
        return this;
    }
    public setHint(title: string): DialogBuilder {
        this.instance.addES('input_hint', title);
        return this;
    }
    public setMultiline(): DialogBuilder {
        this.instance.addEZ('multiple_lines', true);
        return this;
    }
}
