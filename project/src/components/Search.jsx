import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchContainer, SearchArea } from "../Styles";

const Search = ({ loadUser }) => {
  const [userName, setUserName] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };
  return (
    <SearchArea>
      <h2>Pesquise um usuário</h2>
      <p>Conheça seus Repositórios</p>
      <SearchContainer>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </SearchContainer>
    </SearchArea>
  );
};

export default Search;
