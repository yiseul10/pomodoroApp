import React from 'react';

const Alarm = React.forwardRef((props, ref) => {
  return (
    <audio ref={ref}>
      <source src='/alarm.mp3' type='audio/mp3' />
      브라우저가 audio를 지원하지 않습니다💥
    </audio>
  );
  Alarm.displayName = 'Alarm';
});

export default Alarm;
