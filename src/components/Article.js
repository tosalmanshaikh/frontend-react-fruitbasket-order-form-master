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



