import type { State } from "./state";

export async function commandPokedex(state: State): Promise<void> {
    const caught = Object.keys(state.pokedex);

    if (!caught.length) {
        console.log("your Pokédex is empty.\n");
        return;
    }

    console.log("Your Pokedex:")
    caught.forEach(name => console.log(`  - ${name}`));

    console.log();
}