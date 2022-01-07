import { FiBookOpen, FiCommand, FiSettings } from 'react-icons/fi';
import { RiVolumeOffVibrateFill, RiVolumeUpFill } from 'react-icons/ri';
import { useState } from 'react';

export default function Navigation({ muteAlarm, isTimeUp }) {
  return (
    <nav className='pt-5 text-white flex justify-between w-11/12 mx-auto'>
      <div className='flex items-center gap-1'>
        <FiBookOpen className='text-sm' />
        <button className="font-['Hi_Melody'] text-xl">
          <h1>뽀모도로</h1>
        </button>
      </div>
      <div className='flex items-center gap-4 cursor-pointer text-xl'>
        {isTimeUp && <RiVolumeOffVibrateFill onClick={muteAlarm} />}

        <FiSettings className='text-2xl' />
      </div>
    </nav>
  );
}
