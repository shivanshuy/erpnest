export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden hero-purple-black" aria-hidden="true">
      <div className="absolute inset-0 hero-stars" />
      <div className="absolute inset-0 hero-top-glow" />

      <div className="absolute top-[20%] left-[5%] sm:left-[10%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-purple-500/25 blur-3xl animate-float" />
      <div
        className="absolute top-[30%] right-[5%] sm:right-[12%] w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-violet-500/20 blur-3xl animate-float"
        style={{ animationDelay: '-2s' }}
      />

      <div className="absolute left-1/2 bottom-[-8rem] sm:bottom-[-12rem] lg:bottom-[-16rem] -translate-x-1/2 w-[18rem] h-[18rem] sm:w-[26rem] sm:h-[26rem] lg:w-[34rem] lg:h-[34rem] hero-sun-glow rounded-full" />
      <div className="absolute left-1/2 bottom-[-4rem] sm:bottom-[-6rem] lg:bottom-[-9rem] -translate-x-1/2 w-[7rem] h-[7rem] sm:w-[9rem] sm:h-[9rem] lg:w-[11rem] lg:h-[11rem] rounded-full hero-sun-core" />
    </div>
  )
}
