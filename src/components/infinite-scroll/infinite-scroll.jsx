import React from "react";
import { ScrollEnd } from "./infinite-scroll.styles";

class InfiniteScroll extends React.Component {
  constructor(props) {
    super();
    this.observer = null;
    this.scrollEndRef = React.createRef();
    this.handleObserver = this.handleObserver.bind(this);
    this.triggerFetch = props.triggerFetch;
  }

  handleObserver(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.triggerFetch();
      }
    });
  }

  componentDidMount() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    this.observer = new IntersectionObserver(this.handleObserver, options);
    this.observer.observe(this.scrollEndRef.current);
  }

  render() {
    return <ScrollEnd ref={this.scrollEndRef}></ScrollEnd>;
  }
}

export default InfiniteScroll;
