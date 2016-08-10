import { TermuxApi } from '../lib/TermuxApi';

async function main() {
    let api = new TermuxApi();
    let exists = await api.apiExists();

    if (exists) {
        let command = api.createCommand()
            .notification()
            .setId("sample")
            .setTitle("Sample")
            .setContent("This is a sample notification from node-termux-api.")
            .setUrl("https://github.com/edupsousa/node-termux-api")
            .build();
        let result = api.runApi(command);
        let code = await result.getStatusCode();
        if (code !== 0) {
            console.log('Error executing API');
        } else {
            console.log('API successfully executed.');
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