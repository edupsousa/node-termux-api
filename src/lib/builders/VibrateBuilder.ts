import { BaseCommandBuilder } from './BaseCommandBuilder';

export class VibrateBuilder extends BaseCommandBuilder {
    constructor() {
        super('Vibrate');
    }
    setDuration(duration: number): VibrateBuilder {
        this.instance.addEI('duration_ms', duration);
        return this;
    }
    force(): VibrateBuilder {
        this.instance.addEZ('force', true);
        return this;
    }
}
