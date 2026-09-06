import Img from "../../../../_components/Img/Img";
import BrandLogotype from "./_components/BrandLogotype/BrandLogotype";
import GraphicDecoration1 from "./_components/GraphicDecoration1/GraphicDecoration1";
import "./ProfileSection.css";

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile__whitespace-decoration">
        <div className="decoration-wrapper">
          <GraphicDecoration1 />
        </div>
      </div>
      <Img
        src="/img/zyriak-profile-photo.png"
        alt="zyriak photo"
        className="profile__profile-picture"
        glossy
      />

      <article className="profile__content" aria-label="About Zyriak">
        <BrandLogotype />
        <div className="profile__description-section">
          <p className="profile__description" aria-label="Zyriak's description">
            📍 I live in: <strong>Sesame Street</strong> <br />
            🎲 Variety of edits
            <br />
            <span className="profile__after-effects-description">
              <img
                src="/img/ae-icon.png"
                className="profile__icon"
                alt="After Effects glossy icon"
              />{" "}
              CC 2024
            </span>
          </p>
        </div>
      </article>
    </div>
  );
};

export default ProfileSection;
