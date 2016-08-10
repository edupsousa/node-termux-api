import { BaseCommandBuilder } from './BaseCommandBuilder';

export class NotificationBuilder extends BaseCommandBuilder {
    constructor() {
        super('Notification');
    }
    public setContent(content: string): NotificationBuilder {
        this.command.setESParam('content', content);
        return this;
    }
    public setId(id: string): NotificationBuilder {
        this.command.setESParam('id', id);
        return this;
    }
    public setTitle(title: string): NotificationBuilder {
        this.command.setESParam('title', title);
        return this;
    }
    public setUrl(url: string): NotificationBuilder {
        this.command.setESParam('url', url);
        return this;
    }
}
