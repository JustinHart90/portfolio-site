import React from 'react';
import { CarouselImage as CarouselImageProps } from '../../../interfaces/shared';
import { getImageAlt } from '../lib';

export default function CarouselImage(props: CarouselImageProps) {
    return (
        <img
            className="d-block w-100"
            src={props.imageUrl}
            alt={getImageAlt(props.index)}
        />
    );
}