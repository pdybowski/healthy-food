import React from 'react';
import ProfileTabs from '../../components/userProfile/ProfileTabs.jsx';
import ProfileInformation from '../../components/userProfile/ProfileInformation.jsx';

function UserProfile(props) {
    return (
        <>
            <ProfileInformation />
            <ProfileTabs tab={props.tab} />
        </>
    );
}

export default UserProfile;
