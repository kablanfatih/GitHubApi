import React, {Component} from 'react';
import axios from "axios";

class UserRepos extends Component {

    getRepo = async username => {
        return await axios.get(`https://api.github.com/users/${username}/repos`);
    };

    render() {
        return (
            <div>

                <div className="mb-2 card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <a href={this.state.html_url} target="_blank" id="repoName">{this.state.name}</a>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-secondary">
                                Starlar <span className="badge badge-light"
                                              id="repoStar">{this.state.stargazers_count}</span>
                            </button>

                            <button className="btn btn-info">
                                Forklar <span className="badge badge-light"
                                              id="repoFork">{this.state.forks_count}</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserRepos;