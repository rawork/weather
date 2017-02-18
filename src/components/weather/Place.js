import React from 'react';

export const Place = (props) => {
  const type = "data " + props.type;
  const temp = Math.round(props.temp);

  return  (
    <div className={type}>
      <div className="title">{props.title}</div>
      <div className="weather-icon" title={props.icon_title}>{props.icon}</div>
      <div className="weather">{temp} <small>&deg;C</small></div>
      <div className="text" dangerouslySetInnerHTML={props.message} />
      <div className="time" dangerouslySetInnerHTML={props.time} />
    </div>)
}



Place.propTypes = {
  title: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  icon_title: React.PropTypes.string.isRequired,
  temp: React.PropTypes.number.isRequired,
  message: React.PropTypes.object.isRequired,
  time: React.PropTypes.object
}