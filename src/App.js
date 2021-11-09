import { useEffect, useState, Fragment } from 'react';
import Header from './components/Header'
import InputForm from './components/InputForm'
import Meme from './components/Meme'

function App() {
  const [memes, setMemes] = useState([])
  const [currentMeme, setCurrentMeme] = useState('')
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(res => (setMemes(res.data.memes)))

    console.log('happend')
  }, [])

  useEffect(() => {
    if (memes.length)
      changeMeme()
  }, [memes])

  function changeMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length)
    setCurrentMeme(memes[randomIndex].url)
  }

  return (
    <Fragment>
      <Header />

      <InputForm changeMeme={changeMeme}
        topText={topText}
        bottomText={bottomText}
        setTopText={setTopText}
        setBottomText={setBottomText}
      />

      <div style={{
        display: "grid",
        justifyContent: "center"
      }}>
        <div
          style={{
            fontFamily: 'fantasy',
            fontSize: '3.5em',
            color: 'white',
            position: 'relative',
            textAlign: 'center',
            // transform: 'translateX(50%)'
            top: '1.2em'
          }}
        >{topText}</div>
        <Meme currentMeme={currentMeme} />
        <div
          style={{
            fontFamily: 'fantasy',
            fontSize: '3.5em',
            color: 'white',
            position: 'relative',
            textAlign: 'center',
            bottom: '1.2em'
          }}
        >{bottomText}</div>
      </div>
    </Fragment>
  );
}

export default App;
