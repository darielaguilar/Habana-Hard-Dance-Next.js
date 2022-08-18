import React,{useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from 'next/image'


export default function SectionSlide()
{
    const [index,setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
   
    return(<div className=" flex-1 md:mx-10 mx-2 ">
        <Carousel className="border rounded-lg " activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="flex w-100 h-72 sm:h-80">
                <Image  className="flex  " layout="fill"   src='/dj-mixing.jpg' alt="First Slide"/>
                <Carousel.Caption>
                    <h3>Sueña</h3>
                    <p className="text-lg">Mientras escuchas nuestra musica</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="flex w-100 h-72 sm:h-80">
                <Image  className="flex  " layout="fill" src='/hitsTrance.png' alt="Second Slide"/>
                <Carousel.Caption>
                    
                    <p className="text-lg">Siente el uplifting y salta</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="flex w-100 h-72 sm:h-80">
                <Image className="flex  " layout="fill" src='/tranceLight.jpg'  alt="Third Slide"/>
                <Carousel.Caption>
                    <h3>Crea</h3>
                    <p className="text-gray-300 text-lg">Aprende con nosotros e ilumina al mundo con tu potencial</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>);
    
}