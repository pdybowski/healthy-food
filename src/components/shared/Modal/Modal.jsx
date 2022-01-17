import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

export const CustomModal = (props) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    console.log(props);
    return (
        <>
            <Modal show={show} centered={props.isCentered}>
                <Modal.Header closeButton onHide={handleClose}>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{<p>{props.body}</p>}</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {props.buttondismisstext}
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {props.buttonapprovetext}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
