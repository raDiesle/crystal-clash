import {Modal} from "@mui/material";
import css from "./login-logout.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons/faTimesCircle";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {auth as authInstance} from "../cc-firestore";
import React, {Dispatch, SetStateAction} from "react";

type ILoginModalProps = {
    isLoginModalShown: boolean,
    setIsLoginModalShown: Dispatch<SetStateAction<boolean>>
}

export function LoginModal({isLoginModalShown, setIsLoginModalShown}: ILoginModalProps) {

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: "popup",
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: "/",
        signInOptions: [
            //  "emailLink",
            "facebook.com",
            "twitter.com",
            "google.com",
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => true,
        },
    };


    return (<Modal
        open={isLoginModalShown}
        onClose={() => {
            setIsLoginModalShown(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <div>
            <div className={css.ModalCloseStyle}>
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    size={"2x"}
                    onClick={() => setIsLoginModalShown(false)}
                />
            </div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={authInstance}/>
        </div>
    </Modal>)
}