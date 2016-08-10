import { BaseCommandBuilder } from './BaseCommandBuilder';

export class TTSEnginesBuilder extends BaseCommandBuilder {
    constructor() {
        super('TextToSpeech');
        this.instance.addES('engine', 'LIST_AVAILABLE');
    }
}
