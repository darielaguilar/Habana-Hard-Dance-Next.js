import React from 'react'

export default function ContactItem(props)
{
    return (
        <>
       <div className="flex-auto flex-col order-9 place-content-start mx-3">
        <a href="#" className="flex mt-3 mx-2 sm:text-sm text-white">Home</a>
        <p className="flex   mt-3 mx-2 sm:text-sm text-white">About Us</p>
        </div>
        
        <div className='flex items-end md:mx-3'>
        <a  href="#" className=" fa  fa-facebook order-3 my-3 "/>
        <a  href="#" className=" fa fa-twitter my-3 order-2"/>   
        <a  href="#" className=" fa fa-instagram my-3 order-1"/>
        <a  href="#" className=" fa fa-linkedin my-3 order-1"/>
        </div>

        <div className="flex-auto place-content-center">
        <p className=" order-5 mt-3 mx-3 sm:text-sm text-white">darielaguilar2012@gmail.com</p>
        <p className=" order-5 mt-3 mx-3 sm:text-sm text-white">Copyright 2022</p>
        
        </div>
        
        
        </>
    );
}