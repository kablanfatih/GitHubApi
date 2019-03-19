import React, {Component} from 'react';

class ReposInfo extends Component {

    showRepoInfo(repos) {
        this.refs.repoDiv.innerHTML = "";

        repos.forEach(repo => {

            this.refs.repoDiv.innerHTML += `
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                   
                        </div>
                </div>
                </div>`
        })
    }

    render() {

        const repoInfo = this.props.username;
        if (repoInfo !== undefined) {
            this.showRepoInfo(repoInfo)
        }

        return (

            <div ref="repoDiv">

            </div>
        );
    }
}

export default ReposInfo;