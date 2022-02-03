import { Button, Modal } from 'react-bootstrap';

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
        closeModal,
        handleSave,
        id,
    } = props;

    return (
        <>
            <Modal show={true} size={size} centered={isCentered} id={id}>
                <Modal.Header closeButton onClick={closeModal}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{children}</Modal.Body>

                <Modal.Footer>
                    <Button variant={styleBottomCloseButton} onClick={closeModal}>
                        {buttonDismissText}
                    </Button>
                    <Button variant={styleActionButton} onClick={() => handleSave(id)} id={id}>
                        {buttonActionCopy}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
