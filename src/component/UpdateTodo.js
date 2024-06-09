import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material'

const UpdateTodo = ({ removeTodoFunc, removeAllFunc }) => {

    const [state, updateState] = useState({removeContent: ""});

    const onRemoveChange = (event) => {
        updateState({removeContent: event.target.value});
    }

    const handleRemoveSubmit = (event) => {
        event.preventDefault();
        if (state.removeContent.trim()) {
            removeTodoFunc(state.removeContent);
            updateState({removeContent: ""});
        }
    }

    const handleRemoveAllSubmit = (event) => {
        event.preventDefault();
        removeAllFunc();
        updateState({removeContent: ""});
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField
                    label='Remove Item'
                    onChange={onRemoveChange}
                    value={state.removeContent}
                />
                <Button
                    onClick={handleRemoveSubmit}
                    variant='contained'
                >Remove</Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    onClick={handleRemoveAllSubmit}
                    variant='contained'
                >RemoveAll</Button>
            </Grid>
        </Grid>
    );
}

export default UpdateTodo;