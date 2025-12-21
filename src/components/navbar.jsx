import { Link } from "react-router"

export const Navbar=()=>{
    return(
        <>
           <div className="grid grid-cols-2  gap-4 bg-[#474646] sticky top-0 z-[2000] rounded-sm">
                <div className="my-4 mx-4 ">
                        <h4 className="text-3xl mx-5 font-light text-white">Logo</h4>
                </div>
                <div>
                    <ul className="m-0 flex  items-center">
                        <li className="my-4 mx-4 py-2 px-2 text-[#F0E8E8] font-normal text-xl"><a href="#herosection">Home</a></li>
                        <li className="my-4 mx-4 py-2 px-2 text-[#F0E8E8] font-normal text-xl"><a href="#projects">About</a></li>
                        <li className="my-4 mx-4 py-2 px-2 text-[#F0E8E8] font-normal text-xl"><Link>Services</Link></li>
                        <li className="my-4 mx-4 py-2 px-2 text-[#F0E8E8] font-normal text-xl"><Link>Features</Link></li>
                        <li className="my-4 mx-4 py-2 px-2 text-[#F0E8E8] font-normal text-xl"><Link>Project</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}