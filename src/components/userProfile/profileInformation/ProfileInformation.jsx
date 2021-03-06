import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { ROUTES_PATHS } from '../../../routes';
import { Button, Container } from 'react-bootstrap';
import user from '../../../assets/images/user-circle-solid.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function ProfileInformation({ handleSettingsClick }) {
    return (
        <Container>
            <div className='d-flex m-5 align-items-center'>
                <div className='me-3'>
                    <img src={user} height='44' alt='User Icon' />
                </div>
                <div className='d-flex flex-column'>
                    <h3>Jakub Nowak</h3>
                </div>
                <div className='ms-auto'>
                    <LinkContainer to={ROUTES_PATHS.USER_SETTINGS}>
                        <Button variant='outline-primary' onClick={handleSettingsClick}>
                            <FontAwesomeIcon icon={faEdit} />
                            <span className='ms-1'>Edit profile</span>
                        </Button>
                    </LinkContainer>
                </div>
            </div>
        </Container>
    );
}

export default ProfileInformation;
