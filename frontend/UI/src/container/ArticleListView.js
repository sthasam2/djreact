import React from "react";
import axios from "axios";

import Articles from "../components/Article";
import CustomForm from "../components/ArticleForm";

class ArticleList extends React.Component {
    state = {
        articles: [],
    };

    componentDidMount() {
        axios.get("http://192.168.1.8:8000/api/").then((res) => {
            this.setState({
                articles: res.data,
            });
            //  console.log(res.data)
        });
    }

    render() {
        return (
            <div>
                {/* <h1>Create a post</h1> */}
                <CustomForm />
                <Articles data={this.state.articles} />
            </div>
        );
    }
}

export default ArticleList;
