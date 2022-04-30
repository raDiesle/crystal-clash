export function assert(value: unknown): asserts value {
    if(typeof value === "undefined"){
        throw value;
    }
}