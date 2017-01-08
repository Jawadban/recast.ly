class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      currentSong: exampleVideoData[0],
      allSongs: exampleVideoData
    };
  }

  onClickEvent(e) {
    console.log(e);
    this.setState({
      currentSong: e
    });
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentSong}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.onClickEvent.bind(this)} videos={this.state.allSongs}/>
        </div>
      </div>
    );   
  } 


} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
  

