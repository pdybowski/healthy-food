import React from 'react';
import ProfileTabs from '../../components/userProfile/profileTabs/ProfileTabs.jsx';
import ProfileInformation from '../../components/userProfile/profileInformation/ProfileInformation.jsx';

function UserProfile(props) {
    return (
        <>
            <ProfileInformation />
            <ProfileTabs tab={props.tab} />
        </>
    );
}

export default UserProfile;
