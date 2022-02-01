import { CustomModal } from '../shared/modal/Modal';
// import { useState } from 'react';

export const ConfirmRemovalModal = (props) => {
    const { onClick, onSave } = props;
    return (
        <>
            <CustomModal
                title={'Remove item'}
                buttonDismissText={'Dismiss'}
                buttonActionCopy={'Delete'}
                onSave={onSave}
                onClick={onClick}
            >
                Are you sure you want to remove the item?
            </CustomModal>
            )
        </>
    );
};

export default ConfirmRemovalModal;
