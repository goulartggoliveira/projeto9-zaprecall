import play from "../assets/img/seta_play.png";
import certo from "../assets/img/icone_certo.png";
import quase from "../assets/img/icone_quase.png";
import erro from "../assets/img/icone_erro.png";
import virar from "../assets/img/seta_virar.png";
export default function Icon({ type }) {
  return (
    <>
      {type === "play" && <img src={play} alt="setinha" />}
      {type === "certo" && <img src={certo} alt="cert" />}
      {type === "quase" && <img src={quase} alt="quase" />}
      {type === "erro" && <img src={erro} alt="errou" />}
      {type === "virar" && <img src={virar} alt="errou" />}
    </>
  );
}
