export function console_log(input: string, color?: string, background?: string): void {
        const fgColor = color || ""
        const bgColor = background || ""
        console.log(`%c${input}`, `color: ${color}; background-color: ${background};`);
}
