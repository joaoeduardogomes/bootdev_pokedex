import { State } from "./state.js";

export function commandHelp(state: State) {
    console.log(`
    Welcome to the Pokedex!
    Usage:
    
    help: Displays a help message
    exit: Exit the Pokedex
    `);

    for (const cmd of Object.values(state.commands)) {
        console.log(`${cmd.name}: ${cmd.description}`)
    }
    console.log();
}