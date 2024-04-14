import React, {useRef,useState} from 'react'
import '..//styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/AvgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'

const TourDetails = () => {
  const {id} = useParams();
  const reviewsRef = useRef('');
  const [tourRating, setTourRating]=useState(null)

//this is an static data 
  const tour =tourData.find(tour=> tour.id == id)

  //destructure properties from tour object
  const {photo,title,address,desc,price,reviews,city,distance,maxGroupSize} = tour;

  const {totalRating,avgRating} = calculateAvgRating(reviews);

  // format date
  const options = {day: "numeric", month: "long", year: "numeric"};

  //submit request to the server
  const submitHandler = e=>{
    e.preventDefault()
  

 
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8'>
          <div className="tour_content">
            <img src={photo} alt="" />

            <div className="tour_info">
              <h2>{title}</h2>

              <div className='d-flex align-items-center gap-5'>
              <span className='tour_rating d-flex align-items-center gap-1'>
                    <i class="ri-star-s-fill" style={{'color':"var(--secondary-color)"}}></i> {avgRating == 0 ? null : avgRating}
                    {totalRating == 0 ? (
                     'Not Rated' 
                     ): (
                     <span>({reviews?.length})</span>
                    )}
                </span>

              <span>
                <i className="ri-map-pin-user-fill"></i>{address}
              </span>
               </div>
               <div className="tour-extra-details">
                <span><i className="ri-map-pin-2-line"></i>{city}</span>
                <span><i className="ri-money-dollar-circle-line"></i>${price} per person</span>
                <span><i className="ri-group-line"></i>{maxGroupSize}people</span>
               </div>
               <h5>Description</h5>
               <p>{desc}</p>
          </div>
         
          {/* ============= tour reviews section start ============ */}
          <div className="tour_reviews mt-4">
            <h4>Reviews ({reviews ?. length}reviews)</h4>
            <Form onSubmit={submitHandler}>
              <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                <span onClick={()=> setTourRating(1)}>
                 1 <i className="ri-start-s-fill"></i>
                </span>
                <span onClick={()=> setTourRating(2)}>
                 2 <i className="ri-start-s-fill"></i>
                </span >
                <span onClick={()=> setTourRating(3)}>
                 3 <i className="ri-start-s-fill"></i>
                </span>
                <span onClick={()=> setTourRating(4)}>
                 4 <i className="ri-start-s-fill"></i>
                </span>
                <span onClick={()=> setTourRating(5)}>
                  5<i className="ri-start-s-fill"></i>
                </span>
              </div>
              <div className="review_input">
                <button className="btn primary-btn" type='submit'>Submit</button>
              </div>
            </Form>

            <ListGroup className='user_reviews'>
             {
              reviews ?.map(reviews=>(
                <div className="review_item">
                  <img src={avatar} alt="" />

                  <div className="w-100">
                    <div className='d-flex align-items-center justify-content-between'>
                     <div>
                      <h5>muhib</h5>
                      <p>
                        {new Date("06-05-2024").toLocaleDateString("en-US",options)}
                      </p>
                     </div>
                     <span className='d-flex align-items-center'>
                      <i className='ri-star-s-fill'></i>
                     </span>
                    </div>
                    <h6>Amazing Tours</h6>
                  </div>
                </div>
              ))
             }
            </ListGroup>
          </div>
           {/* ============= tour reviews section end ============ */}
           </div>
          </Col>
          <Col lg='4'>
          <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TourDetails