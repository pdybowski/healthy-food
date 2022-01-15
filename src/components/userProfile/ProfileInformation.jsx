import React from 'react';
import { Button } from 'react-bootstrap';

import user from '../../assets/images/user-circle-solid.png';
import edit from '../../assets/images/edit-solid.png';

function ProfileInformation({handleSettingsClick}) {
    return (
        <div className="d-flex m-5">
                    <img src={user} height="16" alt="User Icon" />
                    <h2>Jakub Nowak</h2>
                    <Button
                        variant="primary"
                        onClick={handleSettingsClick}
                    >
                        <img src={edit} height="16" alt="Edit Icon" />
                        Edit profile
                    </Button>
        </div>
    );
}

export default ProfileInformation;
