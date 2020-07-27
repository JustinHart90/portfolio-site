import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss';

export default function ImageCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const getImageAlt = (index) => {
      const numbersText = ['First', 'Second', 'Third'];
      return `${numbersText[index]} Slide`;
    }
  
    return (
      <Carousel key={index} activeIndex={index} onSelect={handleSelect} interval={null}>
        {props.data.images.map(imageUrl => (
          <Carousel.Item key={imageUrl}>
            <img
              className="d-block w-100"
              src={imageUrl}
              alt={getImageAlt(index)}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
}