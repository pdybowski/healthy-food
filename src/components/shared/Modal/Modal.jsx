import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

export const CustomModal = (props) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show}>
                <Modal.Header closeButton onHide={handleClose}>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{<p>{props.body}</p>}</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {props.buttonDismissText}
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {props.buttonApproveText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
