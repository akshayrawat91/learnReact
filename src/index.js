import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDakOFYlYUDhIU4cHR0kmw5bA_y2Us9qas';

// creating component (which produces html)
class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: [] };
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });   // when both have same name
            //this.setState({videos: videos});
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos = { this.state.videos } />
            </div>
        );   // this is JSX not html
    }
}
    

// place this component on the page i.e. DOM
// <App /> is an JSX instance of a class
ReactDOM.render(<App />, document.querySelector('.container'));