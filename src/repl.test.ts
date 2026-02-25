import { Cache } from "./pokecache.js";
import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "PIKACHU squirtle EeVeE",
        expected: ["pikachu", "squirtle", "eevee"]
    }
])("cleanInput($input)", ({ input, expected }) => {

    test("should normalize input correctly", () => {
        expect(cleanInput(input)).toEqual(expected);
    });
    
});

test.each([
    {
        key: "https://pokeapi.co/api/v2/location-area",
        val: "testlocations",
        interval: 1000,
    },
    {
        key: "https://pokeapi.co/api/v2/location-area/eterna-city-area",
        val: "testlocation",
        interval: 1000,
    },
])("Test Caching $interval ms", async({key, val, interval}) => {
    const cache = new Cache(interval);

    cache.add(key, val);
    const cached = cache.get(key);
    expect(cached).toBe(val);

    await new Promise((resolve) => setTimeout(resolve, interval * 2))
    const reaped = cache.get(key);
    expect(reaped).toBe(undefined);

    cache.stopReapLoop();
});