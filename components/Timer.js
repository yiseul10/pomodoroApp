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
      <div className='flex gap-5'>
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={`${
                index === active ? 'bg-zinc-800 bg-opacity-30' : 'text-gray-500'
              } p-1 cursor-pointer transition-all rounded-2xl`}
              onClick={() => switchMenu(index)}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className='mt-10 mb-10'>
        <div className='flex justify-between'>
          <h1 className='font-semibold text-[#0097FF]'>
            {active === 0 ? 'Focus Time' : 'Break Time'}
          </h1>
          <div className='relative inline-block group'>
            <button
              className='rounded-full w-1.5 h-1.5 bg-orange-500'
              onClick={reset}
            ></button>
            <span className='inline-block invisible w-[100px] rounded p-1 absolute group-hover:visible text-xs bg-orange-600 bottom-full left-1/2 ml-[-50px]'>
              다시시작
            </span>
          </div>
        </div>
        <div className='flex items-center'>
          <h1 className='text-8xl font-bold select-none m-0'>
            {getTime()}:{seconds.toString().padStart(2, '0')}
          </h1>
        </div>
      </div>
      <button
        className='px-12 py-1 rounded-2xl uppercase font-bold border border-gray-500 hover:border-gray-100'
        onClick={startAlarm}
      >
        {startTimer ? 'stop' : 'start'}
      </button>
    </div>
  );
}
