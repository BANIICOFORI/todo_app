import React, { useState }from 'react'
import { Card, Col, Button ,Modal, Container } from "react-bootstrap";
import {connect,useDispatch} from "react-redux";
import { DeleteNote } from '../Actions/NotesActions';
import EditTodo from './EditTodo';
import  './style.css'
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../Firebase/Config'

 const Todo = (props) => {
   
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true); 
        const dispatch = useDispatch(); 
      
        const handleDelete= async(e)=>{
          e.preventDefault();

          try {
            await deleteDoc(doc(db, "Todo_TB", props.noteInfo.id));
         console.log("items is Delete");
         } catch (e) {
           console.log(e);
         }
          //dispatch(DeleteNote(props.noteInfo.id));
          console.log("Is item deleted ?");
          };
        
         return (
          <>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Edit your Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditTodo 
            // Updatenote={props.Updatenote}
            hide={handleClose}
            noteInfo={props.noteInfo}
            />
          </Modal.Body>
          </Modal>
          
          <Col md={4}>
       <Card>
          <Card.Body>
              <Card.Title>Todo Title : {props.noteInfo.notestitle}</Card.Title>
            <Card.Text>Todo: {props.noteInfo.note}</Card.Text>
            <Card.Text>Date : {props.noteInfo.notedate}</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card> 
      </Col>
          
          </>
      
        
        );
      
       
      }
      
      const mapDispatchToProps = {
          DeleteNote,
      };
      
      export default connect(null,mapDispatchToProps) (Todo);