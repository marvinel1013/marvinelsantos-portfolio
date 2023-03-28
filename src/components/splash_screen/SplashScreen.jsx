import { RotatingSquare } from "react-loader-spinner";

function SplashScreen() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-dark">
      <div className="flex items-center gap-2 md:gap-7">
        <div className="w-10 md:w-24">
          <RotatingSquare
            color="#45a0f5"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            visible={true}
          />
        </div>
        <div
          className="flex items-center gap-2 font-splashFont"
          data-aos="fade-zoom-in"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <div className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-secondary to-primary pt-2 pr-2 text-transparent bg-clip-text">
            Marvinel
          </div>
          <div className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-secondary to-primary pt-2 pr-2 text-transparent bg-clip-text">
            Portfolio
          </div>
        </div>
        <div className="w-10 md:w-24">
          <RotatingSquare
            color="#45a0f5"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            visible={true}
          />
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
