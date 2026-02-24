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