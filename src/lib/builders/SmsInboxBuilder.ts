import { BaseCommandBuilder } from './BaseCommandBuilder';

export class SmsInboxBuilder extends BaseCommandBuilder {
    constructor() {
        super('SmsInbox');
    }
    public showPhoneNumbers(): SmsInboxBuilder {
        this.instance.setEZParam('show-phone-numbers', true);
        return this;
    }
    public showDates(): SmsInboxBuilder {
        this.instance.setEZParam('show-dates', true);
        return this;
    }
    public offset(offset: number): SmsInboxBuilder {
        this.instance.setEIParam('offset', offset);
        return this;
    }
    public limit(limit: number): SmsInboxBuilder {
        this.instance.setEIParam('limit', limit);
        return this;
    }
}