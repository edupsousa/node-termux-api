import { BaseCommandBuilder } from './BaseCommandBuilder';

export class TTSEnginesBuilder extends BaseCommandBuilder {
    constructor() {
        super('TextToSpeech');
        this.command.setESParam('engine', 'LIST_AVAILABLE');
    }
}
