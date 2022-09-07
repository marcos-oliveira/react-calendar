import PropTypes from "prop-types";
import "./Reminder.css";

const propTypes = {
  value: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

function Reminder(props) {
  const { reminder, onClick } = props;
  const text = `${reminder.date.format('HH:mm')} ${reminder.description}`;
  return (
    <div
      className="Reminder"
      style={{ backgroundColor: reminder.color }}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

Reminder.propTypes = propTypes;
export default Reminder;
