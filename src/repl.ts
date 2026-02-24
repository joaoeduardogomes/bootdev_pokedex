import { State } from "./state";

export function cleanInput(text: string): string[] {
    const clearText = text.trim();
    const lowerText = clearText.toLowerCase();
    const splittedText = lowerText.split(" ");

    return splittedText.filter(text => text.length > 0);
}

export function startREPL(state: State) {
    state.readline.prompt()

    state.readline.on("line", async (input) => {
        const arrWords = cleanInput(input);

        if (arrWords.length === 0) {
            state.readline.prompt();
            return;
        }

        const commandName = arrWords[0];
        const cmd = state.commands[commandName];

        if (!cmd) {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands. \n`);
            state.readline.prompt();
            return;
        }

        try {
            cmd.callback(state);
        }
        catch (err) {
            console.log(err);
        }
        

        state.readline.prompt();
    })
}