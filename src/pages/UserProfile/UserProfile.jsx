import React from 'react';
import ProfileTabs from '../../components/userProfile/ProfileTabs';
import ProfileInformation from '../../components/userProfile/ProfileInformation';

function UserProfile(props) {
    return (
        <>
            <ProfileInformation />
            <ProfileTabs tab={props.tab} />
        </>
    );
}

export default UserProfile;
