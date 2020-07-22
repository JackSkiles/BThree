import React from 'react';
import styles from './PanicButton.module.css';
import axios from 'axios'
import { connect, useSelector } from 'react-redux';

function PanicButton() {
    // const location = useSelector(state => {
    //     return {
    //         latitude: state.latitude,
    //         longitude: state.longitude
    //     }
    // })
    const onClick = (e)=>{
            axios.post('/api/v1/sms/alert', {})
            // .then(res => res.json())
    }
    return (
        <div>
            <button className={styles.panicButton} onClick={onClick}>Panic Button</button>
        </div>
    )
}
export default PanicButton;