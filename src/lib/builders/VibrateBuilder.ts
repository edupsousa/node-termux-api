import { BaseCommandBuilder } from './BaseCommandBuilder';

export class VibrateBuilder extends BaseCommandBuilder {
    constructor() {
        super('Vibrate');
    }
    setDuration(duration: number): VibrateBuilder {
        this.instance.setEIParam('duration_ms', duration);
        return this;
    }
    force(): VibrateBuilder {
        this.instance.setEZParam('force', true);
        return this;
    }
}
