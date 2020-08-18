import React from 'react';

// function Greet() {
//     return <h1>Hello Tinashe</h1>
// }

const Greet = (props) => {
return (
<div>
<h1>Hello Tintin {props.name}</h1>
{props.children}
</div>
)
}
export default Greet;