import { FiBookOpen, FiCommand, FiSettings } from 'react-icons/fi';

export default function Navigation() {
  return (
    <nav className='pt-5 text-white flex justify-between w-11/12 mx-auto'>
      <div className='flex items-center gap-1 cursor-pointer'>
        <FiBookOpen className='text-sm' />
        <div className="font-['Hi_Melody'] text-xl">
          <h1>뽀모도로</h1>
        </div>
      </div>
      <FiSettings className='text-2xl  cursor-pointer' />
    </nav>
  );
}
