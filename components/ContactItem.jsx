import React from 'react'

export default function ContactItem(props)
{
    return (
        <>
       <div className="flex-auto sm:flex flex-col order-9 place-content-start mx-1 sm:mx-3">
        <a href="#" className="text-sm flex mt-3 mx-2 sm:text-md text-white">Home</a>
        <p className="flex   mt-5 mx-2 sm:text-sm text-white">About Us</p>
        </div>
        
        <div className='flex sm:flex items-end md:mx-3'>
        <a  href="#" className="sm:transition ease-in delay-150 duration-300 hover:scale-150 hover:-translate-y-1 fa  fa-facebook order-3 my-3 "/>
        <a  href="#" className="sm:transition ease-in delay-150 duration-300 hover:scale-150 hover:-translate-y-1 fa fa-twitter my-3 order-2"/>   
        <a  href="#" className="sm:transition ease-in delay-150 duration-300 hover:scale-150 hover:-translate-y-1 fa fa-instagram my-3 order-1"/>
        
        </div>

        <div className="flex-col  sm:flex-auto  sm:mx-3 ">
        <p className=" order-5 mt-3 mx-3 text-sm sm:text-md text-white">darielaguilar2012@gmail.com</p>
        <p className=" order-5 mt-5 mx-3 text-sm sm:text-md text-white">Copyright 2022 &copy; </p>
        
        </div>
        
        
        </>
    );
}