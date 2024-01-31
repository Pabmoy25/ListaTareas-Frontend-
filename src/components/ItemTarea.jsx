import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombreTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {nombreTarea}
      <Button variant="danger">X</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
