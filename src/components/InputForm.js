import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function InputForm(props) {


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
            }}
        >
            <TextField id="outlined-basic" label="Top Text" onChange={e => props.setTopText(e.target.value)} variant="outlined" mx="5" />
            <TextField id="outlined-basic" label="Bottom Text" onChange={e => props.setBottomText(e.target.value)} variant="outlined" />
            <Button variant="contained" onClick={props.changeMeme}>Generate</Button>
        </div>
    );
}

export default InputForm;
