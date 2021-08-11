import React, { useState } from "react";
import './App.css';
import stickyLogo from "./StickyLogo.png";
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import Tooltip from '@material-ui/core/Tooltip';
import Card from "./Card";

function App() {
  const [flag, setFlag] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [addItem, setAddItem] = useState([]);

  document.title = "Sticky Notes";

  const handleInput = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;

    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev, [name]: value,
      }
    })
    console.log(note);
  }

  const addContent = () => {
    // console.log(note);
    if (note.title === "" || note.content === "") {
      alert("Please enter a valid input");
    }
    else {
      setAddItem((prev) => {
        return [...prev, note]
      })
      setNote({
        title: "",
        content: "",
      })
      // console.log(addItem);
    }

  }

  // const inputFocus = useRef(null);
  // useEffect(() => {
  //   inputFocus.current.focus();
  // }, [])

  const onDelete = (id) => {
    setAddItem((prevData) => prevData.filter((val, index) => {
      return index !== id;
    })
    )
  }

  return (
    <>
      <div className="heading">
        <img src={stickyLogo} alt="logo" className="logo" />
        <h1>Sticky Notes</h1>
      </div>
      {flag ?
        <div className="input">
          <CancelIcon
            className="cross"
            onClick={() => setFlag(false)} />
          <input type="text"
            placeholder="Write on me..."
            autoComplete="off"
            maxlength="20"
            className="input-title"
            name="title"
            value={note.title}
            onChange={handleInput}
          // ref={inputFocus}
          />
          <textarea
            rows="3"
            columns="20"
            maxlength="80"
            placeholder="Anything more about it..."
            className="input-desc" name="content"
            value={note.content} onChange={handleInput}
          />
          <AddCircleSharpIcon
            className="add" onClick={addContent} />
        </div> :
        <span className="span-btn">
          <Tooltip title="Create new note">
            <NoteAddSharpIcon className="btn"
              onClick={() => {
                setFlag(true)
                setNote({ title: "", content: "", })
              }} />
          </Tooltip>
        </span>
      }
      {
        addItem.map((elem, index) => {
          return (
            <>
              <Card
                key={index}
                id={index}
                title={elem.title}
                content={elem.content}
                deleteItem={onDelete}
              />
            </>
          )
        })
      }
    </>
  );
}

export default App;
