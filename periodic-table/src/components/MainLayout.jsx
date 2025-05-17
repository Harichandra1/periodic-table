// MainLayout.jsx
import BlurEffect from './BlurEffect';
import PeriodicTable from './PeriodicTable';

function MainLayout() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Blur Layer with Glassmorphism */}
      <BlurEffect imageUrl="" />

      {/* Foreground Content */}
      <div className="relative z-10 p-10">
        <h1 className="text-4xl font-bold text-white mb-8">Hello, Periodic Table!</h1>
        <div className="backdrop-blur-[16px] saturate-[180%] bg-white/20 rounded-xl border border-gray-300/30 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2),_0_0_20px_rgba(255,255,255,0.1)] p-6 w-full max-w-6xl mx-auto">
                <PeriodicTable />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;




