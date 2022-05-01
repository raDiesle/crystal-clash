import React, {useEffect, useState} from "react";

import {auth as authInstance} from "../cc-firestore";
import {LoginModal} from "./login-modal";
import {Fab} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export default function LoginLogout() {
    const [isLoginModalShown, setIsLoginModalShown] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const unregisterAuthObserver = authInstance.onAuthStateChanged((user) => setIsSignedIn(!!user));
        return () => {
            unregisterAuthObserver();
        };
    }, []);

    const logout = () => {
        authInstance
            .signOut()
            .then(function () {
                // Sign-out successful.
            })
            .catch(function (error) {
                // An error happened.
            });
    };


    return (
        <>
            {isSignedIn === true ? (
                <Fab color="primary" aria-label="edit" size="small" onClick={() => {
                    logout()
                }}>
                    <LoginIcon/>
                </Fab>
            ) : (
                <>
                    <Fab color="primary" aria-label="edit" size="small" onClick={() => {
                        setIsLoginModalShown(true)
                    }}>
                        <LogoutIcon/>
                    </Fab>

                    <LoginModal {...{isLoginModalShown, setIsLoginModalShown}}/>
                </>
            )}
        </>
    );
}
