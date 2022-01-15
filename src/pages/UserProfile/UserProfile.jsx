import React from 'react';
import ProfileSettings from '../../components/userProfile/ProfileSettings';
import ProfileNavigation from '../../components/userProfile/ProfileNavigation';
import ProfileInformation from '../../components/userProfile/ProfileInformation';
import ProfileSubNavigation from '../../components/userProfile/ProfileSubNavigation';

function UserProfile() {
    return (
        <>
            <ProfileNavigation />
            <ProfileInformation />
            <ProfileSubNavigation />
            <ProfileSettings />
        </>
    );
}

export default UserProfile;
