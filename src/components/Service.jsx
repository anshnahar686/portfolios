

export const Services = () => {
  
  return (
    <>
      <section className="mt-[100px]"  id="Services">
        <div className="bg-[#FBFBFB] my-2 min-h-screen py-4">
          <div className="text-center my-2 text-4xl  ">
            <h1 className="text-4xl" >
              Services
            </h1>
            <p className="mt-3 mb-[30px] text-2xl font-serif ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aut.
            </p>
          </div>
          <div className="flex justify-between flex-wrap  items-center my-4 mx-2 ">
            <div className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB] ms-10 px-2 my-5 !rounded-xl me-4 ">
              <div className="d--card-body">
                <div className="flex items-center justify-center">
                  <i class="ri-code-s-slash-line text-5xl"></i>
                </div>
                <h5 className="text-center text-xl font-medium my-3">
                  Website Design & Development
                </h5>
                <p className="text-justify  text-lg tracking-normal">
                  Website design and development is the process of creating
                  visually appealing, user-friendly, and functional websites.
                </p>
              </div>
            </div>
            <div className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB] mx-10 px-2 my-5 !rounded-xl">
              <div className="d--card-body">
                <div className="flex items-center justify-center">
                  <i class="ri-database-2-fill text-5xl"></i>
                </div>
                <h5 className="text-center text-xl font-medium my-3">
                  Backend & Database Features
                </h5>
                <p className="text-justify  text-lg tracking-normal">
                  Backend and database features form the backbone of any dynamic
                  web application. The backend handles server-side logic, API
                  integration.{" "}
                </p>
              </div>
            </div>
            <div className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB] me-4   px-2 my-5 ms-4 !rounded-xl">
              <div className="d--card-body">
                <div className="flex items-center justify-center">
                  <i class="ri-npmjs-line text-5xl"></i>
                </div>
                <h5 className="text-center text-xl font-medium my-3 -px-0">
                  API Development & Integration
                </h5>
                <p className="text-justify  text-lg tracking-normal">
                  API Development focuses on building interfaces that expose
                  specific functionalities or data from an application and
                </p>
              </div>
            </div>
            <div className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB] ms-10 px-2 my-5 me-4  !rounded-xl">
              <div className="d--card-body">
                <div className="flex items-center justify-center">
                  <i class="ri-search-line text-5xl"></i>
                </div>
                <h5 className="text-center text-xl font-medium my-3 -px-0">
                  Search Engine Optimization (SEO)
                </h5>
                <p className="text-justify  text-lg tracking-normal">
                  Search Engine Optimization (SEO) is the practice of improving
                  a website’s visibility in search engine results to attract
                  more organic traffic. It involves optimizing content,
                  keywords, meta tags,{" "}
                </p>
              </div>
            </div>
            <div className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB] mx-10 px-2 my-5 !rounded-xl  ">
              <div className="d--card-body">
                <div className="flex items-center justify-center ">
                  <i class="ri-headphone-line text-5xl "></i>
                </div>
                <h5 className="text-center text-2xl font-medium my-4 mb-9">
                  Technical Support
                </h5>
                <p className="text-justify  text-lg tracking-normal">
                  API development and integration enable seamless communication
                  between different software systems.Integration connects
                  external services—like payment gateways, social media.{" "}
                </p>
              </div>
            </div>
            <div className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB]  me-4 px-2 my-5 ms-4 !rounded-xl ">
              <div className="d--card-body">
                <div className="flex items-center justify-center">
                  <i class="ri-shield-fill text-5xl"></i>
                </div>
                <h5 className="text-center text-2xl font-medium my-4 mb-9">
                  Security Enhancements
                </h5>
                <p className="text-justify  text-lg tracking-normal">
                  Security enhancements are critical for protecting websites and
                  applications from threats like data breaches, malware, and
                  unauthorized access. They include implementing HTTPS,{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
