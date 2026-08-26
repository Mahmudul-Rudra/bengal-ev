export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-scroll"
        style={{
          backgroundImage: "url('/assets/bg/bg.png')"
        }}
      >
        {/* Dual Layer Overlay for professional depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          জনতার বাহন – সবুজের সাথে, সুখী পথে <br /> <span className="text-bengal-green">BENGAL EV SOLUTIONS</span>
        </h1>
        
        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Working for Green Mobility in Bangladesh
        </p>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#products" 
            className="w-full sm:w-auto bg-bengal-green hover:bg-emerald-600 text-white px-8 md:px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center"
          >
            Explore Solutions
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 md:px-10 py-4 rounded-full font-bold text-lg border border-white/20 transition-all text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}