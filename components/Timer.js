import { FiRotateCcw } from 'react-icons/fi';

export default function Timer({
  active,
  switchMenu,
  getTime,
  seconds,
  startTimer,
  startAlarm,
  reset
}) {
  const options = ['Pomodoro', 'Short Break', 'Long Break'];

  return (
    <div className='text-white w-10/12 mx-auto pt-5 flex flex-col justify-center mt-10 items-center'>
      <div className='flex gap-5 items-center'>
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={`${
                index === active ? 'line-through' : 'text-gray-500/30'
              } p-1 cursor-pointer uppercase text-xs  rounded-2xl`}
              onClick={() => switchMenu(index)}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className='w-10/12 sm:m-auto pt-5 flex flex-col xs:m-0'>
        <nav className='flex sm:justify-around xs:justify-between'>
          <h1 className='font-semibold text-[#0097FF]'>
            {active === 0 ? 'Focus Time' : 'Break Time'}
          </h1>
          <div className='relative inline-block group'>
            <button
              className='rounded-full w-1.5 h-1.5 bg-orange-500'
              onClick={reset}
            ></button>
            <span className='inline-block invisible rounded p-1.5 absolute group-hover:visible text-center bg-orange-600 bottom-full left-1/2 ml-[-13px]'>
              <FiRotateCcw />
            </span>
          </div>
        </nav>
      </div>
      <div className='flex items-center'></div>
      <h1 className='text-8xl font-bold select-none mt-2 mb-5'>
        {getTime()}:{seconds.toString().padStart(2, '0')}
      </h1>
      <button
        className='transition ease-in-out duration-700 px-12 py-1 rounded-2xl uppercase font-bold border border-gray-500 hover:border-gray-100'
        onClick={startAlarm}
      >
        {startTimer ? 'stop' : 'start'}
      </button>
    </div>
  );
}
