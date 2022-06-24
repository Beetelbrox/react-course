import React from "react"

const Meme = () => {

    const DEFAULT_MEME = {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    }

    const [meme, setMeme] = React.useState(DEFAULT_MEME)
    const [allMemes, setAllMemes] = React.useState([])

    const getRandomImg = (event) => {
        event.preventDefault();
        const random_ix = Math.floor(Math.random() * allMemes.length)
        console.log(allMemes[random_ix])
        setMeme(prevState => ({...prevState, randomImage: allMemes[random_ix].url}))
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))

    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    return (
        <main>
            <form className="form" onSubmit={getRandomImg} onChange={handleChange}>
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form__input"
                    name="topText"
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    className="form__input"
                    value={meme.bottomText}
                />
                <button
                    className="form__button"
                >
                    Get a new meme image 🖼️
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme__image"/>
                <h2 className="meme__text top">{meme.topText}</h2>
                <h2 className="meme__text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )


};

export default Meme;