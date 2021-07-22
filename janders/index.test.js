const { crime_scene, range, process_data } = require("./");

test("determines the correct values", () => {
  expect(
    crime_scene(`5 10

4

1 8

5 8

7 10

8 9`)
  ).toBe("1 4");
});

test("range creates a range from two numbers", () => {
  expect(range(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
});

test("range creates a range from two numbers", () => {
  expect(range(7, 10)).toEqual([7, 8, 9, 10]);
});

test("process_data splits the string", () => {
  expect(
    process_data(`5 10

4

1 8

5 8

7 10

8 9`)
  ).toEqual([[5, 10], [4], [1, 8], [5, 8], [7, 10], [8, 9]]);
});
