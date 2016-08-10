import { TermuxApi } from './TermuxApi';
import { ApiResult } from './ApiResult';

export class ApiCommand {
    private eParams: Map<string, string> = new Map();
    private esParams: Map<string, string> = new Map();
    private ezParams: Map<string, string> = new Map();
    private eiParams: Map<string, string> = new Map();
    private efParams: Map<string, string> = new Map();
    private esaParams: Map<string, string> = new Map();
    private lastArg: string = null;
    private input: string = null;
    constructor(public commandName: string) {

    }
    public run(): ApiResult {
        return TermuxApi.getInstance().runApi(this);
    }
    public setEParam(key: string, param: string): void {
        this.eParams.set(key, param);
    }
    public setESParam(key: string, param: string): void {
        this.esParams.set(key, param);
    }
    public setEZParam(key: string, param: boolean): void {
        let strParam: string = (param ? 'true' : 'false');
        this.ezParams.set(key, strParam);
    }
    public setEIParam(key: string, param: number): void {
        let strParam: string = param.toString();
        this.eiParams.set(key, strParam);
    }
    public setEFParam(key: string, param: number): void {
        let strParam: string = param.toString();
        this.efParams.set(key, strParam);
    }
    public addESA(key: string, param: Array<string>): void {
        let strParam: string = param.join(',');
        this.esaParams.set(key, strParam);
    }
    public setLastArg(arg: string): void {
        this.lastArg = arg;
    }
    public setStdinInput(input: string): void {
        if (input.substr(-1) !== '\n') {
            input += '\n';
        }
        this.input = input;
    }
    public getInput(): string {
        return this.input;
    }
    public getArgs(): Array<string> {
        let args: Array<string> = [];

        args.concat(this.getArgsForParamType('e', this.eParams));
        args.concat(this.getArgsForParamType('es', this.esParams));
        args.concat(this.getArgsForParamType('ez', this.ezParams));
        args.concat(this.getArgsForParamType('ei', this.eiParams));
        args.concat(this.getArgsForParamType('ef', this.efParams));
        args.concat(this.getArgsForParamType('esa', this.esaParams));

        if (this.lastArg !== null) {
            args.push(this.lastArg);
        }
        return args;
    }
    private getArgsForParamType(paramType: string, parameters: Map<string, string>): Array<string> {
        let args = new Array<string>();
        for (let [key, value] of parameters.entries()) {
            args.push(`--${paramType}`);
            args.push(key);
            args.push(value);
        }
        return args;
    }
}