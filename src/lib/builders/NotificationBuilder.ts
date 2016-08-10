import { BaseCommandBuilder } from './BaseCommandBuilder';

export class NotificationBuilder extends BaseCommandBuilder {
    constructor() {
        super('Notification');
    }
    public setContent(content: string): NotificationBuilder {
        this.instance.addES('content', content);
        return this;
    }
    public setId(id: string): NotificationBuilder {
        this.instance.addES('id', id);
        return this;
    }
    public setTitle(title: string): NotificationBuilder {
        this.instance.addES('title', title);
        return this;
    }
    public setUrl(url: string): NotificationBuilder {
        this.instance.addES('url', url);
        return this;
    }
}
