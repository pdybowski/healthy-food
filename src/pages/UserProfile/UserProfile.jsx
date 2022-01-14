import React from 'react';
import ProfileTabs from '../../components/userProfile/ProfileTabs';
import ProfileInformation from '../../components/userProfile/ProfileInformation';

function UserProfile() {
    return (
        <>
            <ProfileInformation />
            <ProfileTabs />
        </>
    );
}

export default UserProfile;
