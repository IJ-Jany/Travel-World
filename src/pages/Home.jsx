import React from 'react'
import '../styles/home.css'

import { Container,Row,Col } from 'reactstrap'
import heroimg from '../assets/images/hero-img01.jpg'
import heroimg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import experienceImg from '../assets/images/experience.png'

import Searchbar from '../shared/Searchbar'
import ServiceList from '../services/ServiceList'
import MasonnyImagesgallery from '../components/Image-gallery/MasonnyImagesgallery'
import Testimonal from '../components/Testimonial/Testimonal'
import NewsLetter from '../shared/NewsLetter'
const Home = () => {
  return (
   <>
   {/* ========== hero section start ========= */}
   <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero_content">
            <div className="hero_subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know before You go'}/>
            <img src={worldImg } alt="" />
            </div>
            <h1>Travelling Opens the door to creating
              <span className='highlight'>Memories</span> </h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque exercitationem earum, possimus nesciunt ipsa porro adipisci beatae vitae, tempora quasi unde deserunt deleniti, id rem ab quam eveniet quaerat quisquam.</p>
          </div>
        </Col>
        <Col lg='2'>
        <div className='hero_img-box '>
          <img src={heroimg} alt="" />
        </div>
        </Col>
        <Col lg='2'>
        <div className='hero_img-box mt-4'>
          <img src={heroVideo} alt="" />
        </div>
        </Col>
        <Col lg='2'>
        <div className='hero_img-box '>
          <img src={heroimg02} alt="" />
        </div>
        </Col>

        <Searchbar/>
      </Row>
    </Container>
   </section>
    {/* ========== hero section end ========= */}
    <section>
      <Container>
        <Row>
          <Col lg="3">
          <h5 className='services_subtitle'>What we serve</h5>
          <h2 className='services_title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

     {/* ========== feature  section start ========= */}
    
     {/* ========== feature  section end ========= */}

     {/* ========== experience  section start ========= */}
     <section>
      <Row>
        <Col lg='6'>
        <div className="experience_content">
          <Subtitle subtitle={'Experience'}/>

          <h2>With our all experience<br/>We will serve You</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="counter_wrapper d-flex align-items-center gap-5 ">
          <div className="counter_box">
            <span>12k+</span>
            <h6>Successful Trip</h6>
          </div>
          <div className="counter_box">
            <span>2k+</span>
            <h6>Regular Clients</h6>
          </div>
          <div className="counter_box">
            <span>15</span>
            <h6>Years experience</h6>
          </div>
        </div>
        </Col>
        <Col lg='6'>
        <div className="experience_img">
          <img src={experienceImg} alt="" />
        </div>
        </Col>
      </Row>
     </section>
      {/* ========== experience  section end ========= */}

       {/* ==========  gallery part start   ========= */}
       <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className='gallery_title'>
              Visit our customers tour gallery
            </h2>
            </Col>
            <Col lg='12'>
              <MasonnyImagesgallery/>
            </Col>
          </Row>
        </Container>
       </section>
       {/* ========== gallery part end ========= */}


      {/* ==========  testimonial part start   ========= */}
      <Container>
      <Row>
        <Col  lg='12'>
        <Subtitle subtitle={'Fans Love'}/>
        <h2 className='testomonial_title'>What our fans say about us</h2>
        </Col>
        <Col lg='12'>
        <Testimonal/>
        </Col>
      </Row>
      </Container>
       {/* ========== testimonial part end ========= */}
     <NewsLetter/>
   </>
  )
}

export default Home