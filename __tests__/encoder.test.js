const { encode } = require("utf8")
const {encode8,encode16, encode32,encode64} = require('../encoder');

describe("encodeBase16()",() => {

    beforeAll(() => {
        console.log("running encodeBase16() suite of tests");
    });

    test("encodeBase16('hello')", () => {
        const exp = "68656C6C6F";
        const actual = encode16("hello");
        expect(actual).toBe(exp);
    })
})

describe("encode8()",() => {

    test("encode8('hello')", () => {
        const exp = "150145154154157";
        const actual = encode8("hello");
        expect(actual).toBe(exp);
    })
})

describe("encode64()",() => {
    test("encode64('hello')", () => {
        const exp = 'aGVsbG8=';
        const actual = encode64("hello");
        expect(actual).toBe(exp);
    })
});

describe("encode32()",() => {
    test("encode32('hello')", () => {
        const exp = 'NBSWY3DP';
        const actual = encode32("hello");
        expect(actual).toBe(exp);
    })
});
