import * as React from 'react';
import Link from '@mui/material/Link';

import {useNavigate} from "react-router-dom";
import {Box} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import {ROUTES} from "../cc-routes-config";

export function NavigateToHome() {
    const navigate = useNavigate();
    return (
        <Box py={1} px={1}>
            <Link underline="hover" color="inherit" onClick={() => navigate(ROUTES["/"])} href={"#"} display={"flex"}
            >
                <ArrowBack/> <span>Back</span>
            </Link>
        </Box>
    );
}