import SearchIcon from "@mui/icons-material/Search";
import {Box, Button, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import xor from "lodash.xor";
import {ECardFaction} from "../../../components/cards-game-data";
import {FactionImg} from "../../../components/img-wrappers/faction-img";
import {useEffect} from "react";

export type SearchInputs = {
    searchAll: string,
    factions: Array<ECardFaction> | []
};

// @ts-ignore
export function CardFilterForm({onSubmit}) {
    const {register, control, getValues, handleSubmit, trigger, watch, formState: {errors}} = useForm<SearchInputs>({
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            factions: [],
            searchAll: ''
        }
    });


    useEffect(() => {
        const subscription = watch((data) => {
            onSubmit(data);
        });
        return () => subscription.unsubscribe();
    }, [watch]);


    return <form onSubmit={() => {
    }}>
        <Box>
            <Controller
                control={control}
                name="factions"
                render={({field}) => (
                    <ToggleButtonGroup
                        {...field}
                        onChange={(e, value) => {
                            field.onChange(value);
                        }}
                    >
                        {Object.values(ECardFaction).map(faction => <ToggleButton key={faction} value={faction}
                                                                                  aria-label={faction}>
                            <FactionImg faction={faction}/>
                        </ToggleButton>)
                        }
                    </ToggleButtonGroup>
                )}
            />

            <div>
                <SearchIcon sx={{color: '#70b7b7', mr: 1, mt: 2}}/>
                <Controller
                    control={control}
                    name="searchAll"
                    render={({field}) => (
                        <TextField {...field} label="Search in all columns" variant="standard"/>
                    )}
                />

            </div>
        </Box>
    </form>
}