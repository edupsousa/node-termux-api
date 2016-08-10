import { BaseCommandBuilder } from './BaseCommandBuilder';

export class LocationBuilder extends BaseCommandBuilder {
    constructor() {
        super('Location');
    }
    public fromGPSProvider(): LocationBuilder {
        this.instance.addES('provider', 'gps');
        return this;
    }
    public fromNetworkProvider(): LocationBuilder {
        this.instance.addES('provider', 'network');
        return this;
    }
    public fromPassiveProvider(): LocationBuilder {
        this.instance.addES('provider', 'passive');
        return this;
    }
    public requestLast(): LocationBuilder {
        this.instance.addES('request', 'last');
        return this;
    }
    public requestOnce(): LocationBuilder {
        this.instance.addES('request', 'once');
        return this;
    }
    public requestUpdates(): LocationBuilder {
        this.instance.addES('request', 'updates');
        return this;
    }
}
