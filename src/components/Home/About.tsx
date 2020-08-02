import React from 'react';
import { Col, Image } from 'react-bootstrap';
import data from '../../data/about.json';

export default function About() {
  return (
    <Col id="about-container" xs="11" sm="10" md="8" lg="6" xl="4">
      <h2>{data.header.title}</h2>
      <div className="container">
        <Image roundedCircle id="me" src={data.header.imgSrc} alt="about" />
      </div>
      <p>{data.header.description}</p>
      
      
      <h2>{data.skills.title}</h2>
      <p>{data.skills.description}</p>
      
      <div className="tech-stack">
        {data.techNameRows.map((row: string) => (
          <p key={row}>{row}</p>
        ))}
      </div>

      {data.techImageRows.map((imageSrcArray: Array<string>, index: number) => (
        <div className="img-container" key={index}>
          {imageSrcArray.map((imageSrc: string) => (
            <Image key={imageSrc} src={imageSrc} alt="tech-image" />
          ))}
        </div>
      ))}
    </Col>
  );
}
