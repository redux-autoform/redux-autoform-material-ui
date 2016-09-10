class Arrays {
    static mergeJson(array) {
        return array.reduce((prev, actual) => ({...prev, ...actual}));
    }

    static intersect(a, b) {
        let setA = new Set(a);
        let setB = new Set(b);

        return new Set([...setA].filter(x => setB.has(x)));
    }
}

export default Arrays;