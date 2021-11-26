import React, { useState } from 'react';
import './App.css';
import './components/Article';
import Article from "./components/Article";
import {useForm} from "react-hook-form";
import logo from './assets/screenshot-logo.png';
import InputField from "./components/InputField";
// import {set} from "react-hook-form";

function App() {
    //fruit counter
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    const[clicked, toggleClicked] = React.useState(false);

    const {register} = useForm();

    // const { handleSubmit, formState: { errors }, register, watch } = useForm();
    // const [formReferrer, setFormReferrer] = useState('anders');

    //contact formula
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [postcode, setPostcode] = useState("");
    const [bezorgFrequentie, setBezorgFrequentie] = useState("hoe-vaak");
    const [deliveryTime, setDeliveryTime] = useState(false);
    const [textArea, setTextArea] = useState("");
    const [terms, setTerms] = useState(false);

//reset button
function resetFunction(){
    setStrawberryCounter(0)
    setBananaCounter(0)
    setAppleCounter(0)
    setKiwiCounter(0)
}


//function to prevent that the user is able to click on negative numbers for age, NOTE:e.preventDefault - helps with the refreshing of the page
function changeAge(e){
    e.preventDefault()
    if(e.target.value >=0){
        setAge(e.target.value)
    }
}

    function handleClick(e) {
        e.preventDefault()
        toggleClicked(!clicked)

        // console.log(`De knop is aangeklikt.`)
        // console.log(` Voornaam:  ${firstName}`)

        console.log(`
        Voornaam: ${firstName}
        Achternaam: ${lastName}
        Leeftijd: ${age}
        Postcode: ${postcode}
        Delivery Frequency: ${bezorgFrequentie}
        Delivery Time: ${deliveryTime}
        Message: ${textArea}
        Checkbox: ${terms}
        
        `)

        console.log(`Fruitmand bestelling -> aardbeien: ${strawberryCounter}, bananen: ${bananaCounter}, apples: ${appleCounter}, kiwi: ${kiwiCounter}`)

    }


        return (
            <>
                <fieldset id="header">

                    <img src={logo} alt="logo-van-het-bedrijf"/>

                </fieldset>

                <fieldset>

                    <Article
                    fruit="Aardbeien"
                    icon="🍓"
                    type="button"
                    counter={strawberryCounter}
                    setCounter={setStrawberryCounter}
                    disabled={strawberryCounter === 0}
                    />


                    <Article
                        fruit="Banana"
                        icon="🍌"
                        type="button"
                        counter={bananaCounter}
                        setCounter={setBananaCounter}
                        disabled={bananaCounter === 0}
                    />


                    <Article
                        fruit="Apple"
                        icon=" 🍏"
                        type="button"
                        counter={appleCounter}
                        setCounter={setAppleCounter}
                        disabled={appleCounter === 0}
                    />


                    <Article
                        fruit="Kiwi"
                        icon=" 🥝 "
                        type="button"
                        counter={kiwiCounter}
                        setCounter={setKiwiCounter}
                        disabled={kiwiCounter === 0}
                    />


                </fieldset>

                <button type="button" id="reset-button" onClick={() => resetFunction()}>Reset</button>


                <form onSubmit={handleClick}>

                    <InputField
                        type="text"
                        id="first-name"
                        name="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <InputField
                        type="text"
                        id="last-name"
                        name="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <InputField
                        type="number"
                        name="age"
                        value={age}
                        onChange={changeAge}
                    />

                    <InputField
                        type="text"
                        name="postcode"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                    />


                    <label htmlFor="referrer" className="referrer">
                        Bezorgfrequentie
                        <select
                            name="hoe-vaak"
                            id="referrer"
                            value={bezorgFrequentie}
                            onChange={(e) => setBezorgFrequentie(e.target.value)}>

                            <option value="elke-dag">iedere dag</option>
                            <option value="elke-week">iedere week</option>
                            <option value="elke-maand">iedere maand</option>
                        </select>
                    </label>


                        <input
                            type="radio"
                            id="radio-field1"
                            name="radio-field-set"
                            value="overdag"
                            onChange={(e) => setDeliveryTime(e.target.value)}/>

                        <label htmlFor="radio-field1">Overdag</label>

                        <input
                            type="radio"
                            id="radio-field2"
                            name="radio-field-set"
                            value="'s Avonds"
                            onChange={(e)=>setDeliveryTime(e.target.value)}/>

                        <label htmlFor="radio-field2">'s Avonds</label>



                    <label htmlFor="comments">
                        Opmerkingen:
                        <textarea
                            {...register("comments", {required: "Opmerking mag niet leeg zijn", maxLength: {value: 50, message: "Er mogen maximaal 50 karakters gebruikt worden",},})}
                            id="comments"
                            rows="2"
                            cols="10"
                            placeholder="heb je iets te melden?"
                            value={textArea}
                            onChange={(e) => setTextArea(e.target.value)}

                        >
                        </textarea>
                    </label>

                    <input
                        type="checkbox"
                        className="terms-and-conditions"
                        id="terms-and-conditions"
                        checked={terms}
                        onChange={(e) => setTerms(!terms && e.target.value)}

                    />
                    Ik ga akkoord met de voorwaarden


                    <button
                        type="button"
                        className="verzend-button"
                        onClick={handleClick}


                    >Verzend
                    </button>

                </form>

            </>

        );

}

export default App;









// SAM
//1. Alles staat in en rij -> voornaam, achternaam, hoe kan ik dit aanpassen?



///EdHub

// import React, { useState } from 'react';
// import './App.css';
// import {useForm} from "react-hook-form";
//
//
// function App() {
//
//     const { handleSubmit, formState: { errors }, register, watch } = useForm();
//     const [formReferrer, setFormReferrer] = useState('anders');
//
//     function onFormSubmit(data) {
//         console.log(data);
//     }
//
//
//     return (
//
//
//         <form onSubmit={handleSubmit(onFormSubmit)}>
//             <fieldset>
//
//                 <legend>Gegevens</legend>
//
//                 <label htmlFor="details-name">
//                     Voornaam:
//                     <input
//                         type="text"
//                         id="details-name"
//                         {...register("name", {required: "Naam mag niet leeg zijn", validate: {value: (value) => value.includes('@'), message: "Naam mag geen @ bevatten",},})}
//                     />
//                 </label>
//                 {errors.name && <p>{errors.name.message}</p>}
//
//
//                 <label htmlFor="details-name">
//                     Achternaam:
//                     <input
//                         type="text"
//                         id="details-name"
//                         {...register("name", {required: "Naam mag niet leeg zijn", validate: {value: (value) => value.includes('@'), message: "Naam mag geen @ bevatten",},})}
//                     />
//                 </label>
//                 {errors.name && <p>{errors.name.message}</p>}
//
//
//                 <label htmlFor="details-age">
//                     Leeftijd:
//                     <input
//                         type="number"
//                         id="details-age"
//                         {...register("age", {max: {value: 80, message: "U mag maximaal 80 jaar oud zijn",}})}
//                     />
//                 </label>
//                 {errors.age && <p>{errors.age.message}</p>}
//
//
//                 <label htmlFor="details-age">
//                     Postcode:
//                     <input
//                         type="number && text"
//                         id="details-age"
//                         {...register("age", {max: {value: 80, message: "U mag maximaal 80 jaar oud zijn",}})}
//                     />
//                 </label>
//                 {errors.age && <p>{errors.age.message}</p>}
//
//
//
//             </fieldset>
//
//             <fieldset>
//                 <legend>Jouw review</legend>
//
//                 <label htmlFor="recipe-comments">
//                     Opmerkingen:
//                     <textarea
//                         {...register("comments", {required: "Opmerking mag niet leeg zijn", maxLength: {value: 50, message: "Er mogen maximaal 50 karakters gebruikt worden",},})}
//                         id="recipe-comments"
//                         rows="4"
//                         cols="40"
//                         placeholder="Wat vond je van het recept?"
//                     >
//           </textarea>
//                 </label>
//                 {errors.comments && <p>{errors.comments.message}</p>}
//
//
//
//                 <label htmlFor="referrer">
//                     Hoe heb je dit recept gevonden?
//                     <select
//                         name="found-through"
//                         id="referrer"
//                         value={formReferrer}
//                         onChange={(e) => setFormReferrer(e.target.value)}
//                     >
//                         <option value="google">Google</option>
//                         <option value="vriend">Vriend</option>
//                         <option value="advertentie">Advertentie</option>
//                         <option value="anders">Anders</option>
//                     </select>
//                 </label>
//
//
//
//                 <label htmlFor="recipe-newsletter">
//                     <input
//                         type="checkbox"
//                         {...register("newsletter")}
//                     />
//                     Ik schrijf me in voor de nieuwsbrief
//                 </label>
//
//                 <button type="submit">
//                     Versturen
//                 </button>
//
//
//             </fieldset>
//
//
//         </form>
//
//
//     );
// }
//
// export default App;




