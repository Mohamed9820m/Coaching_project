import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: '/images/cut.jpg',
      testimonialText:
        'My athletic performance was stuck. Coach Heni created a personalized training plan that pushed me to my limits and helped me overcome mental hurdles. He also made sure my diet fueled my body for peak performance. I crushed my personal best at the recent competition, and Im more motivated than ever! Coach Heni understands the specific needs of athletes and helps them reach their full potential.',
      avatarName: 'Ghassen Allagui',
      avatarDesignation: 'Athlete',
      ratings: '4',
    },
    {
      testimonialThumb: '/images/cut2.jpg',
      testimonialText:
        'I love going out with friends, but I worried about sticking to my fitness goals. Coach Heni helped me find healthy alternatives when eating out and showed me exercises I could do anywhere. Now I can enjoy my social life without derailing my progress! Coach Heni makes healthy living fun and adaptable for any lifestyle.',
      avatarName: 'Ahon Monsery',
      avatarDesignation: 'worker',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/cut3.jpg',
      testimonialText:
        'I wanted to get in shape, but I didnt have a lot of time during the week. Coach Heni designed a workout plan that maximized my limited time on weekends. He also helped me adjust my meals to fuel my workouts for better results. I feel stronger and more energetic, and I actually enjoy my weekend workouts now! Coach Heni makes fitness convenient and effective.',
      avatarName: 'Jallebi Makrem',
      avatarDesignation: 'Mens Physique Athlete',
      ratings: '4.5',
    },
    {
      testimonialThumb: '/images/cut5.jpg',
      testimonialText:
        'Juggling education and a healthy lifestyle felt impossible. Coach Heni created a workout routine that fit perfectly into my busy schedule, and his meal plans were delicious and easy to follow. I finally feel energized and healthy, and I havent missed a workout yet! Coach Heni makes healthy living achievable for anyone.',
      avatarName: 'Nermine',
      avatarDesignation: 'Student',
      ratings: '3.5',
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
