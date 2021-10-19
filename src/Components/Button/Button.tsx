// import React from "react";

import { MouseEventHandler } from "react";

// #95a5a6 concrete
// #e74c3c alizarin
// #f39c12 orange
// #2ecc71 emerald

enum BGColors  {
  concrete = '#95a5a6',
 alizarin = '#e74c3c',
 orange = '#f39c12',
 emerald = '#2ecc71'
}

// concrete -> colors['concrete']

type ButtonProps = {
  label: string;
  // bgColoer: 'concrete' | 'alizarin';
  bgColor?: BGColors.orange;
  onClick?: () => (void);
}

// function Button(props: ButtonProps) {
// function Button({ label }: ButtonProps) {
//   return (
//     // <button {props.label} >Hello</button>
//     <button { label } >Hello</button>
//   )
// }

const defaultStyles = {
  color: 'black',
  margin: 12,
  paddintBottom: 10, //CamelCase
  backgroundColor: BGColors.alizarin
}

function Button(props: ButtonProps) {
    const { label, bgColor, onClick } = props;
    const styles = {...defaultStyles};
    // <button {props.label} >Hello</button>
    return (
      <button style={ styles } onClick={onClick}>{label}</button>
    );
}

// export default Button;

export { Button, BGColors };