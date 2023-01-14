import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";
import { Stats, UserArea, Location, Number } from "../Styles";

const User = ({ login, avatar_url, followers, following, location }) => {
  return (
    <UserArea>
      <img src={avatar_url} alt={login}></img>
      {location && (
        <Location>
          <MdLocationPin />
          <span>{location}</span>
        </Location>
      )}
      <Stats>
        <div>
          <p>Seguidores:</p>
          <Number>{followers}</Number>
        </div>
        <div>
          <p>Seguindo:</p>
          <Number> {following}</Number>
        </div>
      </Stats>
      <div>
        <Link to={`/allrepos/${login}`} className={"linkArea"}>
          Todos Projetos
        </Link>
        <Link to={`/repos/${login}`} className={"linkArea"}>
          Melhores projetos
        </Link>
      </div>
    </UserArea>
  );
};

export default User;
