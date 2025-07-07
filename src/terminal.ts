import { textColors, bgColors, styles } from "./ansiColors";

export function terminal_log(input: string, color?: keyof typeof textColors, background?: keyof typeof bgColors, style?: keyof typeof styles): void {
    const fgColor = color ? textColors[color] : "";
    const bgColor = background ? bgColors[background] : "";
    const _style = style ? styles[style] : "";
    console.log(`${fgColor}${bgColor}${_style}${input}${styles.reset}`);
}