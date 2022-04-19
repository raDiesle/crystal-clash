import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import * as React from "react";

export function TopMenuCenter() {
    return <Grid component={"ul"} container>

        <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{my: 1, mx: 1.5}}
        >
            Wiki
        </Link>

        <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{my: 1, mx: 1.5}}
        >
            Cards
        </Link>
        <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{my: 1, mx: 1.5}}
        >
            Deckmanager
        </Link>
        <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{my: 1, mx: 1.5}}
        >
            Leaderboards
        </Link>
    </Grid>
}