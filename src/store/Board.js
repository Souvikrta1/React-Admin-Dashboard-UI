import {create} from 'zustand';
import { boardData } from '../data';

const useBoard = create((set)=>({
    board : boardData, //sets initial data from our dummy data
    setBoard : (board) => set((state)=>({board})) 
}))

export default useBoard;