export function cleanInput(text: string): string[] {
    const clearText = text.trim();
    const lowerText = clearText.toLowerCase();
    const splittedText = lowerText.split(" ");

    return splittedText.filter(text => text.length > 0);
}