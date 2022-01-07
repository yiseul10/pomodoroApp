import { FiX } from 'react-icons/fi';

export default function Modal({ pomodoroRef, shortBreakRef, longBreakRef }) {
  const inputs = [
    {
      value: '뽀모도로',
      ref: pomodoroRef,
      defaultValue: 25
    },
    {
      value: '짧은 휴식',
      ref: shortBreakRef,
      defaultValue: 5
    },
    {
      value: '긴 휴식',
      ref: longBreakRef,
      defaultValue: 10
    }
  ];

  return (
    <>
      <div className='absolute h-full w-full bottom-0 left-0 top-0 bg-gray-800 bg-opacity-30'>
        <div className='max-w-xl backdrop-blur bg-white/50 absolute sm:w-96 w-11/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-full p-5 rounded-md'>
          <div className='flex justify-between text-gray-700 items-center'>
            <h1 className='uppercase font-bold text-sm tracking-wider antialiased'>
              Time setting
            </h1>
            <FiX className='text-2xl' />
          </div>
          <div className='h-1 w-full bg-gray-700 mt-3 mb-5'></div>
          <div className='flex gap-5 text-center m-auto'>
            {inputs.map((input, index) => {
              return (
                <div key={index}>
                  <h1 className='text-gray-700 text-xs uppercase'>
                    {input.value}
                  </h1>
                  <input
                    defaultChecked={input.defaultValue}
                    type='number'
                    className='w-full bg-gray-900 bg-opacity-30 py-1 rounded outline-none'
                    ref={input.ref}
                  />
                </div>
              );
            })}
          </div>
          <button className='block m-auto mt-5 px-9 py-1 rounded-full text-sm text-gray-800 bg-emerald-300 hover:bg-emerald-100 antialiased'>
            설정
          </button>
        </div>
      </div>
    </>
  );
}
