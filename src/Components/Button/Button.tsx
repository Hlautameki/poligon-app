// import React from "react";

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
  bgColor?: BGColors;
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
    const { label, bgColor } = props;
    const styles = {...defaultStyles, backgroundColor: bgColor};
    // <button {props.label} >Hello</button>
    return (
      <button style={ styles } >{label}</button>
    );
}

// export default Button;

export { Button, BGColors };