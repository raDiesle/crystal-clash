import {Box, Container, Typography} from "@mui/material";
import {CcBreadcrumbs} from "../header/cc-breadcrumbs";
import * as React from "react";


export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}





export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >


            {value === index && (
                <Container sx={{
                    pt: 1,
                }}>
                    <Box sx={{ p: 3 }}>
                        {children}
                    </Box>
                </Container>
            )}
        </div>
    );
}