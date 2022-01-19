import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import './modal.css';

export const CustomModal = (props) => {
    const {
        size, // one of: sm, md, lg, xl, xxl (md is default)
        isCentered,
        title,
        children,
        styleBottomCloseButton, // style left button, possible variants:
        // primary, secondary, success, warning, danger, info, light, dark, link
        styleActionButton, // style right button, same variants as above
        buttonDismissText,
        buttonActionCopy,
        handleSave,
    } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} size={size} centered={isCentered}>
                <Modal.Header closeButton onHide={handleClose}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{children}</Modal.Body>

                <Modal.Footer>
                    <Button variant={styleBottomCloseButton} onClick={handleClose}>
                        {buttonDismissText}
                    </Button>
                    <Button variant={styleActionButton} onClick={handleSave}>
                        {buttonActionCopy}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
