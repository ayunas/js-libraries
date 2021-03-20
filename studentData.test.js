const { genStudentData } = require('./studentData');

test("sanity check of jest test runner", () => {
    expect("it works").toBe("it works");
})


describe("studentData",() => {
    test("studentData() exists", () => {
        const expected = true;
        const actual = generateStudentData();
        expect(generateStudentData).toHaveBeenCalled();
    });
})