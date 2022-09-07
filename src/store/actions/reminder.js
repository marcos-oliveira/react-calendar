export const SHOW_NEW_REMINDER_MODAL = "SHOW_NEW_REMINDER_MODAL";
export const EDIT_REMINDER_MODAL = "EDIT_REMINDER_MODAL";
export const HIDE_REMINDER_MODAL = "HIDE_REMINDER_MODAL";
export const SAVE_REMINDER = "SAVE_REMINDER";
export const REMOVE_REMINDER = "REMOVE_REMINDER";
export const SHOW_MORE_REMINDERS = "SHOW_MORE_REMINDERS";
export const HIDE_MORE_REMINDERS = "HIDE_MORE_REMINDERS";

export const openNewReminderModal = (date) => {
  return { type: SHOW_NEW_REMINDER_MODAL, date };
};

export const editReminderModal = (reminderId) => {
  return { type: EDIT_REMINDER_MODAL, reminderId };
};

export const hideReminderModal = () => {
  return { type: HIDE_REMINDER_MODAL };
};

export const saveReminder = (reminder) => {
  return { type: SAVE_REMINDER, reminder };
};

export const removeReminder = (id) => {
  return { type: REMOVE_REMINDER, id };
};

export const showMoreReminders = (date) => {
  return { type: SHOW_MORE_REMINDERS, date };
};

export const hideMoreReminders = () => {
  return { type: HIDE_MORE_REMINDERS };
};
