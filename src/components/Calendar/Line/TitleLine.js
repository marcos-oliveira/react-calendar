import "./Line.css";
function TitleLine(props) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = daysOfWeek.map((weekday) => (
    <div key={weekday} className="Title">
      {weekday}
    </div>
  ));
  return <div className="Line">{days}</div>;
}

export default TitleLine;
