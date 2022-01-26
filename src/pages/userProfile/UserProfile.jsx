import React, { useState } from 'react';
import ProfileTabs from '../../components/userProfile/profileTabs/ProfileTabs.jsx';
import ProfileInformation from '../../components/userProfile/profileInformation/ProfileInformation.jsx';
import ProfileSettings from '../../components/userProfile/profileSettings/ProfileSettings.jsx';

export function UserProfile({ tab }) {
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    return (
        <>
            {isSettingOpen ? (
                <ProfileSettings
                    handleSettingsClick={() => setIsSettingOpen(!isSettingOpen)}
                    currentState={isSettingOpen}
                />
            ) : (
                <>
                    <ProfileInformation
                        handleSettingsClick={() => setIsSettingOpen(!isSettingOpen)}
                    />
                    <ProfileTabs tab={tab} />
                </>
            )}
        </>
    );
}
