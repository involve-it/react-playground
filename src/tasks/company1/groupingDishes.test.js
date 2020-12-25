import '@testing-library/jest-dom/extend-expect';
import { groupingDishes } from './groupingDishes';

test('original', () => {
  expect(groupingDishes([
    ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
    ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
    ["Quesadilla", "Chicken", "Cheese", "Sauce"],
    ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
  ])).toEqual(expect.arrayContaining([
    expect.arrayContaining(["Cheese", "Quesadilla", "Sandwich"]),
    expect.arrayContaining(["Salad", "Salad", "Sandwich"]),
    expect.arrayContaining(["Sauce", "Pizza", "Quesadilla", "Salad"]),
    expect.arrayContaining(["Tomato", "Pizza", "Salad", "Sandwich"])
  ]));
});

test('original - 2', () => {
  expect(groupingDishes([["Pasta", "Tomato Sauce", "Onions", "Garlic"],
    ["Chicken Curry", "Chicken", "Curry Sauce"],
    ["Fried Rice", "Rice", "Onions", "Nuts"],
    ["Salad", "Spinach", "Nuts"],
    ["Sandwich", "Cheese", "Bread"],
    ["Quesadilla", "Chicken", "Cheese"]])).toEqual(
    expect.arrayContaining([
      expect.arrayContaining(["Cheese", "Quesadilla", "Sandwich"]),
      expect.arrayContaining(["Chicken", "Chicken Curry", "Quesadilla"]),
      expect.arrayContaining(["Nuts", "Fried Rice", "Salad"]),
      expect.arrayContaining(["Onions", "Fried Rice", "Pasta"])
    ]));
});

test('original - 3', () => {
  expect(groupingDishes([
    [
      "First",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i"
    ],
    [
      "Second",
      "i",
      "h",
      "g",
      "f",
      "e",
      "x",
      "c",
      "b",
      "a"
    ]
  ])).toEqual(
    expect.arrayContaining([
      expect.arrayContaining([
        "a",
        "First",
        "Second"]),
      expect.arrayContaining([
        "b",
        "First",
        "Second"]),
      expect.arrayContaining(["c",
        "First",
        "Second"]),
      expect.arrayContaining([ "e",
        "First",
        "Second"]),

      expect.arrayContaining([                 "f",
        "First",
        "Second"]),
      expect.arrayContaining([ "g",
        "First",
        "Second"]),
      expect.arrayContaining([                 "h",
        "First",
        "Second"]),
      expect.arrayContaining([              "i",
        "First",
        "Second"]),
    ]));
});

