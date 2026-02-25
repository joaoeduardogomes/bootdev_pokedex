import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { commandExplore } from "./comand_explore.js";
import { commandCatch } from "./command_catch.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Display the next page of locations",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Display the previous page of locations",
            callback: commandMapBack,
        },
        explore: {
            name: "explore <location_name>",
            description: "Display the pokemon found in the informed area",
            callback: commandExplore,
        },
        catch: {
            name: "catch <pokemon_name>",
            description: "Try to catch a pokemon",
            callback: commandCatch,
        }
    };
}
