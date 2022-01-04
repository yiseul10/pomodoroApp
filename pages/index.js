import { useState, useEffect, useRef } from 'react';
import Alarm from '../components/Alarm';
import Explain from '../components/Explain';
import Navigation from '../components/Navigation';
import Timer from '../components/Timer';

export default function Home() {
  const [pomodoro, setPomodoro] = useState(25);
  const [short, setShort] = useState(5);
  const [long, setLong] = useState(10);

  const [seconds, setSecond] = useState(0);
  const [active, setActive] = useState(0);
  const [consumeSecond, setConsumedSecond] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  const alarmRef = useRef();

  const switchMenu = index => {
    const isYes =
      consumeSecond && active !== index
        ? confirm('🙈타이머가 초기화됩니다')
        : false;
    if (isYes) {
      reset();
      setActive(index);
    } else if (!consumeSecond) {
      setActive(index);
    }
  };

  const getTime = () => {
    const timeSet = {
      0: pomodoro,
      1: short,
      2: long
    };
    return timeSet[active];
  };
  const updateMinute = () => {
    const updateSet = {
      0: setPomodoro,
      1: setShort,
      2: setLong
    };
    return updateSet[active];
  };

  const reset = () => {
    setStartTimer(false);
    setConsumedSecond(0);
    setSecond(0);
    setPomodoro(25);
    setShort(5);
    setLong(10);
  };

  const timeUp = () => {
    reset();
    alarmRef.current.play();
  };

  const clockTime = () => {
    const minutes = getTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      timeUp();
    } else if (seconds === 0) {
      setMinutes(minutes => minutes - 1);
      setSecond(59);
    } else {
      setSecond(seconds => seconds - 1);
    }
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumeSecond ? 'show warning' : null;
    };

    const timer = setInterval(() => {
      if (startTimer) {
        setConsumedSecond(value => value + 1);
        clockTime();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, pomodoro, short, long, startTimer]);

  return (
    <div className='min-h-screen font-inter bg-gradient-to-tl from-[#050B14]  to-[#1B1C1C]'>
      <div className='max-w-2xl min-h-screen mx-auto'>
        <Navigation />
        <Timer
          active={active}
          switchMenu={switchMenu}
          getTime={getTime}
          seconds={seconds}
          startTimer={startTimer}
          setStartTimer={setStartTimer}
        />
        <Explain />
        <Alarm ref={alarmRef} />
      </div>
    </div>
  );
}
