import React,{useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from 'next/image'
import firstImage from '../public/dj-mixing.jpg';
import secondImage from '../public/hitsTrance.png'
import thirdImage from '../public/tranceLight.jpg'

export default function SectionSlide()
{
    const [index,setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
   
    return(<div className=" flex-1 md:mx-10 sm:mx-5 ">
        <Carousel className="border rounded-lg" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img  className="flex  w-100 h-96"  src='/dj-mixing.jpg' alt="First Slide"/>
                <Carousel.Caption>
                    <h3>Primer slide</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  className="flex  w-100 h-96" layout="fill" src='/hitsTrance.png' alt="Second Slide"/>
                <Carousel.Caption>
                    <h3>Segundo slide</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="flex  w-100 h-96" layout="fill" src='/tranceLight.jpg'  alt="Third Slide"/>
                <Carousel.Caption>
                    <h3>Tercer slide</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>);
    
}