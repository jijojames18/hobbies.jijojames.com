class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'shownImages': [],
            'count': 0,
            'allImages': []
        };
        this.loadMore = this.loadMore.bind(this);
        this.imagesShownInEachClick = 12;
    }

    componentWillMount() {
        let that = this;

        fetch(REST_ENDPOINT_GALLERY).then(function (response) {
            return response.json();
        }).then(function (result) {
            let shownImages = result.filter(function(image, index) { return index < that.imagesShownInEachClick });
            let data = {
                'allImages': result,
                'count': result.length,
                'shownImages': shownImages
            };
            that.setState(data);
        });
    }

    loadMore() {
        let shownImages = this.state.shownImages;
        let shownImagesLength = shownImages.length;
        let newImages = this.state.allImages.filter(function(image, index) { 
            return index < shownImagesLength + this.imagesShownInEachClick && index >= shownImagesLength 
        }.bind(this));
        shownImages = shownImages.concat(newImages);

        this.setState({
            'shownImages': shownImages
        });
    }

    render() {
        return (
            <div>
                <div class="row">
                    {this.state.shownImages.map((image, i) =>
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
                    )}
                </div>
                {this.state.shownImages.length < this.state.allImages.length &&
                    <div class="row">
                        <div class="col-md-12">
                            <div class="load-more-button">
                                <a href="#" onClick={this.loadMore}>Load More</a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

ReactDOM.render(
    <Gallery />,
    document.getElementById('gallery-container')
);