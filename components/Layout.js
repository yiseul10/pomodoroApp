export default function Layout({ children }) {
  return (
    <div className='min-h-screen font-inter bg-gradient-to-tl from-[#050B14]  to-[#1B1C1C] relative'>
      <div className='max-w-2xl min-h-screen mx-auto'>{children}</div>
    </div>
  );
}
