import React, {useState} from 'react'
import './booking.css'
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Booking = ({tour, avgRating}) => {

    const {price, reviews} = tour;
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userid:'01',
        userEmail:'israt@gmail.com',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    })

    const  handleChange = e => {
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    };

    const serviceFree = 10
    const totalAmout = Number(price) * Number(credentials.guestSize) + Number(serviceFree)

    //send data to the server
    const handleClick = e=>{
        e.preventDefault();
    navigate('/thank-you')

    }
  return (
   <div className="booking">
    <div className="bookin_top d-flex align-items-center justify-content-between">
        <h3>${price} <span>per person</span></h3>
        <span className='tour_rating d-flex align-items-center '>
          <i class="ri-star-s-fill"></i> {avgRating == 0 ? null : avgRating}
          ({reviews ?.length})
        </span>
    </div>
    {/* ============booking form ======== */}
    <div className="bookin_form">
        <h5>Information</h5>
        <Form className='bookin-info-form' onSubmit={handleClick}>
          <FormGroup>
            <input type="text" placeholder='Full Name' id='fullname' required onChange={handleChange}  />
          </FormGroup>
          <FormGroup>
            <input type="number" placeholder='Phone' id='phone' required onChange={handleChange}  />
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
         <input type="date" placeholder='' id='bookAt' required onChange={handleChange}  />
          <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange}  />
          </FormGroup>
        </Form>
    </div>
    {/* ============booking form ======== */}

    {/* ============booking bottom ======== */}
    <div className="bookin-bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0 '>
             <h5 className='d-flex align-items-center gap-1'>
                $ {price} <i className='ri-close-line'></i>1 person</h5>
             <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 '>
             <h5>Service Charge</h5>
             <span>${serviceFree}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
             <h5>Total</h5>
             <span>${totalAmout}</span>
            </ListGroupItem>
        </ListGroup>

        <Button className='btn primary_btn w-100 mt-4'onClick={handleClick}>
         Book now
        </Button>
    </div>
    {/* ============booking bottom ======== */}

   </div>
  )
}

export default Booking