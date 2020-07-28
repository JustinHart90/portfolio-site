import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss';

export default function ImageCarousel(props) {
    const [index, setIndex] = useState(0);
    const [activeName, setActive] = useState(props.data.title);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setActive(props.data.title);
    };

    const getImageAlt = (index) => {
      const numbersText = ['First', 'Second', 'Third'];
      return `${numbersText[index]} Slide`;
    }
    
    // every time component renders
    useEffect(() => {
      // if the title changes, always reset to show the first image
      if (props.data.title !== activeName) {
        setIndex(0);
      }
    }, [props.data.title, activeName]);
  
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