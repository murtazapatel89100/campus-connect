// components/Footer.tsx
// The code for black wave is in home/landing/banner.tsx
export default function Footer() {
  return (
    <footer>
      <div className="w-full -mb-[2px]">
        <img
          src="/waves/wave_black.svg"
          alt="Black Wave Divider"
          className="w-full h-auto block pointer-events-none select-none"
          draggable="false"
        />
      </div>

      <div className="bg-black text-white text-center text-sm">
        <div className="py-8 px-4">
          <p className="font-light tracking-wide">
            Made by students for students
          </p>
        </div>
      </div>
    </footer>
  );
}
