import cocktails from "../components/assets/images/m-s-meeuwesen-QYWYnzvPTAQ-unsplash new.jpg"

let AboutUs = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          className="w-100v h-70v object-cover"
          src={cocktails}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-white text-7xl font-extrabold">About Us</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-full bg-white -translate-y-16 w-60v shadow-lg">
            <p className="p-6 rounded-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              laudantium a ipsum quasi tempore dicta ratione impedit temporibus
              sit. Eveniet hic repellendus quo neque voluptate similique
              consectetur magni dignissimos et!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
