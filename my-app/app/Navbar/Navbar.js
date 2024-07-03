
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";



export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
   
    <div className="navbar-start">
      <a className=" text-2xl font-bold mr-4">Medium</a>

{/* 
      <label className="input flex items-center bg-slate-100">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
  <div>
  <input type="text" className="grow ml-2 h-2" placeholder="Search" />
  </div>
</label> */}
<div className='bg-slate-50 flex items-center'><CiSearch className='mr-4' />
<input type ="text" className=' bg-slate-100' placeholder='Search'/></div>


    </div >
    <div className="navbar-end text-xs">
      <div className="flex flex-row ">
      <Image
      src="/image/edit.png.png"
      alt="Description of my image"
      width={20} // Specify the width of the image
      height={30} // Specify the height of the image
    />
      <button className="rounded-full text-[-50px]  font-normal text-slate-600 ml-4">
        Write
        </button>
      </div>
      <button className="h-[30px] px-4 rounded-full bg-green-500 text-[-50px] font-normal text-slate-50 ml-4 ">Sign up</button>
      <button className=" rounded-full text-[-50px] font-normal text-slate-600 ml-4">Sign in</button>
      <Image
      src="/image/user.png.png"
      alt="Description of my image"
      width={20} // Specify the width of the image
      height={30} // Specify the height of the image
    />
    </div>
  </div>
  
  );
}