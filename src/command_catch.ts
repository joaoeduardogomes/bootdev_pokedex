import type { State } from "./state.js";
import type { Pokemon } from "./pokeapi.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    const pokemonName = args[0];
    if (!pokemonName)
        throw new Error("you must inform a pokemon name");

    const pokemonData = await state.pokeAPI.fetchPokemonData(pokemonName);

    console.log(`Throwing a Pokeball at ${pokemonName}...`);

    const wasCaught = checkCaught(pokemonData.base_experience);
    if (!wasCaught) {
        console.log(`${pokemonName} escaped!`);
        return
    }
    console.log(`${pokemonName} was caught!`);
    state.pokedex[pokemonName] = pokemonData;

    console.log();
}

function rollDice(maxValue: number) {
    // it goes from 0 to maxValue - 1
  return Math.floor(Math.random() * maxValue);
}

function checkCaught(baseExperience: number): boolean {
    const d20 = rollDice(21);

    console.log(baseExperience);
    console.log(d20);

    if (baseExperience < 100)
        return d20 >= 4;
    if (baseExperience > 100 && baseExperience < 200)
        return d20 >= 8;
    if (baseExperience > 200 && baseExperience < 300)
        return d20 >= 12;
    // > 300:
    return d20 >= 16;
}