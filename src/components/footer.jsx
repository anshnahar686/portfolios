import first from '../assets/logo.png'
export const Footer = () => {
    const icons=[{icon:'ri-facebook-circle-fill',tooltip:'facebook'},{icon:'ri-twitter-x-fill',tooltip:'twitter'},{icon:'ri-telegram-fill',tooltip:'telegram'},{icon:'ri-whatsapp-line',tooltip:'whatsapp'},{icon:'ri-linkedin-box-fill',tooltip:'linkedin-box'},{icon:'ri-github-fill',tooltip:'github'}]
  return (
    <>
 
       <div className="bg-[#FBFBFB] mt-[120px] ">
      <div className=" bg-[#141313C7] py-[90px] rounded-xl text-center">

    
        <h1 className="text-4xl font-medium text-white/80 mb-6">
         <img src={first} className='h-40 w-auto object-cover mx-auto'/>
        </h1>

      
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10">
          {["Home", "About", "Services", "Projects", "Contactus", "Testimonial"].map(
            (item, index) => (
              <button
                key={index}
                className="text-lg md:text-xl text-[#F0E8E8CC] hover:text-white transition"
              >
                {item}
              </button>
            )
          )}
        </div>

       
        <div className="flex justify-center gap-5 mb-8">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-black/60 hover:bg-black transition d--tooltip" data-tip={icon.tooltip}
            >
              <i className={`${icon.icon} text-2xl text-white/80`} ></i>
            </div>
          ))}
        </div>

      
        <p className="text-sm text-white/60">
          Designed By @yashNahar UI/UX Designs
        </p>
      </div>
    </div>
    </>
  );
};
