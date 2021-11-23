import React, {useState} from 'react'
import '../assets/css/Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'

export default function Slider() {

    const images = [img1, img2, img3, img4, img5, img6]

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        // ЗАМЕНИТЬ IMAGES НА DATASLICER
        if(slideIndex !== images.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === images.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(images.length)
        }
    }

    const moveDot = (index: number) => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {images.map((item, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        // src={process.env.REACT_APP_PUBLIC_URL + `/assets/images/img${index + 1}.jpg`}
                        src={item}
                        alt=''
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 6}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
