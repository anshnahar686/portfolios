import { useState } from "react";

export const HeroSection = () => {
    //  const [counter, setCounter] = useState(29);
    const counter = 23
    return (
        <>
            <div className="-my-[100px] bg-[#FBFBFB]" id="herosection">
                <div className="d--hero bg-base-200 min-h-screen ">
                    <div className="d--hero-content flex-col lg:flex-row-reverse my-0">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div>
                            <h3 className="text-3xl my-3 mx-3">Hi I am ,</h3>
                            <h1 className="text-6xl font-regular font-sans mx-2 my-3">Yash Kumar</h1>
                            <h1 className="text-7xl font-sans mx-2 my-3 ">Web  Developer</h1>
                            <p className="py-4 pe-[200px] ps-4 font-regular text-[18px] my-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus adipisci est inventore! Praesentium recusandae eius quisquam exercitationem expedita quis nostrum quo culpa rerum mollitia, voluptate officiis obcaecati vitae omnis perspiciatis? Magni reprehenderit placeat eos delectus dolorem maxime, possimus consectetur.
                            </p>
                            <button className="d--btn w-[210px] h-[45px] mx-4 rounded-xl bg-[#8186E7] text-white text-lg  lg:flex-row-reverse" style={{ boxShadow: '1px 2px 2px 2px rgba(0, 0, 0, 0.20)' }}>Get Started</button>
                            <button className="d--btn w-[210px] h-[45px] mx-4 rounded-xl bg-[#8186E7] text-white text-lg  lg:flex-row-reverse" style={{ boxShadow: '1px 2px 2px 2px rgba(0, 0, 0, 0.20)' }}>Get Started</button>
                        </div>

                    </div>

                </div>
                <div className="flex bg-base-200  -my-[70px] mx-3 items-center w-[65%] justify-between px-5">
                    <div className="my-2 mx-3 ">
                        <h3 className="text-center text-5xl font-bold ms-3 ">
                            <span className="d--countdown font-mono text-6xl ">
                                <span style={{ "--d--value": counter, "d--digits": 2 }} aria-live="polite" aria-label={String(counter)}>{counter}</span>
                            </span>
                        </h3>
                        <label className="text-center text-[#A1A1A1] font-light text-md">Work Experience</label>
                    </div>
                    <div className="justify-between">
                        <h3 className="text-center text-5xl font-bold ms-3">12+</h3>
                        <label className="text-center text-[#A1A1A1] font-light text-md ms-2" >Total Clients</label>
                    </div>
                    <div className="justify-items-center">
                        <h3 className="text-center text-5xl font-bold ms-3">12+</h3>
                        <label className="text-center text-[#A1A1A1] font-light text-md ms-2" >Project Done</label>
                    </div>
                </div>
            </div>
        </>
    )
}