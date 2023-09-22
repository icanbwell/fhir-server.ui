/**
 * replaces circular references
 * inspired by: https://bobbyhadz.com/blog/javascript-typeerror-converting-circular-structure-to-json
 * @return {function(string, *): *}
 */
function getCircularReplacer(): (key: string, value: any) => any {
    const seen = new WeakSet();
    return (key: string, value: any): any => {
        if (value instanceof RegExp) {
            value = value.toString();
        }
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
}

export {
    getCircularReplacer
};
