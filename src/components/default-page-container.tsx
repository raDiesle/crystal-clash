import {NavigateToHome} from "../header/navigate-to-home";
import Container from "@mui/material/Container";
import React from "react";

export function DefaultPageContainer({children} : {children: any}){
    return <>  <NavigateToHome/>
        <Container>
            {children}
        </Container>
        </>
}