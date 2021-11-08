import { useEffect, useState } from 'react';
import Header from './components/Header'
import InputForm from './components/InputForm'
import Meme from './components/Meme'

function App() {
  const [currentMeme, setCurrentMeme] = useState('')
  const [memes, setMemes] = useState([])

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
    <div>
      <Header />
      <InputForm changeMeme={changeMeme} />
      <Meme currentMeme={currentMeme} />
    </div>
  );
}

export default App;
