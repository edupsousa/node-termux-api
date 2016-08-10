import { BaseCommandBuilder } from './BaseCommandBuilder';

export class VibrateBuilder extends BaseCommandBuilder {
    constructor() {
        super('Vibrate');
    }
    setDuration(duration: number): VibrateBuilder {
        this.command.setEIParam('duration_ms', duration);
        return this;
    }
    force(): VibrateBuilder {
        this.command.setEZParam('force', true);
        return this;
    }
}
