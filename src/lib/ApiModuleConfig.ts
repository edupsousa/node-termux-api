
export class ApiModuleConfig {
    private eParams: Map<string, string> = new Map();
    private esParams: Map<string, string> = new Map();
    private ezParams: Map<string, boolean> = new Map();
    private eiParams: Map<string, number> = new Map();
    private efParams: Map<string, number> = new Map();
    private esaParams: Map<string, string> = new Map();
    private lastArg: string = null;
    private input: string = null;
    constructor(public moduleName: string) {
        
    }
    public addE(key: string, param: string): void {
        this.eParams.set(key, param);
    }
    public addES(key: string, param: string): void {
        this.esParams.set(key, param);
    }
    public addEZ(key: string, param: boolean): void {
        this.ezParams.set(key, param);
    }
    public addEI(key: string, param: number): void {
        this.eiParams.set(key, param);
    }
    public addEF(key: string, param: number): void {
        this.efParams.set(key, param);
    }
    public addESA(key: string, param: Array<string>): void {
        let strParam:string = param.join(','); 
        this.esaParams.set(key, strParam);
    }
    public setLastArg(arg: string): void {
        this.lastArg = arg;
    }
    public addInput(input: string): void {
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
        for (let [key, value] of this.eParams.entries()) {
            args.push('--e');
            args.push(key);
            args.push(value);
        }
        for (let [key, value] of this.esParams.entries()) {
            args.push('--es');
            args.push(key);
            args.push(value);
        }
        for (let [key, value] of this.ezParams.entries()) {
            args.push('--ez');
            args.push(key);
            args.push(value ? 'true' : 'false');
        }
        for (let [key, value] of this.eiParams.entries()) {
            args.push('--ei');
            args.push(key);
            args.push(value.toString());
        }
        for (let [key, value] of this.efParams.entries()) {
            args.push('--ef');
            args.push(key);
            args.push(value.toString());
        }
        for (let [key, value] of this.esaParams.entries()) {
            args.push('--esa');
            args.push(key);
            args.push(value.toString());
        }
        if (this.lastArg !== null) {
            args.push(this.lastArg);
        }
        return args;
    }
}