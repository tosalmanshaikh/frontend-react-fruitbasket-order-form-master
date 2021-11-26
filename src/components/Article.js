function Article (props) {


    return (
    <>
        <h1>{props.fruit} {props.icon}</h1>
        <button
            type={props.type}
            name=" increment "
            onClick={() => props.setCounter(props.counter + 1) }
        >
         +
        </button>
        <p> aantal: {props.counter} </p>

        <button
        type={props.type}
        name=" decrement "
        onClick={() => props.setCounter(props.counter - 1) }
        disabled={props.disabled}
         >
        -
         </button>



    </>

);

}

export default Article;




//a
// import React from 'react';
//
//
// function Article (props) {
//     console.log(props)
//
//     return (
//         <article className="number">
//             <h2>
//                 <p>{props.emoji}</p>
//                 {props.text}
//             </h2>
//             <button
//                 type={props.type}
//                 name='Aftellen'
//                 onClick={() => props.setFruitQty(props.fruitQty-1)}
//                 disabled={props.disabled}
//             >-
//             </button>
//             <p>{props.fruitQty}</p>
//
//             <button
//                 type={props.type}
//                 name='Optellen'
//                 onClick={() => props.setFruitQty(props.fruitQty+1)}
//             >+
//             </button>
//         </article>
//     )
// }
//
// export default Article;

