import React, { useState } from "react";

const AddReleaseForm = () => {

    const [name,  setName] = useState("")
    const [url, setUrl] = useState("http://")

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }

    const handleUrlChange = (evt) => {
        setUrl(evt.target.value)

    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const newMovie = {name: name, url: url}
        addNewMovie(newMovie)
        setName("")
        setUrl("http://")

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>

            <input type="text" id="name" value={name} onChange={handleNameChange}></input>

            <label htmlFor="url">URL:</label>

            <input type="text" id="url" value ={url} onChange={handleUrlChange}></input>

            <input type="submit" value="Add Release"></input>
        </form>
    )


}

export default AddReleaseForm;