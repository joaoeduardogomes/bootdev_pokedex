import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { commandExit } from "./command_exit.js";
import { CLICommand } from "./command.js";
import { commandHelp } from "./command_help.js";



export function cleanInput(text: string): string[] {
    const clearText = text.trim();
    const lowerText = clearText.toLowerCase();
    const splittedText = lowerText.split(" ");

    return splittedText.filter(text => text.length > 0);
}

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "prints a help message describing how to use the REPL",
            callback: commandHelp,
        },
    };
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

        const commandName = arrWords[0];
        const commands = getCommands();
        const cmd = commands[commandName];

        if (!cmd) {
            console.log("Unknown command");
        }
        else {
            try {
                cmd.callback(commands);
            }
            catch (err) {
                console.log(err);
            }
        }

        rl.prompt();
    })
}