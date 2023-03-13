import React, { useState } from 'react'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css'
import css from './AddCardModal.module.css'


const AddCardModal = ({ visible, onClose , handleCardAdd}) => {

    const customStyle = {
        background: 'rgb(58 58 58)',
        padding: '20px',
        width: '50%',
        top: "-3rem",
        height : "fit-content",
        maxWidth: '40rem'
    }

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    return (
        <Rodal
            visible={visible}
            onClose={onClose}
            customStyles={customStyle}
        >
            <div className={css.container}>
                <div>
                    <span className={css.label}>
                        Card Title
                    </span>
                    <input type='text' className={css.input} value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div>
                    <span className={css.label}>Details</span>
                    <textarea
                        rows={10}
                        className={css.input}
                        value={details}
                        onChange={(e) => { setDetails(e.target.value) }}
                    />
                </div>
                <button
                    disabled={title === "" && details === ""}
                    className={css.saveButton}
                    onClick={()=>{
                        handleCardAdd(title,details)
                        setTitle("")
                        setDetails("")
                    }}
                >
                    Add
                </button>
            </div>
        </Rodal>
    )
}

export default AddCardModal
