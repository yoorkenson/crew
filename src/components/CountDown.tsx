import { useEffect, useRef, useState } from "react";
import sandClock from '../assets/images/clock.svg';

interface CountDownProps {
  targetDate: Date
}

export const CountDown = ({targetDate} : CountDownProps) => {

  const [datesDifference, setDatesDifference] = useState<ReturnType<typeof getDatesDifference> | null>(null);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
      const tmpDatesDiff = getDatesDifference(new Date(), targetDate);
      if (!tmpDatesDiff.daysDiff) {
          timerInterval.current = setInterval(() => {
              setDatesDifference(getDatesDifference(new Date(), targetDate));
          }, 1000)
      }
      setDatesDifference(tmpDatesDiff);
      return () => {
          if (timerInterval.current) clearInterval(timerInterval.current)
      };
  }, [setDatesDifference, targetDate])

  return (
    <div className="events__item__info__mini">
      <img src={sandClock} alt="" className="events__item__icon"/>
      <div className="events__item__text events__item__text_orange">
        {datesDifference && formatDatesDifference(datesDifference)}
      </div>
    </div>
  )
};

const getDatesDifference = (start: Date, end: Date) => {
  const diffInSeconds = Math.floor((end.getTime() - start.getTime()) / 1000);
  const daysDiff = Math.floor(diffInSeconds / 60 / 60 / 24);
  const hoursDiff = Math.floor(diffInSeconds / 60 / 60 % 24);

  if (daysDiff) return {daysDiff, hoursDiff};
  
  const minutesDiff = Math.floor(diffInSeconds / 60 % 60);
  const secondsDiff = diffInSeconds % 60;

  return {hoursDiff, minutesDiff, secondsDiff};
}

const twoDigit = (num: number) => num / 10 >= 1 ? num : '0'+num;

const formatDatesDifference = (dateDifference: ReturnType<typeof getDatesDifference>) => {
  if (dateDifference.daysDiff) return `${dateDifference.daysDiff}days ${dateDifference.hoursDiff}h`;
  else if (dateDifference.minutesDiff) return [
      twoDigit(dateDifference.hoursDiff), 
      twoDigit(dateDifference.minutesDiff), 
      twoDigit(dateDifference.secondsDiff)
  ].join(':');
}