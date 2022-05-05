import SearchIcon from "@mui/icons-material/Search";
import {Box, Grid, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {ECardFaction} from "../../../components/cards-game-data";
import {FactionImg} from "../../../components/img-wrappers/faction-img";
import {useEffect} from "react";
import AbilitiesInput, {IAbilitiesOption} from "./inputs/abilities-input";

export type SearchInputs = {
    searchAll: string,
    abilities: IAbilitiesOption[] | [],
    factions: ECardFaction[] | []
};

// @ts-ignore
export function CardFilterForm({onSubmit}) {
    const {control, watch} = useForm<SearchInputs>({
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            factions: [],
            abilities: [],
            searchAll: ''
        }
    });


    useEffect(() => {
        const subscription = watch((formData) => {
            onSubmit(formData);
        });
        return () => subscription.unsubscribe();
    }, [watch, onSubmit]);


    return <form onSubmit={() => {
    }}>
        <Grid container columnGap={2} rowGap={2} alignItems={"center"}>
            <Grid item>
                <Controller
                    control={control}
                    name="factions"
                    render={({field}) => (

                        <ToggleButtonGroup
                            {...field}
                            sx={{width: 300,     height: "40px"}}
                            onChange={(e, value) => {
                                field.onChange(value);
                            }}
                        >
                            {Object.values(ECardFaction).map(faction => <ToggleButton key={faction} value={faction}  sx={{width: "100%"}}
                                                                                      aria-label={faction}>
                                <FactionImg faction={faction}/>
                            </ToggleButton>)
                            }
                        </ToggleButtonGroup>

                    )}
                />
            </Grid>

            <Grid item>
                <Controller
                    control={control}
                    name="abilities"
                    render={({field}) => (
                        <AbilitiesInput {...field} />
                    )}
                />
            </Grid>


            <Grid item>
                <Box display={"flex"} alignItems={"center"}>
                    <SearchIcon sx={{color: '#70b7b7'}}/>
                    <Controller
                        control={control}
                        name="searchAll"
                        render={({field}) => (
                            <TextField {...field} label="Search in all columns" variant="outlined" size={"small"}  sx={{width: 276}}/>
                        )}
                    />
                </Box>
            </Grid>

        </Grid>
    </form>
}