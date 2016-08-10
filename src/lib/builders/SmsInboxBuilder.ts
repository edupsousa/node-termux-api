import { BaseCommandBuilder } from './BaseCommandBuilder';

export class SmsInboxBuilder extends BaseCommandBuilder {
    constructor() {
        super('SmsInbox');
    }
    public showPhoneNumbers(): SmsInboxBuilder {
        this.command.setEZParam('show-phone-numbers', true);
        return this;
    }
    public showDates(): SmsInboxBuilder {
        this.command.setEZParam('show-dates', true);
        return this;
    }
    public offset(offset: number): SmsInboxBuilder {
        this.command.setEIParam('offset', offset);
        return this;
    }
    public limit(limit: number): SmsInboxBuilder {
        this.command.setEIParam('limit', limit);
        return this;
    }
}