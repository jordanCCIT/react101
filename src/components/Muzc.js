import React from "react";
import "./Muzc.css";

export default class Muzc extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            lyric: "",
            artist: "",
            song: ""
        };
        // We will come back to this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.generateLyric = this.generateLyric.bind(this);
    }

    generateLyric() {
        fetch("http://localhost:8080/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                lyric: data.lyric,
                artist: data.artist,
                song: data.song
            });
        })
    }

    componentDidMount() {
        this.generateLyric();
    }

    render() {
        let lyric = this.state.lyric;
        let artist = this.state.artist;
        let song = this.state.song;

        return (
            <div>
                <h1 className="text">{lyric}</h1>

                <h2 className="text">{song}</h2>

                <h3 className="text">{artist}</h3>

                <button onClick={this.generateLyric}>New Lyric!</button>
            </div>
        )
    }


}