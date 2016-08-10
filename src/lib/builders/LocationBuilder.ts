import { BaseCommandBuilder } from './BaseCommandBuilder';

export class LocationBuilder extends BaseCommandBuilder {
    constructor() {
        super('Location');
    }
    public fromGPSProvider(): LocationBuilder {
        this.instance.setESParam('provider', 'gps');
        return this;
    }
    public fromNetworkProvider(): LocationBuilder {
        this.instance.setESParam('provider', 'network');
        return this;
    }
    public fromPassiveProvider(): LocationBuilder {
        this.instance.setESParam('provider', 'passive');
        return this;
    }
    public requestLast(): LocationBuilder {
        this.instance.setESParam('request', 'last');
        return this;
    }
    public requestOnce(): LocationBuilder {
        this.instance.setESParam('request', 'once');
        return this;
    }
    public requestUpdates(): LocationBuilder {
        this.instance.setESParam('request', 'updates');
        return this;
    }
}
