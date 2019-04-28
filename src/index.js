import React, {  Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const api_key = "AIzaSyBDCMBzPEFs93h_ZdFFqrvpqkxJ654S2ds";


class  App extends Component  {

  state = {
    videos: [], 
    selectedVideo: null
  }

  componentDidMount() {
    this.videoSearch('stuffs')
  }
  handleSelectedVideo = (selectedVideo) => {
    {/* onVideoSelect={selectedVideo => this.setState({selectedVideo})} */}
    this.setState({
      selectedVideo: selectedVideo
    })
  }

  videoSearch(term) {
    YTSearch({ key: api_key, term: term }, (videos) => {
      // console.log(videos)
      this.setState({
         videos,
         selectedVideo: videos[0] 
        });
    })
  }
  
  render () {
    return (
      <div>
        <SearchBar  onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={this.handleSelectedVideo}
          videos={this.state.videos} 
          />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));