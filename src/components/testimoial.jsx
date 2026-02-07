import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Slider from "react-slick";

export const Testinomial = () => {
  const section = useRef(null);
  const heading = useRef(null);
  const slider = useRef(null);
  // gsap.registerPlugin(useGSAP,scrollTrigger)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    width: 100,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  useGSAP(
    () => {
      gsap.from(heading.current, {
        y: -100,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: section.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
          markers: true,
        },
        yoyo: 3,
        ease: "power1.out",
      });
      gsap.from(slider.current, {
        opacity: 0,
        y: 900,
        duration: 4,
        scrollTrigger: {
          trigger: section.current,
          start: "top 100%",
          toggleActions: "play none none reverse",
          markers: true,
        },
        ease: "power1.out",
      });
    },
    { scope: section },
  );
  return (
    <>
      <section className="my-[60px]" ref={section}>
        <div className=" my-2  mx-auto py-4  max-w-7xl w-full">
          <div className="text-center my-2 text-4xl" ref={heading}>
            <h1 className="text-4xl my-5">What Our Client's Say</h1>
            <p className="mt-3 mb-[30px] text-2xl font-serif ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aut.
            </p>
          </div>

          <div className="slider-container " ref={slider}>
            <Slider {...settings}>
              <div className="me-[200px]">
                <div className="d--card w-full bg-base-100 d--card-md shadow-sm px-4 ms-4">
                  <div className="d--card-body">
                    <p className="text-xl text-justfiy  font-sans text-[#00000094] ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quia inventore fugit ducimus, eius suscipit sunt qui.
                      Temporibus ipsam assumenda quidem illum cupiditate facere
                    </p>
                    <div className="justify-center d--card-actions my-3">
                      <div className="d--avatar ">
                        <div className="w-17 rounded-full ">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">John Deo</h3>
                      <h4 className="text-sm text-[#00000094]">
                        CEO, XYZ Company
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-5">
                <div className="d--card w-full bg-base-100 d--card-md shadow-sm px-4 ms-4">
                  <div className="d--card-body">
                    <p className="text-xl text-justfiy  font-sans text-[#00000094] ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quia inventore fugit ducimus, eius suscipit sunt qui.
                      Temporibus ipsam assumenda quidem illum cupiditate facere
                    </p>
                    <div className="justify-center d--card-actions my-3">
                      <div className="d--avatar ">
                        <div className="w-17 rounded-full ">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">John Deo</h3>
                      <h4 className="text-sm text-[#00000094]">
                        CEO, XYZ Company
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-[50px]">
                <div className="d--card w-full bg-base-100 d--card-md shadow-sm px-4 ms-4">
                  <div className="d--card-body">
                    <p className="text-xl text-justfiy  font-sans text-[#00000094] ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quia inventore fugit ducimus, eius suscipit sunt qui.
                      Temporibus ipsam assumenda quidem illum cupiditate facere
                    </p>
                    <div className="justify-center d--card-actions my-3">
                      <div className="d--avatar ">
                        <div className="w-17 rounded-full ">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">John Deo</h3>
                      <h4 className="text-sm text-[#00000094]">
                        CEO, XYZ Company
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-[90px]">
                <div className="d--card w-full bg-base-100 d--card-md shadow-sm px-4 ms-4">
                  <div className="d--card-body">
                    <p className="text-xl text-justfiy  font-sans text-[#00000094] ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quia inventore fugit ducimus, eius suscipit sunt qui.
                      Temporibus ipsam assumenda quidem illum cupiditate facere
                    </p>
                    <div className="justify-center d--card-actions my-3">
                      <div className="d--avatar ">
                        <div className="w-17 rounded-full ">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">John Deo</h3>
                      <h4 className="text-sm text-[#00000094]">
                        CEO, XYZ Company
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-[50px]">
                <div className="d--card w-full bg-base-100 d--card-md shadow-sm px-4 ms-4">
                  <div className="d--card-body">
                    <p className="text-xl text-justfiy  font-sans text-[#00000094] ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quia inventore fugit ducimus, eius suscipit sunt qui.
                      Temporibus ipsam assumenda quidem illum cupiditate facere
                    </p>
                    <div className="justify-center d--card-actions my-3">
                      <div className="d--avatar ">
                        <div className="w-17 rounded-full ">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">John Deo</h3>
                      <h4 className="text-sm text-[#00000094]">
                        CEO, XYZ Company
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-[90px]">
                <div className="d--card w-full bg-base-100 d--card-md shadow-sm px-4 ms-4">
                  <div className="d--card-body">
                    <p className="text-xl text-justfiy  font-sans text-[#00000094] ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quia inventore fugit ducimus, eius suscipit sunt qui.
                      Temporibus ipsam assumenda quidem illum cupiditate facere
                    </p>
                    <div className="justify-center d--card-actions my-3">
                      <div className="d--avatar ">
                        <div className="w-17 rounded-full ">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">John Deo</h3>
                      <h4 className="text-sm text-[#00000094]">
                        CEO, XYZ Company
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-[50px]">
                <div className="d--card w-full bg-base-100 d--card-md shadow-sm px-4 ms-4">
                  <div className="d--card-body">
                    <p className="text-xl text-justfiy  font-sans text-[#00000094] ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quia inventore fugit ducimus, eius suscipit sunt qui.
                      Temporibus ipsam assumenda quidem illum cupiditate facere
                    </p>
                    <div className="justify-center d--card-actions my-3">
                      <div className="d--avatar ">
                        <div className="w-17 rounded-full ">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">John Deo</h3>
                      <h4 className="text-sm text-[#00000094]">
                        CEO, XYZ Company
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-[90px]">
                <div className="d--card w-full bg-base-100 d--card-md shadow-sm px-4 ms-4">
                  <div className="d--card-body">
                    <p className="text-xl text-justfiy  font-sans text-[#00000094] ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quia inventore fugit ducimus, eius suscipit sunt qui.
                      Temporibus ipsam assumenda quidem illum cupiditate facere
                    </p>
                    <div className="justify-center d--card-actions my-3">
                      <div className="d--avatar ">
                        <div className="w-17 rounded-full ">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">John Deo</h3>
                      <h4 className="text-sm text-[#00000094]">
                        CEO, XYZ Company
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-[50px]">
                <div className="d--card w-full bg-base-100 d--card-md shadow-sm px-4 ms-4">
                  <div className="d--card-body">
                    <p className="text-xl text-justfiy  font-sans text-[#00000094] ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quia inventore fugit ducimus, eius suscipit sunt qui.
                      Temporibus ipsam assumenda quidem illum cupiditate facere
                    </p>
                    <div className="justify-center d--card-actions my-3">
                      <div className="d--avatar ">
                        <div className="w-17 rounded-full ">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">John Deo</h3>
                      <h4 className="text-sm text-[#00000094]">
                        CEO, XYZ Company
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
