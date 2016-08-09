
export class ApiModuleConfig {
    private esParams: Map<string, string> = new Map();
    constructor(public moduleName: string) {
        
    }
    public addES(key: string, param: string): void {
        this.esParams.set(key, param);
    }
    public getArgs(): Array<string> {
        let args: Array<string> = [];
        for (let [key, value] of this.esParams.entries()) {
            args.push('--es');
            args.push(key);
            args.push(value);
        }
        return args;
    }
}