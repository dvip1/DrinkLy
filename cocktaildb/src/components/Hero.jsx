import video from "/src/components/assets/video/video.mp4";
import HeroCardsContainer from "./heroCardsContainer";
import Categories from "./categories";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Hero() {
  // let sections=document.querySelectorAll('section')
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let windowWidth = window.innerWidth;
    if (windowWidth > 1024) {
      sections.forEach((section) => {
        let options = { threshold: 0.066 }; // this 4 values are top, right, bottom, left -ve values are outside the viewport and +ve values are inside the viewport itmeans if you want to observe the element when it is 100px inside the viewport then you have to give -100px in bottom value and positive values means inside the viewport
        let observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const anchor = document.querySelector(
                `a[href="#${entry.target.id}"]`
              );
              // observer.unobserve(entry.target);
              anchor.click();
            } else {
              return;
            }
          });
        }, options);

        observer.observe(section);
      });
    }
  }, []);

  return (
    <div>
      <section id="hero">
        <div className="min-h-screen w-100v absolute">
          <div className=" z-30  absolute h-100v w-full flex justify-center items-center">
            <motion.div
              whileInView={{ opacity: 1, y: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl text-white font-extrabold flex justify-evenly md:flex-row esm:flex-col items-center "
            >
              <p> Find the best </p>
              <Swiper
                direction={"vertical"}
                loop={true}
                centeredSlides={true}
                spaceBetween={10}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="bg-transparent text-[#faf0a7] ml-2 newSwiper text-center"
              >
                <SwiperSlide className="bg-transparent ">
                  <p className="bg-transparent text-7xl">Cocktails</p>
                </SwiperSlide>
                <SwiperSlide className=" p-2">
                  <p className="text-7xl">Gins</p>
                </SwiperSlide>
                <SwiperSlide className="">
                  <p className="text-7xl">Wines</p>
                </SwiperSlide>
                <SwiperSlide className="">
                  <p className="text-7xl">Martini</p>
                </SwiperSlide>
                <SwiperSlide className="">
                  <p className="text-7xl">Scotch</p>
                </SwiperSlide>
                <SwiperSlide className="">
                  <p className="text-7xl">Beers</p>
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </div>

          <video
            src={video}
            autoPlay
            loop
            muted
            className="object-cover h-100v w-full object-center"
          />
        </div>
        <div className="text-7xl min-h-screen bg-black z-50"></div>
      </section>
      <section id="heroCards">
        {" "}
        <HeroCardsContainer />
      </section>
      <section id="categories">
        {" "}
        <Categories />
      </section>
      <a href="#hero" className="text-center align-middle">
        Top
      </a>
      <a href="#heroCards">Cards</a>
      <a href="#categories">Cat</a>
    </div>
  );
}
export default Hero;
