import { ListGroup } from "react-bootstrap";

const ItemTarea = ({nombreTarea}) => {
    return (
        <div>
             <ListGroup.Item>{nombreTarea}</ListGroup.Item>
        </div>
    );
};

export default ItemTarea;