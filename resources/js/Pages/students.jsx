import React from "react";
import Student from "./student";


const data = [
    {
        id: 1,
        name: 'Yass',
        filière: 'Math',
        email: 'yass@email.com',
        picture: ''
    },
    
    {
        id: 2,
        name: 'Mahmoud',
        filière: 'word',
         email: 'mahmoud@email.com',
        picture: ''
    },
    
    {
        id: 3,
        name: 'Faty',
        filière: 'dev',
         email: 'faty@email.com',
        picture: ''
    }, {
        id: 4,
        name: 'karl',
        filière: 'php',
         email: 'karl@email.com',
        picture: ''
    },
]

function Students() {
    return (
        <div>
            {
                data.map((item) => {
                    return <Student />

                })
            }
        </div>


    )
}

export default Students;