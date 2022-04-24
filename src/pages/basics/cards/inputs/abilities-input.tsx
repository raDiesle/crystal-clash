import {Autocomplete, Box, Checkbox, TextField, Typography} from "@mui/material";
import {ABILITIES_CONFIG} from "../abilities-config";
import {ReactElement} from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {TAbilities} from "../../../../components/cards-game-data";

export interface IAbilitiesOption {
    code: TAbilities;
    label: TAbilities;
    image: ReactElement;
}

const abilitiesOptions: readonly IAbilitiesOption[] = Array.from(ABILITIES_CONFIG).map(([key, value]) => ({
    code: key,
    label: key,
    image: value
}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

export default function AbilitiesInput(props: any) {
    const {onChange, value} = props;
    return (
        <Autocomplete
            id="abilities"
            onChange={(event, item) => {
                onChange(item);
            }}
            value={value}

            multiple
            disableCloseOnSelect
            size={"small"}
            sx={{width: 300}}
            ListboxProps={
                {
                    style: {
                        maxHeight: 'calc(100vh - 150px)',
                    }
                }
            }
            options={abilitiesOptions}
            autoHighlight
            getOptionLabel={(option: IAbilitiesOption) => option.label}
            renderTags={(tagValue, getTagProps) => {
                return <>{tagValue.reduce((prev, current) => (<>{prev} {current.image}</>), <></>)}</>;
            }}
            renderOption={(props, option: IAbilitiesOption, {selected}) => {
                return (
                    <Box component="li" sx={{padding: "0 !important", '& > svg': {mr: 2, flexShrink: 0}}}  {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{marginRight: 8}}
                            checked={selected}
                        /> {option.image} <Typography
                        style={{paddingLeft: "8px", fontSize: "12px"}}>{option.label}</Typography>
                    </Box>);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Abilities"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}
