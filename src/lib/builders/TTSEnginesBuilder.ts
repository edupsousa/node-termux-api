import { BaseCommandBuilder } from './BaseCommandBuilder';

export class TTSEnginesBuilder extends BaseCommandBuilder {
    constructor() {
        super('TextToSpeech');
        this.instance.setESParam('engine', 'LIST_AVAILABLE');
    }
}
