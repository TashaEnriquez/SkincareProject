import axios from 'axios';
import { React, useState, useEffect } from 'react';

const MyRoutines = () => {
    const [routines, getRoutines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/routines/user/userId/routines')
        .then(response => {
            console.log('response from get request', response);
        })
        .catch(error => {
            console.log('error', error);
        })
    },[]);
    return(
        <div>My selected routines</div>

    );
}

export default MyRoutines;