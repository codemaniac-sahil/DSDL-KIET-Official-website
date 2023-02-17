import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function TeamCard(props) {
  return (
    <>
      {props.instagram_url === "" ? (
        <div className="team-card">
          <div className="team-card-image">
            <img
              src={require(`../../src/assets/team/${props.imgUrl}`)}
              alt={props.alt}
            />
          </div>
          <div className="team-card-heading">
            <h1>{props.name}</h1>
            <p>{props.designation}</p>
          </div>
          <div className="team-card-social-links">
            <Link to={props.linkedin_url}>
              <BsLinkedin />
            </Link>
            {/* <Link to={props.instagram_url}>
            <BsInstagram />
          </Link> */}
            <Link to={props.github_url}>
              <BsGithub />
            </Link>
          </div>
        </div>
      ) : (
        <div className="team-card">
          <div className="team-card-image">
            <img
              src={require(`../../src/assets/team/${props.imgUrl}`)}
              alt={props.alt}
            />
          </div>
          <div className="team-card-heading">
            <h1>{props.name}</h1>
            <p>{props.designation}</p>
          </div>
          <div className="team-card-social-links">
            <Link to={props.linkedin_url}>
              <BsLinkedin />
            </Link>
            <Link to={props.instagram_url}>
              <BsInstagram />
            </Link>
            <Link to={props.github_url}>
              <BsGithub />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default TeamCard;
