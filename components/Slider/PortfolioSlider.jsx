import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Shape Your Body',
      subtitle:'Coach Hany Oueslati',
      href:'/',
      src:'/images/t10.jpg'
    },
    {
      title:'Shape Your Body',
      subtitle:'Coach Hany Oueslati',
      href:'/',
      src:'/images/t9.jpg'
    },
    {
     title:'Shape Your Body',
      subtitle:'Coach Hany Oueslati',
      href:'/',
      src:'/images/t8.jpg'
    },
    {
     title:'Shape Your Body',
      subtitle:'Coach Hany Oueslati',
      href:'/',
      src:'/images/t7.jpg'
    },
    {
     title:'Shape Your Body',
      subtitle:'Coach Hany Oueslati',
      href:'/',
      src:'/images/t6.jpg'
    },
    {
     title:'Shape Your Body',
      subtitle:'Coach Hany Oueslati',
      href:'/',
      src:'/images/t5.jpg'
    },
    {
     title:'Shape Your Body',
      subtitle:'Coach Hany Oueslati',
      href:'/',
      src:'/images/t4.jpg'
    },
    {
     title:'Shape Your Body',
      subtitle:'Coach Hany Oueslati',
      href:'/',
      src:'/images/t3.jpg'
    },
    {
     title:'Shape Your Body',
      subtitle:'Coach Hany Oueslati',
      href:'/',
      src:'/images/t2.jpg'
    },
    {
     title:'Shape Your Body',
      subtitle:'Coach Hany Oueslati',
      href:'/',
      src:'/images/t1.jpg'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
