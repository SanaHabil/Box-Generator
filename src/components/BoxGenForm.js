import React, {useState} from 'react';

import styles from '../static/BigGenForm.module.css';


const BoxGenForm = (props) => {
    const [chosenColor, setChosenColor] = useState("");

    const {state,setState}=props;

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(chosenColor.trim() === ""){
            return
        }
        setState([...state,chosenColor])
        setChosenColor("")
        //props.onNewColor(chosenColor);
    };
    const handleChange=(e)=>{
        setChosenColor(e.target.value);
    }
    return(
        <div className={styles.container}>
            <form onSubmit={ handleSubmit }>
                <label>Enter A Color:</label>
                <input onChange={handleChange} value={chosenColor} className ={styles.field}></input>
                <input type="submit" className={styles.btn} value="Add"/>
            </form>
        </div>

);
}
export default BoxGenForm;