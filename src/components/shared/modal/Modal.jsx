import { Button, Modal } from 'react-bootstrap';

export const CustomModal = (props) => {
    const {
        size, // one of: sm, md, lg, xl, xxl (md is default)
        isCentered,
        show,
        title,
        children,
        styleBottomCloseButton, // style left button, possible variants:
        // primary, secondary, success, warning, danger, info, light, dark, link
        styleActionButton, // style right button, same variants as above
        buttonDismissText,
        buttonActionCopy,
        onClick,
        onSave,
        modalFooterClass,
    } = props;

    return (
        <>
            <Modal show={show} size={size} centered={isCentered}>
                <Modal.Header closeButton onClick={onClick}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{children}</Modal.Body>

                <Modal.Footer className={modalFooterClass ? modalFooterClass : ''}>
                    <Button variant={styleBottomCloseButton} onClick={onClick}>
                        {buttonDismissText}
                    </Button>
                    <Button variant={styleActionButton} onClick={onSave}>
                        {buttonActionCopy}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
