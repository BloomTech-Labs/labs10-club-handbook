import React from 'react';
import styled from 'styled-components';
import { FormGroup, FormControlLabel, TextField, Button, Checkbox } from '@material-ui/core';


class Settings extends React.Component {
    state = {
        checkedEmail: false,
        checkednText: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return(
            <form>
                <TextField
                    id="outlined-email"
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    />
                <TextField
                    id="outlined-phone"
                    label="Phone"
                    margin="normal"
                    variant="outlined"
                    />
                <Button variant="contained" size="large" color="primary">
                    SAVE
                </Button>
            </form>
        );
    }
}

export default Settings;