import { create } from 'zustand';
import { INITIAL_EVENTS } from '../data'

import React from 'react'

//creating a initial state with zustand global state management
const useCalender = create((set)=>({
    currentEvents : INITIAL_EVENTS, // sets initial events coming from our dummy data
}))

export default useCalender;
