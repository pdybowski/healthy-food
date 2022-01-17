import React from 'react';
import ProfileTabs from '../../components/userProfile/profileTabs/ProfileTabs.jsx';
import ProfileInformation from '../../components/userProfile/profileInformation/ProfileInformation.jsx';
import ProfileSettings from '../../components/userProfile/profileSettings/ProfileSettings.jsx';

export function UserProfile(props) {
    const [isSettingOpen, setIsSettingOpen] = React.useState(false);
    return (
        <>
            {isSettingOpen ? (
                <ProfileSettings handleSettingsClick={() => setIsSettingOpen(!isSettingOpen)} />
            ) : (
                <ProfileInformation handleSettingsClick={() => setIsSettingOpen(!isSettingOpen)} />
            )}
            <ProfileTabs tab={props.tab} />
        </>
    );
}
