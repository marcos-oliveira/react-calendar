import moment from "moment";
import { DATE_TIME_FORMAT, DAY_FORMAT } from "../../shared/constants";
import {
  SHOW_NEW_REMINDER_MODAL,
  HIDE_REMINDER_MODAL,
  EDIT_REMINDER_MODAL,
  SAVE_REMINDER,
  REMOVE_REMINDER,
  SHOW_MORE_REMINDERS,
  HIDE_MORE_REMINDERS,
} from "../actions/reminder";

const initialFormValues = {
  date: moment().format(DATE_TIME_FORMAT),
  color: "",
  description: "",
};

const initialState = {
  visible: false,
  form: initialFormValues,
  reminders: [],
  nextId: 1,
  showMoreReminders: false,
};

const reminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NEW_REMINDER_MODAL:
      const dateWithCurrentTime = `${moment(action.date).format(DAY_FORMAT)} ${moment().format("HH:mm")}`;
      return {
        ...state,
        visible: true,
        form: { ...initialFormValues, date: dateWithCurrentTime },
      };
    case HIDE_REMINDER_MODAL:
      return {
        ...state,
        visible: false,
      };
    case EDIT_REMINDER_MODAL:
      const reminder = state.reminders.find((r) => r.id === action.reminderId);
      return {
        ...state,
        visible: true,
        form: reminder,
      };
    case SAVE_REMINDER:
      let newReminders;
      if (action.reminder.id) {
        newReminders = state.reminders.map((reminder) =>
          reminder.id === action.reminder.id ? action.reminder : reminder
        );
      } else {
        newReminders = [
          ...state.reminders,
          { ...action.reminder, id: state.nextId },
        ];
      }
      return {
        ...state,
        visible: false,
        reminders: newReminders,
        ...(action.reminder.id ? {}: {nextId: state.nextId + 1}),
      };
    case REMOVE_REMINDER:
      return {
        ...state,
        reminders: state.reminders.filter(
          (reminder) => reminder.id !== action.id
        ),
        visible: false,
      };
    case SHOW_MORE_REMINDERS:
      return {
        ...state,
        dateMoreReminders: action.date,
        showMoreReminders: true,
      };
    case HIDE_MORE_REMINDERS:
      return {
        ...state,
        showMoreReminders: false,
      };
    default:
      return state;
  }
};

export default reminderReducer;
