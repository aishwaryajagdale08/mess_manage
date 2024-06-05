import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { assests } from '../../assests/assests'
import './Carouselimage.css'

const Carouselimage = () => {
  return (
    <div className='Image_slider'>
      <Carousel>
      <Carousel.Item>
        <img style={{height:'90vh'}}
          className="d-block w-100"
          src={assests.slider1}
        />
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'90vh'}}
          className="d-block w-100"
          src={assests.slider2}
        />

      {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'90vh'}}
          className="d-block w-100"
          src={assests.slider3}
          alt="Third slide"
        />

      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carouselimage
