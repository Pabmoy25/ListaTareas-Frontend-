import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <ListGroup>
      {props.arrayTareas.map((elementoTarea, posicionTarea) => (
        <ItemTarea key={posicionTarea} />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
