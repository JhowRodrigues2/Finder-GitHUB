import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RepoCode, RepoItem, RepoStats } from "../Styles";

const Repo = ({ name, language, html_url, forks_count, stargazers_count }) => {
  return (
    <RepoItem>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash /> {language}
      </p>
      <RepoStats>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </RepoStats>
      <RepoCode href={html_url} target="_blank">
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </RepoCode>
    </RepoItem>
  );
};

export default Repo;
