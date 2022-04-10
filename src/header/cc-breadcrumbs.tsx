import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import {useLocation, useNavigate} from "react-router-dom";
import {Box} from "@mui/material";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export function CcBreadcrumbs() {
    const location = useLocation();
    const locationPaths = location.pathname.split("/");

    const lastLocation = locationPaths.pop();
    const defaultHome = ["/"];


    const allButLastLocation = locationPaths.length > 1 ? locationPaths.splice(locationPaths.length - 1, 1) : defaultHome;


    const navigate = useNavigate();
    return (
            <div role="presentation" onClick={handleClick}>
                <Box py={1}>
                <Breadcrumbs aria-label="breadcrumb">
                    {allButLastLocation.map(path => <Link  key={path} underline="hover" color="inherit" onClick={() => navigate(path === "/" ? path : "/"+path)} href={"#"}>
                        {path === "/" ? "Home" : path}
                    </Link>)}
                    <Typography color="text.primary">{lastLocation}</Typography>
                </Breadcrumbs>
                </Box>
            </div>
    );
}