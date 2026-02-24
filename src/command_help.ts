import { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log(`
    Welcome to the Pokedex!
    Usage:
    
    help: Displays a help message
    exit: Exit the Pokedex
    `)
}