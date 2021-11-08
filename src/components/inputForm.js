import { Fragment, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function InputForm(props) {
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')

    return (
        <Fragment>
            <TextField id="outlined-basic" label={topText} onChange={e => setTopText(e.target.value)} variant="outlined" />
            <TextField id="outlined-basic" label={bottomText} onChange={e => setBottomText(e.target.value)} variant="outlined" />
            <Button variant="contained" onClick={props.changeMeme}>Generate</Button>
        </Fragment>
    );
}

export default InputForm;