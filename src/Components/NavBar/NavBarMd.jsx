import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import {GiHamburgerMenu} from "react-icons/gi"
import {BsSearch} from "react-icons/bs"
import {RiVideoAddLine} from "react-icons/ri"
import {BiMicrophone} from "react-icons/bi"
import {BsBell} from "react-icons/bs"
export default function NavBarMd() {
    return (
        <div className="nav flex p-2 items-center gap-6 bg-[#212121] opacity-95 w-[100%] fixed justify-between ">
            <div className="first flex items-center gap-2 pl-3 cursor-pointer">
            <GiHamburgerMenu   color={"white"} style={{height:"1.6rem", width:"1.6rem"}}></GiHamburgerMenu>
            <a className="flex  w-40 items-center">
                <img src={logo} alt="YouTube logo" className=" w-1/3 h-[100%]"/>
                <h1 className="w-2/3 flex items-center text-xl font-bold text-white">YouTube</h1>
            </a>
            </div>
           
            <Search></Search>
            <Third></Third>

            
        </div>
    )
}
function Search(){
    return(
        <div className="wrapper flex w-1/3 justify-evenly">
        <div className="search flex items-center w-5/6 bg-zinc-900 border-1 rounded-3xl border-zinc-900 ">
            <input type="text" className=" border-l-[50%] w-5/6 p-2 bg-zinc-900 focus:outline-none text-white rounded-l-3xl text-lg pl-3" placeholder="Search"/>
            <button className="h-[100%] w-1/6 pl-2  p-3  flex justify-end bg-zinc-900 rounded-r-3xl items-center">
                <BsSearch color="white" />
            </button>
        </div>
        <button className=" p-3 flex justify-end items-center r  bg-zinc-900 border-1 border-zinc-900 rounded-3xl">
            <BiMicrophone color="white" style={{height:"1.5rem", width:"1.5rem"}}></BiMicrophone>
        </button>
        </div>
    )
}
function Third() {
    return (
        <div className="third flex p-3 gap-6 pr-3 items-center">
            <RiVideoAddLine color="white" style={{height:"1.5rem", width:"1.5rem"}} className=" cursor-pointer"></RiVideoAddLine>
            <BsBell color="white" style={{height:"1.5rem", width:"1.5rem"}} className=" cursor-pointer"></BsBell>
            <div className="portfilo  flex ">
            <img id="img" draggable="false" className="style-scope yt-img-shadow border-1 border-zinc-900 rounded-3xl  " alt="Avatar image" height="32" width="32" src="https://yt3.ggpht.com/ytc/APkrFKYxSYYUQ297tiQco0pHPumGCmtunhqRQ-Fiq-hI2_dbfizrqRxlzwT2JexBnaO7=s88-c-k-c0x00ffffff-no-rj"/> 
            </div>

        </div>
    )
}