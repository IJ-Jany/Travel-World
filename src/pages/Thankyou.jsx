import React from 'react'
import { Container , Row, Col, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thankyou.css'
import NewsLetter from '../shared/NewsLetter'

const Thankyou = () => {
  return (
    <>
   <section>
    <Container>
        <Row>
            <Col lg='12' className='pt-5 text-center'>
            <div className="thank-you">
                <span><i class="ri-checkbox-circle-line"></i></span>
                <h1 className='mb-3 fw-semibold'>Thanks You</h1>
                <h3 className='mb-4'>Your tour is booked</h3>

                <Button className='btn primary_btn w-25'><Link to='/home' >back to home</Link></Button>
            </div>
            </Col>
        </Row>
    </Container>
   </section>
   <NewsLetter/>
   </>
  )
}

export default Thankyou