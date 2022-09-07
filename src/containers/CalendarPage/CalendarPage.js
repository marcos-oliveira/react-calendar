import { useSelector, useDispatch } from "react-redux";
import "./CalendarPage.css";
import {
  editReminderModal,
  hideReminderModal,
  openNewReminderModal,
  showMoreReminders,
  hideMoreReminders,
  removeReminder,
  saveReminder,
} from "../../store/actions/reminder.js";
import Reminder from "../ReminderForm/Reminder.js";
import { changeDate } from "../../store/actions/calendar";
import Calendar from "../../components/Calendar/Calendar.js";
import RemindersPanel from "../../components/RemindersPanel/RemindersPanel";
import moment from "moment";
import { DATE_TIME_FORMAT, DAY_FORMAT } from "../../shared/constants";

function CalendarPage() {
  const date = useSelector((state) => state.calendar.date);
  const originalReminder = useSelector((state) => state.reminder.form);
  const reminder = {
    ...originalReminder,
    date: moment(originalReminder.date),
  };
  const originalReminders = useSelector((state) => state.reminder.reminders);
  const reminders = originalReminders.map((r) => ({
    ...r,
    date: moment(r.date),
  }));
  const visible = useSelector((state) => state.reminder.visible);
  const isShowMoreReminders = useSelector(
    (state) => state.reminder.showMoreReminders
  );
  const originalDateMoreReminders = useSelector(
    (state) => state.reminder.dateMoreReminders
  );
  const dateMoreReminders = moment(originalDateMoreReminders);

  const dispatch = useDispatch();

  const onChangeDate = (date) => {
    dispatch(changeDate(date.format(DAY_FORMAT)));
  };

  const onClickDate = (date) => {
    console.log(date.format(DATE_TIME_FORMAT));
    dispatch(openNewReminderModal(date.format(DAY_FORMAT)));
  };

  const onClickReminder = (id) => {
    dispatch(editReminderModal(id));
  };

  const onSaveReminder = (reminder) => {
    reminder.date = reminder.date.format(DATE_TIME_FORMAT);
    dispatch(saveReminder(reminder));
  };

  const onRemoveReminder = (id) => {
    dispatch(removeReminder(id));
  };

  const onHideReminderModal = () => {
    dispatch(hideReminderModal());
  };

  const onClickShowMoreReminders = (date) => {
    dispatch(showMoreReminders(date.format(DATE_TIME_FORMAT)));
  };

  const onHideMoreReminders = () => {
    dispatch(hideMoreReminders());
  };

  const momentDate = moment(date);

  return (
    <div className="CalendarPage">
      {visible && (
        <Reminder
          onHideReminderModal={onHideReminderModal}
          onSaveReminder={onSaveReminder}
          onRemoveReminder={onRemoveReminder}
          reminder={reminder}
        />
      )}
      {isShowMoreReminders && (
        <RemindersPanel
          reminders={reminders}
          onClickReminder={onClickReminder}
          onHideMoreReminders={onHideMoreReminders}
          value={dateMoreReminders}
        />
      )}
      <div className="CalendarTitle">
        <h1>Codellit's Calendar</h1>
      </div>
      <div className="calendar-container">
        <Calendar
          value={momentDate}
          onChange={onChangeDate}
          onClickDate={onClickDate}
          onClickReminder={onClickReminder}
          onClickShowMoreReminders={onClickShowMoreReminders}
          reminders={reminders}
        />
      </div>
    </div>
  );
}

export default CalendarPage;
