import React, {useEffect, useState} from "react";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {auth as authInstance} from "../cc-firestore";

import css from "./login-logout.module.scss";
import {LoginModal} from "./login-modal";


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
                <div>
                    <button className={css.SignInLinkStyle} onClick={logout}>
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                    </button>
                </div>
            ) : (
                <>
                    <div>
                        <button className={css.SignInLinkStyle} onClick={() => setIsLoginModalShown(true)}>
                            Login <FontAwesomeIcon icon={faSignInAlt}/>
                        </button>
                    </div>
                    <LoginModal {...{isLoginModalShown, setIsLoginModalShown}}/>
                </>
            )}
        </>
    );
}
