export const Contactus = () => {
  return (
    <>
    <section>
      <div className="bg-[#FBFBFB] my-2 min-h-screen py-4">
        <div class="grid grid-flow-row grid-cols-2 gap-4">
          <div className=" my-3">
            <h1 className="mx-4 px-4 py-3 text-5xl font-semibold">ContactUs</h1>
            <p className="mx-5 px-4 text-justify text-xl my-3 font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur facere unde, voluptatum similique vel explicabo ab
              ipsam recusandae laboriosam, tenetur perspiciatis est voluptas
              quibusdam, quidem beatae molestiae at odit provident?
            </p>
            <div className="flex mx-5 px-4">
              <div className="my-5">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#E0C5273D] hover:bg-[#e0c527e0] transition  ">
                  <i class="ri-mail-line text-2xl text-[#B33737]  "></i>
                </div>
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#E0C5273D] hover:bg-[#e0c527e0] transition my-5">
                  <i class="ri-phone-fill text-2xl text-[#294BD2]"></i>
                </div>
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#E0C5273D] hover:bg-[#e0c527e0] transition my-5">
                  <i class="ri-whatsapp-line  text-2xl text-[#30D94F]"></i>
                </div>
              </div>
              <div className="my-5">
                <div className="my-3 mx-4 self-center text-2xl">
                  <a href="mailto:naharansh489@gmail.com" className="">
                    naharansh489@gmail.com
                  </a>
                </div>
                <div className="my-5">
                  <div className="my-[50px] mx-4 self-center text-2xl">
                    <a href="telto:naharansh489@gmail.com" className="">
                      xxxxxxxxxx
                    </a>
                  </div>
                </div>
                <div className="my-5">
                  <div className="my-[50px] mx-4 self-center text-2xl ">
                    <a href="telto:naharansh489@gmail.com" className="">
                      xxxxxxxxxx
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-3 px-5">
            <form action="" method="post" >
              <div className="flex justify-start items-center mx-5 mt-3">
                <label
                  htmlFor=""
                  className="mx-3 text-xl my-3 text-md text-[#243c6bb8]"
                >
                  Name
                </label>
              </div>
              <div className="flex justify-start items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-white mx-8 w-120 h-10 border border-[#2121214a]  shadow-md rounded-lg px-3  text-xl"
                />
              </div>
              <div className="flex justify-start items-center mx-5 mt-5">
                <label
                  htmlFor=""
                  className="mx-3 text-xl my-3 text-md text-[#243c6bb8]"
                >
                  Email
                </label>
              </div>
              <div className="flex justify-start items-center">
                <input
                  type="email"
                  name=""
                  id=""
                  className="bg-white mx-8 w-120 h-10 border border-[#2121214a]  shadow-md rounded-lg px-3  text-xl"
                />
              </div>
              <div className="flex justify-start items-center mx-5 mt-5">
                <label
                  htmlFor=""
                  className="mx-3 text-xl my-3 text-md text-[#243c6bb8]"
                >
                  PhoneNumber
                </label>
              </div>
              <div className="flex justify-start items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-white mx-8 w-120 h-10 border border-[#2121214a]  shadow-md rounded-lg px-3  text-xl"
                />
              </div>
              <div className="flex justify-start items-center mx-5 mt-5">
                <label
                  htmlFor=""
                  className="mx-3 text-xl my-3 text-md text-[#243c6bb8]"
                >
                  Message
                </label>
              </div>
              <div className="flex justify-start items-center">
                <textarea name="" id="" className="bg-white mx-8 w-130 h-40 border border-[#2121214a]  shadow-md rounded-lg px-3  text-xl resize-none"></textarea>
              </div>
              <div className="flex">
                   <button type="submit" className="my-5 justify-center w-90 border border-none shadow-xl mx-auto px-3 py-3 rounded-lg text-2xl d--btn d--btn-info">Submit</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
