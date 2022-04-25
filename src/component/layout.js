import { Link } from "react-router-dom";


function Header(){
    return(
        <div className='w-full h-20 flex items-center justify-center mb-4'>
        <div className='w-11/12 h-full flex items-center justify-between'>
          <Link to="" className='h-full flex items-center text-stone-100 text-3xl font-bold whitespace-nowrap'>
            HANSEI - CTF
          </Link>
          <div className='w-3/5 h-full flex items-center justify-center'> 
            <div className='w-7/12 h-full flex items-center justify-evenly whitespace-nowrap font-bold text-stone-100 '>
              <Link className='mx-4' to="">ABOUT</Link>
              <Link className='mx-4' to="">WARGAME</Link>
              <Link className='mx-4' to="">NOTICE</Link>
              <Link className='mx-4' to="/Todo">ToDo</Link>
            </div>
          </div>
          <div className='w-[196.44px] h-full flex items-center justify-center'>
            <Link className='p-1.5 px-5 font-bold text-stone-100 border-solid border-2 border-[#1A74FB] rounded-full' to="/login">LOGIN</Link>
          </div>
        </div>
      </div>
    )

};

export default Header;