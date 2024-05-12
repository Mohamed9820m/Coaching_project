import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'https://www.instagram.com/coach_hany_oueslati/', 
      src:'/images/feed1.jpg', 
      alt:'Post', 
      date:'26 novembre 2022', 
      title:' I promise you and myself the future will be much better'
    },
    {
      url:'https://www.instagram.com/coach_hany_oueslati/', 
      src:'/images/feed2.jpg', 
      alt:'Post', 
      date:'26 novembre 2022',
      title:'@impactsportnutrition @ifbb_official'
    },
    {
      url:'https://www.instagram.com/coach_hany_oueslati/', 
      src:'/images/feed3.jpg', 
      alt:'Post', 
      date:'8 novembre 2021',
      title:'im honored to have a circle that was a big part of me being who i am today.'
    },
    {
      url:'https://www.instagram.com/coach_hany_oueslati/', 
      src:'/images/feed4.jpg', 
      alt:'Post', 
      date:'8 novembre 2021', 
      title:'King 🙏🔥'
    },
    {
      url:'https://www.instagram.com/coach_hany_oueslati/', 
      src:'/images/feed5.jpg', 
      alt:'Post', 
      date:'29 décembre 2023',
       title:'Dont forget to eat your fruit 🍓'
    },
    {
      url:'https://www.instagram.com/coach_hany_oueslati/', 
      src:'/images/feed6.jpg', 
      alt:'Post', 
      date:'27 décembre 2023',
       title:'Thanks God 🙏'
    },
    {
      url:'https://www.instagram.com/coach_hany_oueslati/', 
      src:'/images/feed8.jpg', 
      alt:'Post', 
      date:'9 novembre 2021',
       title:'Being here was not a stroke of luck'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}
