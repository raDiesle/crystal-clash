import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import {CcAppBar} from "./topbar/cc-app-bar";
import {CcRoutesConfig} from "./cc-routes-config";
import {CcBreadcrumbs} from "./header/cc-breadcrumbs";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            @Copyright {new Date().getFullYear()}
        </Typography>
    );
}

export function PageTemplate() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>
            <CcAppBar />



            <CcRoutesConfig />


            {/* Footer */}
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Copyright sx={{mt: 5}}/>
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}
