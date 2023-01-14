import Repo from "../components/Repo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { PaginationButton, ReposList, ReposContainer } from "../Styles";
import BackBtn from "../components/BackBtn";

const AllRepos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(repos && repos.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = repos.slice(startIndex, endIndex);

  useEffect(() => {
    const loadrepos = async function (username) {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      setRepos(data);
    };

    if (username) {
      loadrepos(username);
    }
  }, []);

  if (!repos && isLoading) return <Loader />;

  return (
    <ReposList>
      <BackBtn />
      <h2>Explore os repositórios do usuário: {username}</h2>

      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <ReposContainer>
          {currentItens.map((repo) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </ReposContainer>
      )}
      <div>
        {Array.from(Array(pages), (item, index) => {
          return (
            <PaginationButton
              key={item}
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </PaginationButton>
          );
        })}
      </div>
    </ReposList>
  );
};

export default AllRepos;
