import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

export function cleanInput(text: string): string[] {
    const clearText = text.trim();
    const lowerText = clearText.toLowerCase();
    const splittedText = lowerText.split(" ");

    return splittedText.filter(text => text.length > 0);
}

export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > "
    });

    rl.prompt()

    rl.on("line", (line) => {
        const arrWords = cleanInput(line);

        if (arrWords.length === 0) {
            rl.prompt();
            return;
        }

        console.log(`Your command was: ${arrWords[0]}`);
        rl.prompt();
    })
}