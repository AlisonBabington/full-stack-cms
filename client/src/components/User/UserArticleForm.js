import React, {Component} from 'react';
import Request from '../../helpers/Request';
import {Redirect} from 'react-router-dom';

export default class UserArticleForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: this.props.location.state.article.article.title,
            lead: this.props.location.state.article.article.lead,
            body: this.props.location.state.article.article.body,
            tag: this.props.location.state.article.article.tag,

            redirectNow: false

        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleLeadChange = this.handleLeadChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleTitleChange(event) {
        this.setState({title: event.target.value})
    }

    handleLeadChange(event) {
        this.setState({lead: event.target.value})
    }

    handleBodyChange(event) {
        this.setState({body: event.target.value})
    }

     handleTagChange(event) {
        this.setState({tag: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const title = this.state.title.trim();
        const lead = this.state.lead.trim();
        const body = this.state.body.trim();
        const tag = this.state.tag.trim();
        if (!title || !lead || !body) {
            return
        }

        const id = this.props.location.state.article.article.id
        const request = new Request()
        request.patch(`/articles/${id}`,{
            "title": title,
            "lead": lead,
            "body": body,
            "tag": tag
        })
            .then(() => this.setState({redirectNow: true}))




    }

    handleRedirect() {

        const userId = this.props.location.state.user.user.id
        if (this.state.redirectNow) {

            return <Redirect to={`/users/${userId}`} />
        }

        return null
    }

    render() {

        //try what happens if we add a tag field and we modify(changes on the dropdown for articles?)

        return(
            <div>
                <form className='edit-article-form' onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
                    <label>Lead</label>
                    <input type="text" name="lead" value={this.state.lead} onChange={this.handleLeadChange}/>
                    <label>Body</label>
                    <textarea type="text" name="body" value={this.state.body} onChange={this.handleBodyChange}/>
                    <label>Tag</label>
                    <textarea type="text" name="tag" value={this.state.tag} onChange={this.handleTagChange}/>

                    <button type="submit">Edit article</button>
                    {this.handleRedirect()}
                </form>

            </div>
        );
    }
}