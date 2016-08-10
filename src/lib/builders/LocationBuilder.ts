import { BaseCommandBuilder } from './BaseCommandBuilder';

export class LocationBuilder extends BaseCommandBuilder {
    constructor() {
        super('Location');
    }
    public fromGPSProvider(): LocationBuilder {
        this.command.setESParam('provider', 'gps');
        return this;
    }
    public fromNetworkProvider(): LocationBuilder {
        this.command.setESParam('provider', 'network');
        return this;
    }
    public fromPassiveProvider(): LocationBuilder {
        this.command.setESParam('provider', 'passive');
        return this;
    }
    public requestLast(): LocationBuilder {
        this.command.setESParam('request', 'last');
        return this;
    }
    public requestOnce(): LocationBuilder {
        this.command.setESParam('request', 'once');
        return this;
    }
    public requestUpdates(): LocationBuilder {
        this.command.setESParam('request', 'updates');
        return this;
    }
}
