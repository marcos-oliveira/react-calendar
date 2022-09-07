import moment from "moment";
import { DATE_TIME_FORMAT } from "../../shared/constants";
import {
  EDIT_REMINDER_MODAL,
  HIDE_MORE_REMINDERS,
  HIDE_REMINDER_MODAL,
  REMOVE_REMINDER,
  SAVE_REMINDER,
  SHOW_MORE_REMINDERS,
  SHOW_NEW_REMINDER_MODAL,
} from "../actions/reminder";
import reminderReducer from "./reminder";

const initialState = {
  form: { color: "", date: moment().format(DATE_TIME_FORMAT), description: "" },
  nextId: 1,
  reminders: [],
  showMoreReminders: false,
  visible: false,
};

test("should return the initial state", () => {
  expect(reminderReducer(undefined, {})).toEqual(initialState);
});

test("should handle show new reminder modal", () => {
  expect(
    reminderReducer(initialState, {
      type: SHOW_NEW_REMINDER_MODAL,
      date: "2022-06-05 12:00",
    })
  ).toEqual({
    ...initialState,
    visible: true,
    form: {
      ...initialState.form,
      date: `2022-06-05 ${moment().format("HH:mm")}`,
    },
  });
});

test("should handle hide reminder modal", () => {
  expect(reminderReducer(initialState, { type: HIDE_REMINDER_MODAL })).toEqual({
    ...initialState,
    visible: false,
  });
});

test("should handle edit reminder", () => {
  const reminder = {
    id: 5,
    color: "#FFF",
    date: "2022-06-05 12:00",
    description: "Test reminder",
  };
  const prevState = {
    ...initialState,
    reminders: [reminder],
  };
  expect(
    reminderReducer(prevState, { type: EDIT_REMINDER_MODAL, reminderId: 5 })
  ).toEqual({
    ...prevState,
    visible: true,
    form: reminder,
  });
});

describe("handle save reminder", () => {
  const reminderA = {
    id: 1,
    color: "#FFF",
    date: "2022-06-05 12:00",
    description: "Test reminder",
  };
  const reminderB = {
    color: "#AAA",
    date: "2022-06-05 13:00",
    description: "2 Test reminder",
  };
  const prevState = {
    ...initialState,
    nextId: 2,
    reminders: [reminderA],
  };
  test("when reminder is new should add to reminders", () => {
    expect(
      reminderReducer(prevState, { type: SAVE_REMINDER, reminder: reminderB })
    ).toEqual({
      ...prevState,
      nextId: 3,
      reminders: [reminderA, { ...reminderB, id: 2 }],
    });
  });
  test("when reminder exists should update it", () => {
    expect(
      reminderReducer(prevState, {
        type: SAVE_REMINDER,
        reminder: { ...reminderB, id: 1 },
      })
    ).toEqual({
      ...prevState,
      reminders: [{ ...reminderB, id: 1 }],
    });
  });
});

test("should handle remove reminder", () => {
  const reminder = {
    id: 5,
    color: "#FFF",
    date: "2022-06-05 12:00",
    description: "Test reminder",
  };
  const prevState = {
    ...initialState,
    reminders: [reminder],
  };
  expect(reminderReducer(prevState, { type: REMOVE_REMINDER, id: 5 })).toEqual({
    ...initialState,
  });
});

test("should handle show more reminders", () => {
  expect(
    reminderReducer(initialState, {
      type: SHOW_MORE_REMINDERS,
      date: "2022-01-01",
    })
  ).toEqual({
    ...initialState,
    showMoreReminders: true,
    dateMoreReminders: "2022-01-01",
  });
});

test("should handle hide more reminders", () => {
  expect(
    reminderReducer(
      {
        ...initialState,
        showMoreReminders: true,
        dateMoreReminders: "2022-01-01",
      },
      { type: HIDE_MORE_REMINDERS }
    )
  ).toEqual({
    ...initialState,
    showMoreReminders: false,
    dateMoreReminders: "2022-01-01",
  });
});
