const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('it adds commas correctly' , () => {
    const answer = addCommas(44555);
    expect(answer).toBe('44,555');
    const answerTwo = addCommas(6);
    expect(answerTwo).toBe('6');
  })

  test('it accepts negative numbers correctly' , () => {
    const answer = addCommas(-44555);
    expect(answer).toBe('-44,555')
  })
});
