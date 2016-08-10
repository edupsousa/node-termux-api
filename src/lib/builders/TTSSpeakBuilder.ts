import { BaseCommandBuilder } from './BaseCommandBuilder';

export class TTSSpeakBuilder extends BaseCommandBuilder {
    constructor() {
        super('TextToSpeech');
        this.command.setESParam('engine', 'LIST_AVAILABLE');
    }
    setEngine(engine: string): TTSSpeakBuilder {
        this.command.setESParam('engine', engine);
        return this;
    }
    setLanguage(language: string): TTSSpeakBuilder {
        this.command.setESParam('language', language);
        return this;
    }
    setPitch(pitch: number): TTSSpeakBuilder {
        this.command.setEFParam('pitch', pitch);
        return this;
    }
    setRate(rate: number): TTSSpeakBuilder {
        this.command.setEFParam('rate', rate);
        return this;
    }
    setTextToSpeak(textToSpeak: string): TTSSpeakBuilder {
        this.command.setStdinInput(textToSpeak);
        return this;
    }
    streamAsAlarm(): TTSSpeakBuilder {
        this.command.setESParam('stream', 'ALARM');
        return this;
    }
    streamAsMusic(): TTSSpeakBuilder {
        this.command.setESParam('stream', 'MUSIC');
        return this;
    }
    streamAsNotification(): TTSSpeakBuilder {
        this.command.setESParam('stream', 'NOTIFICATION');
        return this;
    }
    streamAsRing(): TTSSpeakBuilder {
        this.command.setESParam('stream', 'RING');
        return this;
    }
    streamAsSystem(): TTSSpeakBuilder {
        this.command.setESParam('stream', 'SYSTEM');
        return this;
    }
    streamAsVoiceCall(): TTSSpeakBuilder {
        this.command.setESParam('stream', 'VOICE_CALL');
        return this;
    }
}
