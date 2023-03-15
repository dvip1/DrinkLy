import { DataContext } from "./data"
import { useContext } from "react"
import HeroCard from "./heroCard"
import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination, Keyboard,EffectCoverflow } from "swiper"
import "swiper/css";
import "swiper/css/navigation";




function HeroCardsContainer(){
     let [data, isError, isLoading ,isFetching ,error ,refetch, linkInfo, setLinkInfo]=useContext(DataContext)
    return (
      <div className="min-h-screen flex justify-center items-center"> 
      <Swiper 
                slidesPerView={3}
              spaceBetween={30}  centeredSlides={true} navigation={true}
               pagination={{dynamicBullets:true,}} modules={[Navigation,Pagination,Keyboard,EffectCoverflow ]}
               keyboard={
                {enabled:true}
               }
               effect={"coverflow"}
               coverflowEffect={{
                rotate: 80,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
               grabCursor={true}
               className="flex justify-center items-center">
            {data?.data.drinks.map(drink=><SwiperSlide className="" key={drink.idDrink}><HeroCard image={drink.strDrinkThumb} title={drink.strDrink} key={drink.idDrink} cardId={drink.idDrink}/></SwiperSlide>)}
        </Swiper>
        </div>
    )
}

export default HeroCardsContainer
