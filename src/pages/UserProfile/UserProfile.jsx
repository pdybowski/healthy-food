import React from "react";
import ProfileNavigation from "../../components/userProfile/ProfileNavigation";
import ProfileInformation from "../../components/userProfile/ProfileInformation";
import ProfileNavigationAddRecipeAndAddMenu from "../../components/userProfile/ProfileNavigationAddRecipeAndAddMenu";

function UserProfile() {
    return (
        <>
            <ProfileNavigation/>
            <ProfileInformation/>
            <ProfileNavigationAddRecipeAndAddMenu/>
        </>
    )
}

export default UserProfile;