import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

export default function Explain() {
  return (
    <RoughNotationGroup show={true}>
      <div className='text-white'>
        <div className='pt-20 w-11/12 mx-auto'>
          <h1 className='py-2 text-2xl font-bold'>
            <RoughNotation type='underline' color='#fff176' order='1'>
              What is Pomodoro?
            </RoughNotation>
          </h1>
          The Pomodoro Technique is created by Francesco Cirillo for a more
          productive way to
          <RoughNotation type='highlight' color='#0089BA' order='2'>
            work and study.
          </RoughNotation>
          The technique uses a timer to break down work into intervals,
          traditionally 25 minutes in length, separated by short breaks. Each
          interval is known as a pomodoro, from the Italian word for
          <RoughNotation type='circle' color='#FF8066' order='3'>
            tomato
          </RoughNotation>
          , after the tomato-shaped kitchen timer that Cirillo used as a
          university student.
        </div>
      </div>
    </RoughNotationGroup>
  );
}
