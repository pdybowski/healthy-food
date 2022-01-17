import React from 'react';
import ProfileSettings from '../../components/userProfile/ProfileSettings';
import ProfileNavigation from '../../components/userProfile/ProfileNavigation';
import ProfileInformation from '../../components/userProfile/ProfileInformation';
import ProfileSubNavigation from '../../components/userProfile/ProfileSubNavigation';

function UserProfile() {
    const [isSettingOpen, setIsSettingOpen] = React.useState(false);

    return (
        <>
            <ProfileNavigation />
            <ProfileSubNavigation />
            {isSettingOpen 
            ?
            <ProfileSettings 
            handleSettingsClick={() => setIsSettingOpen(!isSettingOpen)} />
            :
            <ProfileInformation 
            handleSettingsClick={() => setIsSettingOpen(!isSettingOpen)} />
            }
        </>
    );
}

export default UserProfile;
