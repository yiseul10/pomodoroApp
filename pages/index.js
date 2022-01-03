import Explain from '../components/Explain';
import Navigation from '../components/Navigation';
import Timer from '../components/Timer';

export default function Home() {
  return (
    <div className='bg-gray-900 min-h-screen font-inter'>
      <div className='max-w-2xl min-h-screen mx-auto'>
        <Navigation />
        <Timer />
        <Explain />
      </div>
    </div>
  );
}
