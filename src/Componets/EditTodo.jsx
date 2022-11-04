import React,{ useState } from "react";
import {Button,Form,Row,Col,FloatingLabel}from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatenote} from "../Actions/NotesActions";
import {db} from '../Firebase/Config'
import { doc, setDoc, updateDoc, serverTimestamp, timestamp } from "firebase/firestore";


const EditTodo = (props) => {
   
    const [notedate, setNotedate]= useState(props.noteInfo.notedate);
    const [notestitle,setNotestitle]= useState(props.noteInfo.notestitle);
    const [note,setNote]= useState(props.noteInfo.note);
   const dispatch = useDispatch();

    const handleSubmit = async(e)=>{
       e.preventDefault();
       // props.updatenote(props.noteInfo.id,{notename,email,mobile,password});
        let noteInfo = {id:props.noteInfo.id,notedate,notestitle,note};
        try {
          //dispatch(updateUser(userInfo));
          const updateRef = doc(db, "Todo_TB", noteInfo.id);

          // Set the "capital" field of the city 'DC'
            await updateDoc(updateRef,noteInfo);
        } catch (e) {
          console.log(e);
        }
      // dispatch(updatenote(noteInfo));
      setNotedate("");
      setNotestitle("");
      setNote("");
      props.hide();
    };
   
 return (
   <div>
     <Form>
  
    <Col className="allnote"></Col>
    <Row className="g-2">
    
     <Col md>

     <FloatingLabel controlId="floatingInputGrid" label="Date">
         <Form.Control 
         type="date"
         placeholder="Enter your Date"
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

     <FloatingLabel controlId="floatingInputGrid" label="Titile">
         <Form.Control 
         type="text"
         placeholder="Enter  Titile"
         value={notestitle}
         onChange={(e) => {
           setNotestitle(e.target.value);
         }}
         />
       </FloatingLabel>
    
     </Col>
    </Row>
    <Col className="allnote"></Col>
    <Col className="allnote"></Col>
   
     <Col md>
     <textarea controlId="floatingInputGrid" label="Main Note" style={{ height: '125px',width:"100%" }}
         
         
         type="textarea"  
          placeholder="Enter your main note"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
         >
       </textarea>
     </Col>
    <Col className="allnote"></Col>
    {/* <Button onClick={handleSubmit}  variant="primary" type="submit">Update</Button> */}
    <div className="d-grid gap-2">
     <Button variant="primary" onClick={handleSubmit} size="lg">
       Update
     </Button>
   </div>
  </Form>
  </div>
 );
}

export default EditTodo;