import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

export default function Explain() {
  return (
    <div className='text-white pb-12 w-11/12 mx-auto'>
      <RoughNotationGroup show={true}>
        <div className='pt-20'>
          <h1 className='py-2 text-2xl font-bold'>
            <RoughNotation type='underline' color='#FCBB3D' order='1'>
              What is Pomodoro?
            </RoughNotation>
          </h1>
          The Pomodoro Technique is created by Francesco Cirillo for a more
          productive way to
          <RoughNotation type='highlight' color='#0097FF' order='2'>
            work and study.
          </RoughNotation>
          The technique uses a timer to break down work into intervals,
          traditionally 25 minutes in length, separated by short breaks. Each
          interval is known as a pomodoro, from the Italian word for
          <RoughNotation type='circle' color='#FD5D4E' order='3'>
            tomato
          </RoughNotation>
          , after the tomato-shaped kitchen timer that Cirillo used as a
          university student.
        </div>
      </RoughNotationGroup>
    </div>
  );
}
