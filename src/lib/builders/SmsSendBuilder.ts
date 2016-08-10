import { BaseCommandBuilder } from './BaseCommandBuilder';

export class SmsSendBuilder extends BaseCommandBuilder {
    constructor() {
        super('SmsSend');
    }
    public setRecipients(recipients: Array<string>): SmsSendBuilder {
        this.instance.addESA('recipients', recipients);
        return this;
    }
    public setRecipient(recipient: string): SmsSendBuilder {
        this.setRecipients([recipient]);
        return this;
    }
    public setMessage(message: string): SmsSendBuilder {
        this.instance.setLastArg(message);
        return this;
    }
}