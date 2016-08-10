import { ChildProcess } from 'child_process';
import { Readable } from 'stream';

export class ApiResult {
    private apiProcess: ChildProcess;
    private output: Promise<string>;
    private statusCode: Promise<number>;
    private apiRunning: boolean;
    constructor(apiProcess: ChildProcess) {
        this.apiRunning = true;
        this.apiProcess = apiProcess;
        this.output = this.readStream(this.apiProcess.stdout);
        this.statusCode = this.readStatusCode();
    }
    public async getStatusCode(): Promise<number> {
        return await this.statusCode;
    }
    public isRunning(): boolean {
        return this.apiRunning;
    }
    public async getOutputObject(): Promise<Object> {
        let output = await this.output;
        try {
            return JSON.parse(output);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
    public async getOutputString(): Promise<string> {
        return await this.output;
    }
    public killApi(): void {
        this.apiProcess.kill('SIGHUP');
    }
    private async readStatusCode(): Promise<number> {
        return new Promise<number>(resolve => {
            this.apiProcess.on('close', code => {
                this.apiRunning = false; 
                resolve(code); 
            });
        });
    }
    private async readStream(stream: Readable): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let data = [];
            stream.on('data', (chunk) => { 
                data.push(chunk); 
            });
            stream.on('end', () => {
                resolve(Buffer.concat(data).toString());
            });
            stream.on('error', (error) => {
                reject(error);
            });
        });
    }
}
