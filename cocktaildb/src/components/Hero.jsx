import video from "/src/components/assets/video/video.mp4";
import HeroCardsContainer from "./heroCardsContainer";
import Categories from "./categories";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <div className="min-h-screen w-100v absolute">
        <div className=" z-30  absolute h-100v w-full flex justify-center items-center">
          <motion.p
          whileInView={{opacity:1, y:1}}
          initial={{y:100,opacity:0}}
          transition={{duration:0.8}}
          className="text-6xl text-white font-extrabold">
            Find the best Cocktails
          </motion.p>
        </div>
        <video
          src={video}
          autoPlay
          loop
          muted
          className="object-cover h-100v w-full object-center"
        />
      </div>
      <div className="text-6xl min-h-screen bg-black z-50"></div>

      <HeroCardsContainer />
      <Categories />
    </div>
  );
}
export default Hero;
