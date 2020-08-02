import React from 'react';
import { getImageAlt } from '../lib';

interface CarouselImageProps {
    imageUrl: string,
    index: number
}
export default function CarouselImage(props: CarouselImageProps) {
    return (
        <img
            className="d-block w-100"
            src={props.imageUrl}
            alt={getImageAlt(props.index)}
        />
    );
}