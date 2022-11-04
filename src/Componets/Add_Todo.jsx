import React, { useState } from "react";
import { Row,Col,FloatingLabel,Card } from "react-bootstrap";
import {addNewNote } from "../Actions/NotesActions";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { doc, setDoc, serverTimestamp} from "firebase/firestore";
import {db} from '../Firebase/Config';

 const Add_Todo = (props) => {
   
    const [notedate, setNotedate] = useState("");

    const [notestitle, setNotetitile] = useState("");
    const [note, setNote] = useState("");
  
    //const dispatch = useDispatch();
    const handleSubmit = async(e) => {
      e.preventDefault();
      let noteInfo = { 
        id: uuid(),
        notedate,
        notestitle,
        note,
        timestamp: serverTimestamp(),
    };
    try {
        await setDoc(doc(db, "Todo_TB", noteInfo.id), noteInfo);
        setNotedate("");
        setNotetitile("");
        setNote("");
        
    } catch (e) {
        console.log(e);
    }
      //dispatch(addNewNote(noteInfo));
      setNotedate("");
      setNotetitile("");
      setNote("");
      
    };
  
       return (
        
        <Card>
          <div>
      <Col className="allnote"></Col> 
    
       <Row className="g-2">
       
        <Col md>
  
        <FloatingLabel controlId="floatingInputGrid" label="Todo Title">
            <Form.Control 
             type="Text"
             placeholder="Todo Title"
             value={notestitle}
             onChange={(e) => {
               setNotetitile(e.target.value);
             }}
            />
          </FloatingLabel>
       
        </Col>
        <Col md>
  
  <FloatingLabel controlId="floatingInputGrid" label="Date">
  <Form.Control 
  type="date"
  placeholder="Enter your date"
  value={notedate}
  onChange={(e) => {
    setNotedate(e.target.value);
  }}
  />
</FloatingLabel>

</Col>
       </Row>
       <Col className="allnote"></Col>
       <Row className="g-2">
        <Col md>
        <textarea controlId="floatingInputGrid" label="Main Note" style={{ height: '125px',width:"100%" }}
            
            
            type="textarea"  
             placeholder="Your Todo note"
             value={note}
             onChange={(e) => {
               setNote(e.target.value);
             }}
            >
          </textarea>
        </Col>
       </Row>
       <Col className=""></Col>
       {/* <Button onClick={handleSubmit} variant="primary" type="submit" size="lg">
            Submit
          </Button> */}
  
        <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleSubmit} size="lg">
          Add Todo
        </Button>
        {/* <Button variant="secondary" onClick={handleSubmit}size="lg">
         Add Note
        </Button> */}
      </div>
      
      <Col className="allnoteBt"></Col>
      </div>
      </Card>
    );
  }
export default Add_Todo;