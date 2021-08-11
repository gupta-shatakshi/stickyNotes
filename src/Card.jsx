import React, {useState} from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Card = (props) => {
    const [showDel, setShowDel] = useState({ visibility: "hidden" });
    const applyStyle = () => {
        setShowDel({ visibility: "visible" });
    };
    const deleteStyle = () => {
        setShowDel({ visibility: "hidden" });
    };

    const deleteNote = () => {
        props.deleteItem(props.id);
    };

    return(
        <>
        <div className="card-container"
        onMouseEnter={applyStyle}
        onMouseLeave={deleteStyle}>
        <div className="card">
            <div className="pin">📌</div>
            <div><h3 className="card-title">{props.title}</h3></div>
            <div> <p className="card-content">{props.content}</p></div>
        </div>
        <footer>
            <DeleteForeverIcon style={{ visibility: showDel.visibility }} className="delete" onClick = {deleteNote}/>
        </footer>
        </div>
        </>
    )
}

export default Card;