import { useNavigate } from "react-router-dom";

import { BackPageButton } from "../Styles";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackPageButton onClick={() => navigate(-1)}>Voltar</BackPageButton>
    </>
  );
};

export default BackBtn;
