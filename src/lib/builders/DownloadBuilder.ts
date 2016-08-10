import { BaseCommandBuilder } from './BaseCommandBuilder';

export class DownloadBuilder extends BaseCommandBuilder {
    constructor() {
        super('Download');
    }
    public setUrl(url: string): DownloadBuilder {
        this.instance.setLastArg(url);
        return this;
    }
    public setDescription(description: string): DownloadBuilder {
        this.instance.addES('description', description);
        return this;
    }
    public setTitle(title: string): DownloadBuilder {
        this.instance.addES('title', title);
        return this;
    }
}
