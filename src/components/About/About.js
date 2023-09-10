import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./About.module.css";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: []
  };

  componentDidMount() {
    octokit.rest.repos
      .listForUser({
        username: "oliviia313"
      })
      .then(({ data }) => {
        console.log(data);
        this.setState({
          repoList: data,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, repoList } = this.state;

    return (
      <div className={styles.about}>
        <h1>{isLoading ? <CircularProgress /> : "About me"}</h1>
        {!isLoading && (
          <ul className={styles.repos}>
            {repoList.map((repo) => (
              <li className={styles.repo_item} key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repo_link}
                >
                  {repo.name}
                </a>
                <div className={styles.repo_info}>
                  <div className={styles.repo_language}>
                    <span
                      className={styles.repo_language_color}
                      style={{
                        backgroundColor:
                          repo.language === "HTML"
                            ? "#e34c26"
                            : "CSS"
                            ? "#563d7c"
                            : "JavaScript"
                            ? "#f1e05a"
                            : "#fff"
                      }}
                    ></span>
                    {repo.language}
                  </div>
                  <div className={styles.repo_star}>
                    {repo.stargazers_count}
                  </div>
                  <div className={styles.repo_forks}>{repo.forks}</div>
                  <div className={styles.repo_update}>
                    Updated on{" "}
                    {new Date(repo.updated_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default About;
