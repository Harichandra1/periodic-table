import BlurEffect from './BlurEffect';
import PeriodicTable from './PeriodicTable';

function MainLayout() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Blur Layer with Glassmorphism */}
      <BlurEffect imageUrl="" />

      {/* Fullscreen Foreground Content */}
      <div className="absolute inset-0 z-10">
        <div className="relative w-full h-full flex flex-col items-center justify-center p-10 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[inset_0_0_30px_rgba(255,255,255,0.1),0_0_60px_rgba(255,255,255,0.3)]">
  <div className="absolute inset-0 rounded-2xl bg-white/10 pointer-events-none" />
  <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] mb-10 z-10">Hello, Periodic Table!</h1>
  <div className="z-10 w-full">
    <PeriodicTable />
  </div>
</div>
      </div>
    </div>
  );
}

export default MainLayout;




