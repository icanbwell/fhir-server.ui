/**
 * returns whether the parameter is false or a string "false"
 * @param {string | boolean | null} s
 * @returns {boolean}
 */
export function isTrue(s: string | boolean | null | undefined): boolean {
    return String(s).toLowerCase() === 'true' || String(s).toLowerCase() === '1';
}
