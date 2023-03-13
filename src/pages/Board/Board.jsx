import React, { useState } from 'react'
import Board, { moveCard, moveColumn, removeCard, addCard } from '@asseinfo/react-kanban'
import "@asseinfo/react-kanban/dist/styles.css"
import useBoard from '../../store/Board'
import './Board.css'
import { RxCross2 } from 'react-icons/rx'
import { IoMdAdd } from 'react-icons/io'
import AddCardModal from '../../components/AddCardModal/AddCardModal'

const BoardPage = () => {
    const { board, setBoard } = useBoard();


    //Handling Different Type of Card Section Moving in Trello Board
    const handleColumnMove = (_card,source, destinaton) => {
        const updateBoard = moveColumn(board, source, destinaton);
        setBoard(updateBoard)
    }

    //Handling Cards Movement From One Section To Another 
    const handleCardMove = (_card,source, destinaton) => {
        const updateBoard = moveCard(board, source, destinaton);
        setBoard(updateBoard)
    }

    //Getting Which Type of Card Section It is
    const getColumn = (card) => {
        const column = board.columns.filter((column) => column.cards.includes(card))
        return column[0]
    }

    //setting different background color for different status in trello board
    const getGradient = (card) => {
        const column = getColumn(card)
        const title = column.title;
        if (title === 'TODO') {
            return {
                background:
                    "linear-gradient(65.35deg,rgba(65,65,65,0.67) -1.72% , rgba(48,189,220) 163.54%)"
            }
        } else if (title === 'Doing') {
            return {
                background:
                    "linear-gradient(65.35deg,rgba(65,65,65,0.67) -1.72% , rgba(220,48,48) 163.54%)"
            }
        } else if (title === 'Completed') {
            return {
                background:
                    "linear-gradient(65.35deg,rgba(65,65,65,0.67) -1.72% , rgba(48,220,86) 163.54%)"
            }
        } else if (title === 'Backlog') {
            return {
                background:
                    "linear-gradient(65.35deg,rgba(65,65,65,0.67) -1.72% , rgba(134,48,220) 163.54%)"
            }
        }
    }

    

    return (
        <div className='board-container'>
            <span>Trello Board</span>
            <Board
                allowAddColumn
                allowRenameColumn
                allowRemoveCard
                onCardDragEnd={handleCardMove}
                onColumnDragEnd={handleColumnMove}
                /* rendering the cards of trello board*/
                renderCard={(props) => (
                    <div className='kanban-card' style={getGradient(props)}>
                        <div>
                            <span>
                                {props.title}
                            </span>
                            <button className='remove-button'
                                onClick={() => {
                                    const updateBoard = removeCard(board, getColumn(props), props);
                                    setBoard(updateBoard)
                                }}
                            >
                                <RxCross2 color="white" size={15} />
                            </button>
                        </div>
                        <span>{props.description}</span>
                    </div>
                )}
                //Modal For Adding New Cards In Trello Board
                renderColumnHeader={(props) => {
                    const [modalOpened, setModalOpened] = useState(false)
                    const handleCardAdd = (title,details) =>{
                        const card = {
                            id : new Date().getTime(),
                            title,
                            description : details
                        }
                
                        const updateBoard = addCard(board,props,card)
                        setBoard(updateBoard)
                        setModalOpened(false)
                    }
                    
                    return (
                        <div className='column-header'>
                            <span>{props.title}</span>
                            {/* Modal Open-Close Actions */}
                            <IoMdAdd
                                color='white'
                                size={25} title="Add card"
                                onClick={() => setModalOpened(true)}
                            />
                            <AddCardModal
                                visible={modalOpened}
                                handleCardAdd = {handleCardAdd}
                                onClose={() => setModalOpened(false)}
                            />
                        </div>
                    )
                }}
            >
                {board}
            </Board>
        </div>
    )
}

export default BoardPage;
