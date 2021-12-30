import { useEffect, useState } from "react";
import { IEvent } from "../models/IEvent";
import clock from '../assets/images/clock.svg';
import { CountDown } from "./CountDown";


interface EventDateProps {
  event: IEvent
}


export const EventDate = ({event} : EventDateProps) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => setDate(getValidEventDate(event)), [event]);

  return (
    <>
      <div className="events__item__info__mini">
          <img src={clock} alt="" className="events__item__icon"/>
          <div className="events__item__text">
              { date && (
                  getTimeLabel(date) + ' ' + getDateLabel(date)
              ) }
          </div>
      </div>
      {date && date > new Date() && <CountDown targetDate={date}/>}
    </>
  )
}

const getValidEventDate = (event: IEvent) => {
  return new Date(`${event.date} ${event.time}`);
}

const getDateLabel = (date: Date) => {
  const today = new Date();
  if (today.getDate() === date.getDate()) return 'today';
  else if (today.getDate() === date.getDate() - 1) return 'tomorrow';
  return date.toLocaleDateString('en-us', {day: '2-digit', month: '2-digit', year: 'numeric'});
}

const getTimeLabel = (date: Date) => {
  return date.toLocaleTimeString('en-us', {hour12: true, minute: '2-digit', hour: 'numeric'})
}