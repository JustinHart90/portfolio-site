import React from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const styleSpinner = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin: 5rem;
`;
 
export default function Spinner(props) { 
    return (
        <div className="sweet-loading" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <BeatLoader
                css={styleSpinner}
                size={50}
                color={"#74a0d4"}
                loading={props.loading}
            />
        </div>
    );
}