import { fizzBuzz } from "../src/FizzBuzz";

describe("FizzBuzz Tests", () => {
  it("should return a 1 when sending 1", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("should return a Fizz when sending 9", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("should return a Buzz when sending 10", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return a FizzBuzz when sending 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
});
