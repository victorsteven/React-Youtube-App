import React, {  Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const api_key = "AIzaSyBDCMBzPEFs93h_ZdFFqrvpqkxJ654S2ds";


class  App extends Component  {

  state = {
    videos: []
  }

  componentDidMount() {
    YTSearch({ key: api_key, term: 'stuffs'}, (videos) => {
      // console.log(videos)
      this.setState({ videos })
      console.log(this.state.videos)
    })
  }
  
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));