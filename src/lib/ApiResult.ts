import { ChildProcess } from 'child_process';
import { Readable } from 'stream';

export class ApiResult {
    private apiProcess: ChildProcess;
    private output: Promise<string>;
    constructor(apiProcess: ChildProcess) {
        this.apiProcess = apiProcess;
        this.output = this.readStream(this.apiProcess.stdout);
    }
    public async getStatusCode(): Promise<Number> {
        return new Promise<Number>(resolve => {
            this.apiProcess.on('exit', code => { resolve(code) });
        });
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
