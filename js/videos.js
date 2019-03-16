class Videos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          'videos': []
      };
    }
   
    componentWillMount() {
        var that = this;
        fetch(REST_ENDPOINT_VIDEOS).then(function (response) {
            return response.json();
        }).then(function (result) {
            var data = {
                'videos': result
            };
            that.setState(data);
        });
    }

    render() {
        var state = this.state;
        return (
            <div>{this.state.videos.map(video =>
                <div class="col-md-4 col-sm-6">
                    <div class="portfolio-item">
                        <iframe width="360" height="315" src={video.youtube_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            )}</div>
        );
    }
}

ReactDOM.render(
    <Videos />,
    document.getElementById('videos-container')
);