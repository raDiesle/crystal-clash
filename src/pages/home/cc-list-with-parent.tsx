import {Collapse, List, ListItemButton, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import * as React from "react";

type ICcListWithParent = {
    parentText : string;
    children : React.ReactNode
}

export function CcListWithParent({parentText, children } : ICcListWithParent ){
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return <>
        <ListItemButton onClick={handleClick}>
        <ListItemText primary={parentText} />
        {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            {children}
        </Collapse>
    </ListItemButton>
        </>
}