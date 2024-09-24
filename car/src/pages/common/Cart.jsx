import React from 'react';
import { TbCreditCardPay } from "react-icons/tb";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import box_empty from '../../../public/img/box_empty.svg'

const Cart = ({active, fnc}) => {
  return (
    <div className={`${active ? 'flex flex-col' : 'hidden'} absolute right-0 top-0 h-full z-50 max-w-[18rem] md:max-w-[28rem] bg-violet-100 bg-opacity-95 w-full justify-between`}>
        <div className='flex flex-row justify-between w-full p-4 hover:cursor-pointer'>
            <div onClick={fnc}>
                <IoIosCloseCircleOutline size={24}/>
            </div>
            <div className='flex bg-gray-700 h-8 justify-center items-center px-8 rounded-full'>
                <p className='font-extrabold text-xl tracking-tighter text-white'>Prod</p>
                <p className='font-thin text-xl tracking-tighter text-yellow-500'>ucts</p>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <span className='font-thin text-xl border border-violet-500 rounded-full px-4 py-0.5 -tracking-wide'>Empty</span>
            <span><img src={box_empty} alt="" /></span>
        </div>

        <div className='flex flex-col px-4 w-full space-y-2 py-5 font-thin'>
            <a className='bg-violet-500 rounded-2xl px-2 py-1.5 items-center justify-center flex hover:bg-violet-700 space-x-2' href="#">
                <RiShoppingBasket2Line />
                <span>Keep shopping</span>
            </a>
            <a className='border-2 border-violet-500 rounded-2xl px-2 py-1 items-center justify-center flex hover:border-violet-700 space-x-2' href="#">
                <TbCreditCardPay />
                <span>Pay now</span>
            </a>
        </div>
    </div>
  )
}

export default Cart