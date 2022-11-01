import React, { useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import Todolist from './Todolist';
export default function homePage() {
    const [value, setValue] = useState('one')
    const handleChange = (event, value) => {  
        setValue(value)
    };
    
    return (
        <div>
            <Tabs value={value} onChange={handleChange} >
                <Tab value='one' label='Home' />
                <Tab value='two' label='Todos' />
            </Tabs>
            {value === 'one' && <div>Hello there!</div>}
            {value === 'two' && <div><Todolist /></div>}
        </div>
    )
};
