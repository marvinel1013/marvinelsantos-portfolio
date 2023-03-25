import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoMdClose } from "react-icons/io";

function ProjectScreenShot({ imgData, handleOpenScreenShot }) {
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black/70 backdrop-blur-sm z-50">
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center relative">
          <span
            onClick={handleOpenScreenShot}
            className="absolute text-sm md:text-xl right-0 top-[-30px] md:top-[-50px] p-1 md:p-2 rounded-xl cursor-pointer bg-red-700 border-2 border-red-700 hover:bg-transparent hover:text-red-700 duration-300 ease-in"
          >
            <IoMdClose />
          </span>
          <Carousel
            infiniteLoop={true}
            showThumbs={true}
            className="w-[350px] md:w-[800px] "
          >
            {imgData?.map((img, index) => (
              <div key={index}>
                <img src={img} alt="photo" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ProjectScreenShot;
