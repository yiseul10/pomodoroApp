export default function Timer() {
  const options = ['Pomodoro', 'Short Break', 'Long Break'];

  return (
    <div className='text-white w-10/12 mx-auto pt-5 flex flex-col justify-center mt-10 items-center'>
      <div className='flex gap-5'>
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={`${
                index === 0 ? 'bg-zinc-800 bg-opacity-50' : ''
              } p-1 cursor-pointer transition-all rounded`}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className='mt-10 mb-10'>
        <h1 className='text-8xl font-bold select-none m-0'>00:00</h1>
      </div>
      <button className='px-12 py-1 rounded-2xl uppercase font-bold border border-gray-500 hover:border-gray-100'>
        start
      </button>
    </div>
  );
}
