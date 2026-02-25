import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    const areaName = args[0];
    if (!areaName)
        throw new Error("you must inform an area name");

    const area = await state.pokeAPI.fetchLocation(areaName);

    console.log(`Exploring ${areaName}...`);
    console.log("Found Pokemon:")
    for (const encounter of area.pokemon_encounters) {
        console.log(encounter.pokemon.name)
    }
    console.log();
}