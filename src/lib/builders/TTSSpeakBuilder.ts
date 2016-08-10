import { BaseCommandBuilder } from './BaseCommandBuilder';

export class TTSSpeakBuilder extends BaseCommandBuilder {
    constructor() {
        super('TextToSpeech');
        this.instance.addES('engine', 'LIST_AVAILABLE');
    }
    setEngine(engine: string): TTSSpeakBuilder {
        this.instance.addES('engine', engine);
        return this;
    }
    setLanguage(language: string): TTSSpeakBuilder {
        this.instance.addES('language', language);
        return this;
    }
    setPitch(pitch: number): TTSSpeakBuilder {
        this.instance.addEF('pitch', pitch);
        return this;
    }
    setRate(rate: number): TTSSpeakBuilder {
        this.instance.addEF('rate', rate);
        return this;
    }
    setTextToSpeak(textToSpeak: string): TTSSpeakBuilder {
        this.instance.addInput(textToSpeak);
        return this;
    }
    streamAsAlarm(): TTSSpeakBuilder {
        this.instance.addES('stream', 'ALARM');
        return this;
    }
    streamAsMusic(): TTSSpeakBuilder {
        this.instance.addES('stream', 'MUSIC');
        return this;
    }
    streamAsNotification(): TTSSpeakBuilder {
        this.instance.addES('stream', 'NOTIFICATION');
        return this;
    }
    streamAsRing(): TTSSpeakBuilder {
        this.instance.addES('stream', 'RING');
        return this;
    }
    streamAsSystem(): TTSSpeakBuilder {
        this.instance.addES('stream', 'SYSTEM');
        return this;
    }
    streamAsVoiceCall(): TTSSpeakBuilder {
        this.instance.addES('stream', 'VOICE_CALL');
        return this;
    }
}
