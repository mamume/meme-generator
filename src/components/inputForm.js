import { Fragment } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function InputForm() {
    return (
        <Fragment>
            <TextField id="outlined-basic" label="Top Line" variant="outlined" />
            <TextField id="outlined-basic" label="Bottom Line" variant="outlined" />
            <Button variant="contained">Generate</Button>
        </Fragment>
    );
}

export default InputForm;