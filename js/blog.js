class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'posts': []
        };
    }

    componentWillMount() {
        var that = this;
        fetch(REST_ENDPOINT_BLOG).then(function (response) {
            return response.json();
        }).then(function (result) {
            var data = {
                'posts': result
            };
            that.setState(data);
        });
    }

    render() {
        return (
            <div>{this.state.posts.map((post, i) =>
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
                            <img src={post.image} height = "460px" width="360px" alt="" />
                        </div>
                    </div>
                </div>
            )}</div>
        );
    }
}

ReactDOM.render(
    <Blog />,
    document.getElementById('blog-container')
);