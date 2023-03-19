import video from "/src/components/assets/video/video.mp4";
import HeroCardsContainer from "./heroCardsContainer";
import Categories from "./categories";

function Hero() {
  return (
    <div>
      <div className="min-h-screen w-100v absolute">
        <div className=" z-30 bg-black bg-opacity-20 absolute h-100v w-full flex justify-center items-center">
          <p className="text-6xl text-white font-extrabold">
            Find the best Cocktails
          </p>
        </div>
        <video
          src={video}
          autoPlay
          loop
          muted
          className="object-cover h-100v w-full object-center"
        />
      </div>
      <div className="text-6xl min-h-screen"></div>

      <HeroCardsContainer />
      <Categories />
    </div>
  );
}
export default Hero;
