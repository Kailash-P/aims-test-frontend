import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GetDropDownData } from "../helper/SelectableSearchHelper";

export default function SelectableSearch(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  var selectValue =
    typeof props.selectValue === "string" ? props.selectValue : "";
    React.useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    GetDropDownData(props.url, props.params)
      .then((response) => {
        if (response.status === "success") {
          if (active) {
            setOptions(response.data);
          }
        } else {
          setOptions([]);
        }
      })
      .catch((err) => {
        console.log("DropDown loading failed - " + props.url);
      });
    return () => {
      active = false;
    };
    //eslint-disable-next-line 
  }, [loading]);


  return (
    <React.Fragment>
      <Autocomplete
        value={props.value}
        id={props.id}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        onChange={props.onChangeEvent}
        getOptionLabel={(option) => {
          const val = option[selectValue];
          return val;
        }}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            required={props.required}
            variant="outlined"
            name={props.name}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </React.Fragment>
  );
}
