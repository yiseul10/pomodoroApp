import { useState, useEffect, useRef } from 'react';
import Alarm from '../components/Alarm';
import Explain from '../components/Explain';
import Modal from '../components/Modal';
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
  const [isTimeUp, setIsTimeUp] = useState(false);

  const [open, setOpen] = useState(false);

  const alarmRef = useRef();
  const pomodoroRef = useRef();
  const shortBreakRef = useRef();
  const longBreakRef = useRef();

  const updateTimeDefaultValue = () => {
    setPomodoro(pomodoroRef.current.value);
    setShort(shortBreakRef.current.value);
    setLong(longBreakRef.current.value);
    setOpen(false);
    setSecond(0);
    setConsumedSecond(0);
  };

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
    // setSecond(0);
    updateTimeDefaultValue();
  };

  const timeUp = () => {
    reset();
    setIsTimeUp(true);
    alarmRef.current.play();
  };

  const muteAlarm = () => {
    alarmRef.current.pause();
    alarmRef.current.currentTime = 0;
  };

  const startAlarm = () => {
    setIsTimeUp(false);
    muteAlarm();
    setStartTimer(start => !start);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, pomodoro, short, long, startTimer]);

  return (
    <div className='min-h-screen font-inter bg-gradient-to-tl from-[#050B14]  to-[#1B1C1C] relative'>
      <div className='max-w-2xl min-h-screen mx-auto'>
        <Navigation
          muteAlarm={muteAlarm}
          isTimeUp={isTimeUp}
          setOpen={setOpen}
        />
        <Timer
          active={active}
          switchMenu={switchMenu}
          getTime={getTime}
          seconds={seconds}
          startTimer={startTimer}
          startAlarm={startAlarm}
          reset={reset}
        />
        <Explain />
        <Alarm ref={alarmRef} />
        <Modal
          open={open}
          setOpen={setOpen}
          pomodoroRef={pomodoroRef}
          shortBreakRef={shortBreakRef}
          longBreakRef={longBreakRef}
          updateTimeDefaultValue={updateTimeDefaultValue}
        />
      </div>
    </div>
  );
}
