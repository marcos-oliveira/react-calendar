import moment from "moment";
import { DAY_FORMAT } from "../../shared/constants";
import { CHANGE_DATE } from "../actions/calendar";
import calendarReducer from "./calendar";

test("should return the initial state", () => {
  expect(calendarReducer(undefined, {})).toEqual({
    date: moment().format(DAY_FORMAT),
  });
});

test("should handle change to new date", () => {
  expect(
    calendarReducer(undefined, { type: CHANGE_DATE, date: "2022-06-05" })
  ).toEqual({
    date: "2022-06-05",
  });
  expect(
    calendarReducer(
      { date: "2022-06-04" },
      { type: CHANGE_DATE, date: "2022-06-05" }
    )
  ).toEqual({
    date: "2022-06-05",
  });
});
