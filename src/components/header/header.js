import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Serik</em>
          </strong>
          <br />
          I'm fullstack developer
        </h1>
        <div className="header__text">
          <p>with passion for learning</p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;

