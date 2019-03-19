import React, {Component} from 'react';
import axios from "axios";
import ReposInfo from "./ReposInfo";
import companyPng from "../images/company.png";
import locationPng from "../images/location.png";
import mailPng from "../images/mail.png";

class UserInfo extends Component {

        state = {
            login:"",
            htmlUrl: "",
            avatarUrl: "",
            bio: "",
            public_repos: "",
            company: "",
            location: "",
            email: "",
            followers: "",
            following: "",
        };

    getUser = async username => {
        const responseUser = await axios.get(`https://api.github.com/users/${username}`);

        const {login, html_url, avatar_url, bio, public_repos, company, location, email, followers, following} = responseUser.data;

        this.setState({
            login, html_url, avatar_url, bio, public_repos, company, location, email, followers, following
        });
    };

    getRepoInfo = async username => {
        const repoInfos = await axios.get(`https://api.github.com/users/${username}/repos`);

        const repoInfosData = repoInfos.data;

        this.setState({repoInfosData});
    };

    async handleSubmit(e) {
        e.preventDefault();
        const username = this.refs.username.value;
        await this.getUser(username);
        await this.getRepoInfo(username);
    }

    render() {

        const {login, html_url, avatar_url, bio, public_repos, company, location, email, followers, following, repoInfosData} = this.state;


        return (

            <div className="container">
                <div className="search card card-body">
                    <h3>Github Kullanıcılarını Arayın</h3>
                    <p className="lead">
                        Bir kullanıcı adı girin ve kullanıcının bilgilerine ulaşın!
                    </p>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input ref='username' type="text" name="username" className="form-control"
                               placeholder="Github Kullanıcı adı"/>
                        <br/>
                        <button type="submit" className="btn btn-dark">Ara</button>
                    </form>


                </div>

                <div className="card card-body ml-5 mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <a href={html_url} target="_blank" rel="noopener noreferrer">
                                <img className="img-fluid mb-2"
                                     src={avatar_url} alt=""/> </a>
                            <hr/>
                            <div id="fullName"><strong>{login}</strong></div>
                            <hr/>
                            <div id="bio">{bio}</div>

                            <div className="col-md-8">
                                <button className="btn btn-secondary">
                                    Takipçi <span className="badge badge-light">{followers}</span>
                                </button>
                                <button className="btn btn-info">
                                    Takip Edilen <span className="badge badge-light">{following}</span>
                                </button>
                                <button className="btn btn-danger">
                                    Repolar <span className="badge badge-light">{public_repos}</span>
                                </button>
                                <hr/>
                                <li className="list-group"/>
                                <li className="list-group-item borderzero">
                                    <img src={companyPng} width="30px" alt=""/>
                                    <span id="company">{company}</span>
                                </li>

                                <li className="list-group-item borderzero">
                                    <img src={locationPng} width="30px" alt=""/>
                                    <span id="location">{location}</span>
                                </li>
                                <li className="list-group-item borderzero">
                                    <img src={mailPng} width="30px" alt=""/> <span id="company">{email} </span>

                                </li>


                            </div>
                        </div>
                    </div>
                </div>
                <ReposInfo username = {repoInfosData}/>
            </div>
        );
    }
}

export default UserInfo;