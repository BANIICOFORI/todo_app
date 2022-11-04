import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function AllmyTodo(props) {
    const { notes } = useSelector((state) => {
        return state;
      });
      return(
        <>
       <Container>
        <Row>
          {notes.map((item,index) =>{
            return(
              <Todo
              key={index}
              noteInfo={item} 
              deletenote={props.deletenote}
							updatenote={props.updatenote}
              />
            );
          })}
        </Row>
       </Container>
        </>
      );
    }

export default AllmyTodo;