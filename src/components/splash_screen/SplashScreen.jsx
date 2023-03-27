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
        <div className="flex gap-2 font-signatureFont text-4xl md:text-5xl">
          <div className=" font-signatureFont bg-gradient-to-r from-secondary to-primary pt-2 pr-2 text-transparent bg-clip-text">
            Marvinel
          </div>
          <div className=" font-signatureFont bg-gradient-to-r from-secondary to-primary pt-2 pr-2 text-transparent bg-clip-text">
            Santos
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
