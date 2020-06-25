import React from 'react';

export default class extends React.Component {

    state = {
        news: []
    }

    componentDidUpdate() {
        this.setState({
            news: this.props.news
        })
    }

    render() {
        return (
            <>
                <h2>News {this.state.news.length}</h2>
                {
                    (this.state.news.map( (n, i) => (
                        <div key={i}>
                            <p>{n.title}</p>
                            <hr/>
                        </div>
                    ) ))
                }
            </>
        )
    }
}