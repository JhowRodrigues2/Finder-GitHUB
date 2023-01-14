import Repo from "../components/Repo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";
import { ReposContainer, ReposList } from "../Styles";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadrepos = async function (username) {
      setIsLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      let orderedRepos = data.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );

      orderedRepos = orderedRepos.slice(0, 5);

      setRepos(orderedRepos);
    };

    if (username) {
      loadrepos(username);
    }
    if (!repos && isLoading) return <Loader />;
  }, []);

  return (
    <ReposList>
      <BackBtn />
      <h2>Explore os melhores repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <ReposContainer>
          {repos.map((repo) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </ReposContainer>
      )}
    </ReposList>
  );
};

export default Repos;
