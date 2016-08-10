import { TermuxApi } from '../lib/TermuxApi';

async function main() {
    let api = TermuxApi.getInstance();
    let exists = await api.apiExists();

    if (exists) {
        let result = api.createCommand()
            .clipboardGet()
            .build()
            .run();
        
        let code = await result.getStatusCode();
        if (code !== 0) {
            console.log('Error executing API');
        } else {
            console.log('API successfully executed.');
            console.log(await result.getOutputString());
        }
    } else {
        console.log('Error: Termux-API not found. Please install Termux-Api from Google Play.');
    }
}

try {
    main();
} catch (e) {
    console.error(e);
}