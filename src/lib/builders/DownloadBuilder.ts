import { BaseCommandBuilder } from './BaseCommandBuilder';

export class DownloadBuilder extends BaseCommandBuilder {
    constructor() {
        super('Download');
    }
    public setUrl(url: string): DownloadBuilder {
        this.command.setLastArg(url);
        return this;
    }
    public setDescription(description: string): DownloadBuilder {
        this.command.setESParam('description', description);
        return this;
    }
    public setTitle(title: string): DownloadBuilder {
        this.command.setESParam('title', title);
        return this;
    }
}
