// import React from "react";

// #95a5a6 concrete
// #e74c3c alizarin
// #f39c12 orange
// #2ecc71 emerald

type ButtonProps = {
  label: string;
  // bgColoer: string;
}

// function Button(props: ButtonProps) {
// function Button({ label }: ButtonProps) {
//   return (
//     // <button {props.label} >Hello</button>
//     <button { label } >Hello</button>
//   )
// }

const styles = {
  color: 'black',
  margin: 12,
  paddintBottom: 10 //CamelCase
}

function Button(props: ButtonProps) {
    const { label } = props;
    // <button {props.label} >Hello</button>
    return (
      <button style={ styles } >{label}</button>
    );
}

export default Button;

// export { Button };