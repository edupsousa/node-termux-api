import { BaseCommandBuilder } from './BaseCommandBuilder';

export class SmsInboxBuilder extends BaseCommandBuilder {
    constructor() {
        super('SmsInbox');
    }
    public showPhoneNumbers(): SmsInboxBuilder {
        this.instance.addEZ('show-phone-numbers', true);
        return this;
    }
    public showDates(): SmsInboxBuilder {
        this.instance.addEZ('show-dates', true);
        return this;
    }
    public offset(offset: number): SmsInboxBuilder {
        this.instance.addEI('offset', offset);
        return this;
    }
    public limit(limit: number): SmsInboxBuilder {
        this.instance.addEI('limit', limit);
        return this;
    }
}