import moment from "moment";
import PropTypes from "prop-types";
import Reminder from "../Reminder/Reminder";
import "./Day.css";

const propTypes = {
  value: PropTypes.instanceOf(moment),
  onClickReminder: PropTypes.func,
  onClickShowMoreReminders: PropTypes.func,
};

function Day(props) {
  const onClickReminder = (id, e) => {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    props.onClickReminder(id);
  };

  const onClickShowMoreReminders = (date, e) => {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    props.onClickShowMoreReminders(date);
  };

  const { value, reminders } = props;
  if (!value) {
    return <div className="Day disabled" />;
  }
  const showMoreBtn = reminders.length > 3;
  return (
    <div className="Day" onClick={() => props.onClickDate(value)}>
      {value && value.date()}
      {reminders
        .sort((a, b) => (a.date.isAfter(b.date) ? 1 : -1))
        .slice(0, showMoreBtn ? 2 : 3)
        .map((reminder) => (
          <Reminder
            reminder={reminder}
            onClick={(e) => onClickReminder(reminder.id, e)}
          />
        ))}
      {showMoreBtn && (
        <button
          class="btn-showmore"
          onClick={(e) => onClickShowMoreReminders(value, e)}
        >
          {`${reminders.length - 2} more`}
        </button>
      )}
    </div>
  );
}

Day.propTypes = propTypes;
export default Day;
