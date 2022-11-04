import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from 'react-redux';
import {useState,useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
// import NoteEditForm from './Components/NoteEditForm "#d9f1ff"';
import AllmyTodo from './Componets/AllmyTodo';
import Add_Todo from './Componets/Add_Todo';
import Navbar from './Componets/Navbar';
import Footer from "./Componets/Footer";
import Home from "./Componets/Home";
import {
	collection,
	orderBy,
	query,
	getDocs,
	onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "./Firebase/Config";
import { addNewNote } from "./Actions/NotesActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
   try {
     const readData = async () => {
       const q = query(collection(db, "Todo_TB"), orderBy("timestamp", "desc"));
       const unsubscribe = onSnapshot(q, (querySnapshot) => {
         const notes = [];
         querySnapshot.forEach((doc) => {
           
          notes.push({...doc.data()});
          // users.push(doc.data());
         });
         dispatch(addNewNote(notes));
         console.log(notes);
       });
     };
     readData();
     
   } catch (e) {
     console.log(e);
   }
  },[]);
  return (
    <>
          <Container  className="allnote">
          <Navbar /> 
          <Col className="allnote"></Col>
            <Row>
              <Col md={4} style={{ }}>
              <Add_Todo 
              //newNote={addNewNote}
              />
            
              </Col>
             
               <Col md={8}>
                <AllmyTodo
                // newNote={notes}
                // DeleteNote={DeleteNote}
                // Updatenote={handleUpdate}
                />
              </Col>
            </Row>
            {/* <Home/> */}
            <Footer />
          </Container>
    
     
     
    </>
  );
}
const mapStateToProps = (state) => ({
  notes:state.notes
})

export default connect(mapStateToProps)(App);