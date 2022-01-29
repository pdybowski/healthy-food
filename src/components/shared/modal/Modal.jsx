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
        handleClick,
        downloadTxtFile,
    } = props;

    return (
        <>
            <Modal show={true} size={size} centered={isCentered}>
                <Modal.Header closeButton onHide={handleClick}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{children}</Modal.Body>

                <Modal.Footer>
                    <Button variant={styleBottomCloseButton} onClick={handleClick}>
                        {buttonDismissText}
                    </Button>
                    <Button variant={styleActionButton} onClick={downloadTxtFile}>
                        {buttonActionCopy}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
