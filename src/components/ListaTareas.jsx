import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <ListGroup>
      {props.arrayTareas.map((elementoTarea, posicionTarea) => (
        <ItemTarea key={posicionTarea} nombreTarea={elementoTarea} />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
