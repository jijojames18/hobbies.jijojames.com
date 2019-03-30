class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'shownPosts': [],
            'allPosts': [],
            'count': 0
        };
        this.loadMore = this.loadMore.bind(this);
        this.postsShownInEachClick = 6;
    }

    componentWillMount() {
        let that = this;
        fetch(REST_ENDPOINT_BLOG).then(function (response) {
            return response.json();
        }).then(function (result) {
            let shownPosts = result.filter(function(image, index) { return index < that.postsShownInEachClick });
            let data = {
                'allPosts': result,
                'count': result.length,
                'shownPosts': shownPosts
            };
            that.setState(data);
        });
    }

    loadMore() {
        let shownPosts = this.state.shownPosts;
        let shownPostsLength = shownPosts.length;
        let newPosts = this.state.allPosts.filter(function(image, index) { 
            return index < shownPostsLength + this.postsShownInEachClick && index >= shownPostsLength 
        }.bind(this));
        shownPosts = shownPosts.concat(newPosts);

        this.setState({
            'shownPosts': shownPosts
        });
    }

    render() {
        return (
            <div>
                {this.state.shownPosts.map((post, i) =>
                    <div class="blog-post">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="text-content">
                                    <span>{post.date}</span>
                                    <h2>{post.title}</h2>
                                    <p>{post.short_desc}</p>
                                    <div class="simple-btn">
                                        <a target="_blank" href={post.blogger_url}>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src={post.image} height="460px" width="360px" alt="" />
                            </div>
                        </div>
                    </div>
                )}
                {this.state.shownPosts.length < this.state.allPosts.length &&
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
    <Blog />,
    document.getElementById('blog-container')
);