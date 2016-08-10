import { BaseCommandBuilder } from './BaseCommandBuilder';

export class TTSSpeakBuilder extends BaseCommandBuilder {
    constructor() {
        super('TextToSpeech');
        this.instance.setESParam('engine', 'LIST_AVAILABLE');
    }
    setEngine(engine: string): TTSSpeakBuilder {
        this.instance.setESParam('engine', engine);
        return this;
    }
    setLanguage(language: string): TTSSpeakBuilder {
        this.instance.setESParam('language', language);
        return this;
    }
    setPitch(pitch: number): TTSSpeakBuilder {
        this.instance.setEFParam('pitch', pitch);
        return this;
    }
    setRate(rate: number): TTSSpeakBuilder {
        this.instance.setEFParam('rate', rate);
        return this;
    }
    setTextToSpeak(textToSpeak: string): TTSSpeakBuilder {
        this.instance.setStdinInput(textToSpeak);
        return this;
    }
    streamAsAlarm(): TTSSpeakBuilder {
        this.instance.setESParam('stream', 'ALARM');
        return this;
    }
    streamAsMusic(): TTSSpeakBuilder {
        this.instance.setESParam('stream', 'MUSIC');
        return this;
    }
    streamAsNotification(): TTSSpeakBuilder {
        this.instance.setESParam('stream', 'NOTIFICATION');
        return this;
    }
    streamAsRing(): TTSSpeakBuilder {
        this.instance.setESParam('stream', 'RING');
        return this;
    }
    streamAsSystem(): TTSSpeakBuilder {
        this.instance.setESParam('stream', 'SYSTEM');
        return this;
    }
    streamAsVoiceCall(): TTSSpeakBuilder {
        this.instance.setESParam('stream', 'VOICE_CALL');
        return this;
    }
}
