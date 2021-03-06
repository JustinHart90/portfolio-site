import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselData } from '../../../interfaces/shared';
import CarouselImage from './CarouselImage';
import '../../../styles/_section.scss';
import './Carousel.scss';

export default function ImageCarousel(props: CarouselData) {
  const [index, setIndex] = useState(0);
  const [activeName] = useState(props.data.title);
  
  useEffect(() : void => {
    // if the title changes, always reset to show the first image
    if (props.data.title !== activeName) {
      setIndex(0);
    }
  }, [props.data.title, activeName]);

  return (
    <Carousel 
      key={index}
      activeIndex={index}
      onSelect={setIndex}
      interval={null}
    >
      {props.data.images.map((imageUrl: string) => (
        <Carousel.Item key={imageUrl}>
          <CarouselImage 
            imageUrl={imageUrl}
            index={index}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}