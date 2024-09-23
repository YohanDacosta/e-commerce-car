import { FaBarsStaggered } from "react-icons/fa6";

const NavBar = ({fnc}) => {

  return (
    <header className='flex bg-violet-500 max-h-[4rem] h-full shadow-2xl items-center px-8 justify-between'>
      <div className='py-4 px-6 font-thin tracking-tighter hidden md:block hover:cursor-pointer hover:text-xl transition-all duration-500 transform ease-in-out'>
        <span className='text-white'>Cars</span>
        <span className='text-yellow-500'>Market</span>
      </div>

      <div className='flex text-3xl font-semibold tracking-tighter md:hidden hover:text-4xl hover:cursor-pointer'>
        <span className='text-white -skew-x-6'>C</span>
        <span className='text-yellow-500 skew-x-6'>M</span>
      </div>

      <nav className='hidden md:flex space-x-4 font-thin text-white'>
        <a className='transition-all hover:text-yellow-500' href="">Home</a>
        <a className='transition-all hover:text-yellow-500' href="">Cars</a>
        <a className='transition-all hover:text-yellow-500' href="">About us</a>
        <a className='transition-all hover:text-yellow-500' href="">Contact us</a>
        <p>
          <img src="" alt="" />
          <span className='border-2 rounded-lg px-3 py-1.5 tracking-tighter hover:border-yellow-500 hover:cursor-pointer'>+78 235 89 99</span>
        </p>
      </nav>

      <nav className='flex md:hidden border-2 rounded-full p-1.5 hover:border-yellow-500' onClick={fnc}>
        <a href="#"><FaBarsStaggered color='white' /></a>
      </nav>
    </header>
  )
}

export default NavBar