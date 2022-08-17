import React from 'react';

import styles from '../static/Box.module.css';

const Box = (props)=>{
    const {state}=props;
    return(
            <div className={styles.divstyling}>
                {
                    state.map((item,index) =>(
                    <div key={index}>
                        <div className={styles.coloredbox} style={{backgroundColor:item}} />
                    </div>
                    ))
                }    
            </div>  
        );
};
export default Box;