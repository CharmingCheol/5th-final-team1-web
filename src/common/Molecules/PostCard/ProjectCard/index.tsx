import React from "react";
import Link from "@common/Atoms/Link";
import ProfileImage from "@common/Atoms/ProfileImage";
import UserName from "@common/Atoms/UserName";
import HashTagGroup from "@common/Molecules/HashTagGroup";
import calcDate from "@utils/modules/calcDate";
import * as S from "./style";

export interface ProjectCardProps {
  author_name: string;
  created_at: string;
  crew_field: string;
  hashtags: string[];
  id: number;
  title: string;
}

const ProjectCard = ({ author_name, created_at, crew_field, hashtags, id, title }: ProjectCardProps) => {
  return (
    <>
      <S.Layout>
        <div className="container">
          <div className="title-wrapper">
            <Link to={`project/${id}`}>
              <h1>{title}</h1>
            </Link>
            <Link to={`project/${id}`}>
              <h2>{crew_field}</h2>
            </Link>
          </div>
          <HashTagGroup className="hash-tag-group" namingList={hashtags} />
          <S.CardFooter>
            <div className="user-wrapper">
              <ProfileImage imageSrc={author_name} />
              <div className="name-wrapper">
                <UserName username={author_name} />
                <h4>챌린저</h4>
              </div>
              <p>{calcDate({ date: created_at })}</p>
            </div>
          </S.CardFooter>
        </div>
      </S.Layout>
    </>
  );
};

export default ProjectCard;
