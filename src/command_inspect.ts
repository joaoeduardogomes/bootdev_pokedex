import type { State } from "./state";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    const pokemonName = args[0];
    if (!pokemonName)
        throw new Error("you must inform a pokemon name");

    const pokemonData = state.pokedex?.[pokemonName];

    if (!pokemonData) {
        console.log("you have not caught that pokemon\n");
        return;
    }

    const stats = Object.fromEntries(
        pokemonData.stats.map(s => [s.stat.name, s.base_stat])
    );
    const types = pokemonData.types.map(t => t.type.name);

    console.log(`
    Name: ${pokemonData.name}
    Height: ${pokemonData.height}
    Weight: ${pokemonData.weight}
    Stats:
        -hp: ${stats.hp}
        -attack: ${stats.attack}
        -defense: ${stats.defense}
        -special-attack: ${stats['special-attack']}
        -special-defense: ${stats['special-defense']}
        -speed: ${stats.speed}
    Types:
${types.map(t => `        - ${t}`).join("\n")}
            `)
}