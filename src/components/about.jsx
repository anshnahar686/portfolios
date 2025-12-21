import first from "../assets/toolxox-com-resizedimage.jpg";
export const About = () => {
  return (
    <>
    <section>
       <div className=" my-2  mx-auto py-4  max-w-7xl w-full">
          <div className="text-center my-2 text-4xl ">
            <h1 className="text-4xl my-5">Who I Am</h1>
           
          </div>

       
        </div>
      <div className="bg-[#FBFBFB] my-2 min-h-full py-2">
        <div className="grid grid-cols-2 gap-0">
          <div className="my-auto   w-3/5 h-3/5 mx-2 ">
            <div className="avatar">
              <div className="w-3/4 h-3/5 mx-auto rounded-full py-2 ">
                <img src={first} className=" mx-2 rounded-full shadow-2xl" />
              </div>
            </div>
          </div>

          <div className="my-4 px-5">
            <p className="my-2 text-xl text-justify px-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              autem? Id, voluptates nulla. Rerum iste accusamus error quia,
              dicta molestias, sint perspiciatis eligendi pariatur maxime ea
              fuga, optio quibusdam nam similique repudiandae quasi asperiores
              dolorem cum blanditiis! Totam repellendus ipsam commodi amet sed!
              Temporibus fuga facilis, voluptate quaerat dignissimos dolorum
              nulla veritatis, odit quod distinctio, similique aliquam animi
              assumenda culpa!
            </p>
            <p className="my-2 text-xl text-justify px-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              autem? Id, voluptates nulla. Rerum iste accusamus error quia,
              dicta molestias, sint perspiciatis eligendi pariatur quod
              distinctio, similique aliquam animi assumenda culpa!
            </p>
            <button
              className=" my-4 d--btn w-[210px] h-[45px] mx-1 rounded-xl bg-[#8186E7] text-white text-md  lg:flex-row-reverse"
              style={{ boxShadow: "1px 2px 2px 2px rgba(0, 0, 0, 0.20)" }}
            >
              Download CV<i class="ri-file-download-line text-xl"></i>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4  my-5 ">
          <div className="mx-5  my-5 px-5 flex justify-center items-center flex-col ">
            <div
              className="d--radial-progress"
              style={
                {
                  "--d--value":100,
                  width: "120px",
                  height: "120px",
                  marginBlock: "30px",
                  color:'#23277b'
                } /* as React.CSSProperties */
              }
              aria-valuenow={100}
              role="progressbar"
            >
              <i class="ri-nodejs-fill text-5xl"></i>
            </div>
            <h1 className="text-3xl font-bold  text-[#23277b]">100%</h1>
            <p className="text-4xl font-medium my-2 text-[#8186E7] ">NodeJs</p>
          </div>
          <div className="px-5 mx-5  my-5 flex justify-center items-center flex-col">
            <div
              className="d--radial-progress"
              style={
                {
                  "--d--value": 85,
                  width: "120px",
                  height: "120px",
                  marginBlock: "30px",
                  color:'#23277b',
                  
                } /* as React.CSSProperties */
              }
              aria-valuenow={20}
              role="progressbar"
            >
              <i class="ri-reactjs-line text-5xl"></i>
            </div>
                 <h1 className="text-3xl font-bold  text-[#23277b] ">85%</h1>
            <p className="text-4xl font-medium my-2 text-[#8186E7]">ReatJs</p>
          </div>
          <div className=" px-5 mx-5  my-5 flex justify-center items-center flex-col">
            <div
              className="d--radial-progress"
              style={
                {
                  "--d--value": 70,
                  width: "120px",
                  height: "120px",
                  marginBlock: "30px",
                  color: "#23277b",
                } /* as React.CSSProperties */
              }
              aria-valuenow={20}
              role="progressbar"
            >
              <i class="ri-bootstrap-fill text-5xl"></i>
            </div>
                <h1 className="text-3xl font-bold  text-[#23277b]">70%</h1>
            <p className="text-4xl font-medium my-2 text-[#8186E7]">Bootstrap</p>
          </div>
          <div className=" mx-5 px-5 my-5 flex justify-center items-center flex-col">
            <div
              className="d--radial-progress"
              style={
                {
                  "--d--value": 60,
                  width: "120px",
                  height: "120px",
                  marginBlock: "30px",
                  color: "#23277b",
                } /* as React.CSSProperties */
              }
              aria-valuenow={20}
              role="progressbar"
            >
              <i class="ri-github-fill text-4xl"></i>
            </div>
                <h1 className="text-3xl font-bold  text-[#23277b] ">60%</h1>
            <p className="text-4xl font-medium my-2 text-[#8186E7]">GitHub</p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
