import Head from 'next/head';
import Card from '../components/Card';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LogoList from '../components/LogoList';
import MovingText from '../components/MovingText';
import SectionHeading from '../components/SectionHeading';
import PortfolioSlider from '../components/Slider/PortfolioSlider';
import PostSlider from '../components/Slider/PostSlider';
import TeamSlider from '../components/Slider/TeamSlider';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import TimelineSlider from '../components/Slider/TimelineSlider';
import Spacing from '../components/Spacing';
import VideoModal from '../components/VideoModal';
import PricingTableList from '../components/PricingTable/PricingTableList';
import Link from 'next/link';


export default function Home() {
  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Instagram',
      links: 'https://www.instagram.com/coach_hany_oueslati/?hl=fr', // Link to Instagram homepage
    },
    {
      name: 'Hjar Team',
      links: 'https://www.instagram.com/hjar_team/?hl=fr', // Corrected link to Instagram profile
    },
  ];
  

  // FunFact Data
  const funfaceData = [
    {
      title: 'Global Happy Clients',
      factNumber: '40K',
    },
    {
      title: 'Project Completed',
      factNumber: '50K',
    },
    {
      title: 'Team Members',
      factNumber: '245',
    },
    {
      title: 'Digital products',
      factNumber: '550',
    },
  ];

  return (
    <>
      <Head>
        <title>Home - Creative Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero
          title="Get the program <br/> that fits <br/> YOUR life"
          subtitle="Busy life ? No problem ! Get personalized workouts that fit your schedule and goals. We make fitness fun and effective, Let's get you on the path to a healthier, happier you ."
          btnText="Get personalized workouts"
          btnLink="/contact"
          scrollDownId="#service"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/hey.jpg"
        />
        {/* End Hero Section */}

        {/* Start About Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row align-items-center cs-column_reverse_lg">
            <Div className="col-lg-5">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/test2.png"
                  alt="About"
                  className="cs-w100 cs-radius_5"
                />
              </Div>
            </Div>
            <Div className="col-lg-6 offset-lg-1">
              <SectionHeading
                title="Certified trainer (ISSA) here ! <br/>I combine my classic physique with nutrition knowledge to create personalized workout & diet plans"
                subtitle="About Me"
                btnText="Learn More"
                btnLink="/about"
              />
              <Spacing lg="0" md="40" />
            </Div>
          </Div>
        </Div>
        {/* End About Section */}

        {/* Start Service Section */}
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services I can help you with"
                  subtitle="What Can I Do"
                  btnText="See All Services"
                  btnLink="/service"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Goal Setting & Tracking"
                      link="/service/service-details"
                      src="/images/44.svg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Personalized Workout Plans"
                      link="/service/service-details"
                      src="/images/22.svg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Nutrition Guidance"
                      link="/service/service-details"
                      src="/images/33.svg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Online Coaching"
                      link="/service/service-details"
                      src="/images/55.svg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Service Section */}

        {/* Start Portfolio Section */}
        <Spacing lg="150" md="50" />
        <Div>
          <Div className="container">
            <SectionHeading
              title="ARE YOU READY FOR YOUR TRANSFORMATION ?"
              subtitle="Latest Transformation"
              variant="cs-style1 text-center"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider />
        </Div>
        {/* End Portfolio Section */}

        <Spacing lg="140" md="70" />
        <Div className="container">
          <SectionHeading
            title="Providing best <br/>pricing for client"
            subtitle="Pricing & Packaging"
          />
          <Spacing lg="85" md="40" />
          <PricingTableList />
        </Div>
        <Spacing lg="125" md="55" />

        {/* Start Video Block Section */}
        {/* <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Our agile process is ability to adapt and respond to change. Agile
            organizations view change as an opportunity, not a threat.
          </h2>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
            bgUrl="/images/video_bg.jpeg"
          />
        </Div> */}
        {/* End Video Block Section */}

        {/* Start Team Section */}
        {/* <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        <Spacing lg="150" md="80" /> */}
        {/* End Team Section */}

        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}

        {/* Start Blog Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Explore recent publication"
                  subtitle="My Blog"
                  btnText="View More Blog"
                  btnLink=""
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Blog Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        <MovingText text="Bridge the gap between where you are and where you want to be.  We'll guide you every step of the way." />
        <Spacing lg="105" md="70" />
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        {/* <Div className="container">
          <LogoList />
        </Div>
        <Spacing lg="150" md="80" /> */}
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/test.jpg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
