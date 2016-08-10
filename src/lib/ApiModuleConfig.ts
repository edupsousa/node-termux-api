
export class ApiModuleConfig {
    private esParams: Map<string, string> = new Map();
    private ezParams: Map<string, boolean> = new Map();
    private eiParams: Map<string, number> = new Map();
    private esaParams: Map<string, string> = new Map();
    private lastArg: string = null;
    constructor(public moduleName: string) {
        
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
    public addESA(key: string, param: Array<string>) {
        let strParam:string = param.join(','); 
        this.esaParams.set(key, strParam);
    }
    public setLastArg(arg: string) {
        this.lastArg = arg;
    }
    public getArgs(): Array<string> {
        let args: Array<string> = [];
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