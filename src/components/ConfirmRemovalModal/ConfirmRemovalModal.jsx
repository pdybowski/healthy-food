// import { useState } from 'react';

import { CustomModal } from '../shared/Modal/Modal';

export const ConfirmRemovalModal = (props) => {
    const { closeModal, handleSave, id } = props;
    return (
        <>
            <CustomModal
                title={'Remove item'}
                buttonDismissText={'Dismiss'}
                buttonActionCopy={'Delete'}
                handleSave={handleSave}
                closeModal={closeModal}
                id={id}
            >
                Are you sure you want to remove the item?
            </CustomModal>
        </>
    );
};

export default ConfirmRemovalModal;
