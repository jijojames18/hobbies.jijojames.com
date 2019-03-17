class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'images': []
        };
    }

    componentWillMount() {
        var that = this;
        fetch(REST_ENDPOINT_GALLERY).then(function (response) {
            return response.json();
        }).then(function (result) {
            var data = {
                'images': result
            };
            that.setState(data);
        });
    }

    render() {
        return (
            <div>{this.state.images.map((image, i) =>
                <div class="col-md-4 col-sm-6">
                    <div class="portfolio-item">
                        <a
                            href={image.file_url}
                            data-lightbox="image-1"><div class="thumb">
                                <div class="hover-effect">
                                    <div class="hover-content">
                                        <h1>{image.place}</h1>
                                        <p>{image.date}</p>
                                    </div>
                                </div>
                                <div class="image">
                                    <img
                                        src={image.file_url}
                                        width="360" height="360" />
                                </div>
                            </div></a>
                    </div>
                </div>
            )}</div>
        );
    }
}

ReactDOM.render(
    <Gallery />,
    document.getElementById('gallery-container')
);