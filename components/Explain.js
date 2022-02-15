import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import React from 'react';

function Explain() {
  return (
    <div className='text-white pb-12 w-11/12 mx-auto'>
      <RoughNotationGroup show={true}>
        <div className='pt-20'>
          <h1 className='py-2 text-2xl font-bold'>
            <RoughNotation type='underline' color='#FCBB3D' order='1'>
              What is Pomodoro?
            </RoughNotation>
          </h1>
          <span className='tracking-wide sm:break-all'>
            뽀모도로 기법(Pomodoro Technique)은 시간관리 방법론 으로 1980년대
            후반 프란체스코 시릴로(Francesco Cirillo)가 제안했습니다. 타이머를
            이용해서
            <RoughNotation type='highlight' color='#0097FF' order='2'>
              25분간
            </RoughNotation>
            집중해서 일을 한 다음 5분간 휴식하는 방식입니다. <br />
            <RoughNotation type='circle' color='#FD5D4E' order='3'>
              뽀모도로
            </RoughNotation>
            는 이탈리아어로 토마토를 뜻합니다. 프란체스코 시릴로가 대학생 시절
            토마토 모양으로 생긴 요리용 타이머를 이용해 25분간 집중 후 휴식하는
            일처리 방법을 제안한데서 그 이름이 유래했습니다.
          </span>
        </div>
      </RoughNotationGroup>
    </div>
  );
}
export default React.memo(Explain);
