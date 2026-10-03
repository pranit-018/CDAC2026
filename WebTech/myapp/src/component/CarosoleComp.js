import React from 'react';
import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle.min';
import imgPath from '../shared/constant/constantData';


const CarosoleComp = () => {
    return (
        <div>
            <h2> this is my carouselcomp</h2>
            <Carousel>
      <Carousel.Item interval={1000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src ={imgPath.A56} alt='Dog'style={{width:"80%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src ={imgPath.OnePlus13} alt='tiger' style={{width:"80%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src ={imgPath.S24} alt='Cat' style={{width:"80%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>
    )
}

export default CarosoleComp;