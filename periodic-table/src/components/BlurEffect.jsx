// BlurEffect.jsx
import backdropImage from '../assets/backdrop.jpg';
function BlurEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backdropImage})` }}
      />

      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/10" />

      {/* Border / Glass Edge */}
      <div className="absolute inset-0 border border-white/10 rounded-[20px] shadow-2xl" />
    </div>
  );
}

export default BlurEffect;