import React, { useState, useEffect } from "react";
import styled from "styled-components";
import locationplace from "../assets/icon-location.svg";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";
import website from "../assets/icon-website.svg";
import { Form } from "semantic-ui-react";
import search from "../assets/icon-search.svg";

const Contenedor = styled.div`
  width: 730px;
  height: 419px;
  background: ${({ theme }) => theme.body};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  margin-top: 24px;
  margin-left: 355px;
  margin-right: 355px;
  margin-bottom: 170px;

  @media (max-width: 768px) {
    width: 573px;
    height: 481px;
  }

  @media (max-width: 414px) {
    width: 327px;
    height: 517px;
  }
`;

const Circle = styled.div`
  height: 100px;
  width: 100px;
  background: #e76afa;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  margin-top: 48px;
  margin-left: 48px;

  @media (max-width: 414px) {
    height: 90px;
    width: 90px;
    margin-top: 30px;
    margin-left: 30px;
  }
`;

const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;

  @media (max-width: 414px) {
    height: 90px;
    width: 90px;
  }
`;

const Head = styled.h1`
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${({ theme }) => theme.data};
  margin-top: -110px;
  margin-left: 202px;

  @media (max-width: 414px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: -90px;
    margin-left: 130px;
  }
`;

const Date = styled.h2`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: right;
  color: ${({ theme }) => theme.mode};
  margin-top: -60px;
  margin-right: 48px;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-right: 190px;
  }

  @media (max-width: 414px) {
    font-size: 13px;
    line-height: 19px;
    margin-top: 30px;
    margin-right: 50px;
  }
`;

const User = styled.p`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0079ff;
  margin-top: 45px;
  margin-left: 202px;

  @media (max-width: 768px) {
    margin-top: -60px;
  }

  @media (max-width: 414px) {
    font-size: 13px;
    line-height: 19px;
    margin-top: -45px;
    margin-left: 140px;
  }
`;

const Bio = styled.p`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  color: ${({ theme }) => theme.text};
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-left: 202px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-left: 20px;
  }

  @media (max-width: 414px) {
    font-size: 10px;
    margin-left: 30px;
    margin-top: 40px;
  }
`;

const MiddleContainer = styled.div`
  background: ${({ theme }) => theme.container};
  border-radius: 10px;
  height: 85px;
  width: 480px;
  margin-left: 202px;
  margin-top: 15px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 50px;
  }

  @media (max-width: 414px) {
    width: 279px;
    margin-left: 30px;
    margin-top: 10px;
  }
`;

const Info = styled.span`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: ${({ theme }) => theme.text};
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 100px;

  @media (max-width: 414px) {
    font-size: 11px;
    line-height: 16px;
    padding-right: 30px;
    padding-left: 15px;
  }
`;

const Data = styled.span`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.data};
  padding-left: 20px;
  padding-right: 130px;

  @media (max-width: 414px) {
    font-size: 16px;
    line-height: 24px;
    padding-right: 50px;
    margin-top: 20px;
  }
`;

const Icon = styled.img`
  margin-top: 20px;
  margin-left: 200px;
  margin-right: 100px;
  background-color: beige;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-left: 80px;
    margin-right: 180px;
  }

  @media (max-width: 414px) {
    margin-top: 20px;
    margin-left: 40px;
  }
`;

const Location = styled.p`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.text};
  margin-top: -70px;
  margin-left: 240px;

  @media (max-width: 768px) {
    margin-top: -100px;
    margin-left: 110px;
  }

  @media (max-width: 414px) {
    font-size: 13px;
    line-height: 19px;
    margin-top: -150px;
    margin-left: 70px;
  }
`;

const Social = styled.p`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.text};
  margin-top: -20px;
  margin-left: 560px;

  @media (max-width: 768px) {
    margin-top: -20px;
    margin-left: 390px;
  }

  @media (max-width: 414px) {
    font-size: 13px;
    line-height: 19px;
    margin-top: 20px;
    margin-left: 70px;
  }
`;

const Web = styled.a`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-top: 40px;
  margin-left: 240px;

  @media (max-width: 768px) {
    margin-top: 70px;
    margin-left: 120px;
  }

  @media (max-width: 414px) {
    font-size: 13px;
    line-height: 19px;
    margin-top: 25px;
    margin-left: 70px;
  }

  :hover {
    cursor: pointer;
  }
`;

const Company = styled.p`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
  margin-left: 560px;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-left: 410px;
  }

  @media (max-width: 414px) {
    font-size: 13px;
    line-height: 19px;
    margin-top: 70px;
    margin-left: 70px;
  }
`;

const ContainerMain = styled.div`
  display: flex;
  width: 730px;
  height: 69px;
  background: ${({ theme }) => theme.body};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  border: none;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 573px;
  }

  @media (max-width: 414px) {
    width: 327px;
    height: 60px;
  }
`;

const SearchBar = styled.input`
  width: 254px;
  height: 25px;
  background: ${({ theme }) => theme.body};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  border: none;
  outline: none;
  justify-self: flex-start;
  margin-left: 80px;
  margin-top: -20px;
  background: none;
  

  ::placeholder {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: ${({ theme }) => theme.text};

    @media (max-width: 414px) {
      padding-left: 5px;
      padding-top: 5px;
      font-size: 12px;
    }
  }

  @media (max-width: 414px) {
    margin-left: 30px;
    margin-top: -10px;
    width: 180px;
  }
`;

const SearchIcon = styled.img`
  padding-top: 23px;
  padding-left: 32px;

  @media (max-width: 414px) {
    padding-left: 20px;
  }
`;

const SearchButton = styled.button`
  background: #0079ff;
  border-radius: 10px;
  height: 50px;
  width: 106px;
  border: none;
  position: absolute;
  margin-left: 280px;
  margin-top: -40px;

  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-top: -40px;
    margin-left: 120px;
  }

  @media (max-width: 414px) {
    width: 70px;
    height: 40px;
    font-size: 14px;
    line-height: 21px;
    margin-left: 50px;
    margin-top: -40px;
  }

  &:hover {
    background: #60abff;
    cursor: pointer;
  }
`;

const Error = styled.h1`
  color: #f74646;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  position: absolute;
  margin-left: 290px;
  margin-top: 300px;
  font-family: "Space Mono";
`;

export const Container = () => {
  const [avatar, setAvatar] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [dataCreation, setDataCreation] = useState("");
  const [loginUser, setLoginUser] = useState("");
  const [bioUser, setBioUser] = useState("");
  const [repos, setRepos] = useState("");
  const [followersUser, setFollowersUser] = useState("");
  const [followingUser, setFollowingUser] = useState("");
  const [locationUser, setLocationUser] = useState("");
  const [twitterUser, setTwitterUser] = useState("");
  const [blogUser, setBlogUser] = useState("");
  const [companyUser, setCompanyUser] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const setData = ({
    avatar_url,
    name,
    created_at,
    login,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  }) => {
    setAvatar(avatar_url);
    setNameUser(name);
    setDataCreation(created_at);
    setLoginUser(login);
    setBioUser(bio);
    setRepos(public_repos);
    setFollowersUser(followers);
    setFollowingUser(following);
    setLocationUser(location);
    setTwitterUser(twitter_username);
    setBlogUser(blog);
    setCompanyUser(company);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  return (
    <>
      <ContainerMain>
        <Form onSubmit={handleSubmit}>
          <SearchIcon src={search} alt="search" />
          <Form.Group>
            {/*<Form.Input
            className="inputName"
            placeholder="Search Github Username ..."
            name="github user"
            onChange={handleSearch}
           />*/}
            <SearchBar
              placeholder="Search Github Username..."
              name="github user"
              onChange={handleSearch}
            />

            {/*<Form.Button content="Submit" className="ButtonSearch" />*/}
            <SearchButton>Search</SearchButton>
          </Form.Group>
        </Form>
      </ContainerMain>

      {error ? (
        <Error>{error}</Error>
      ) : (
        <Contenedor>
          <Circle>
            <Avatar src={avatar} alt=" Github profile avatar" />
          </Circle>
          <Head>{nameUser}</Head>
          <Date>{dataCreation}</Date>
          <User>{loginUser}</User>
          <Bio>{bioUser}</Bio>

          <MiddleContainer>
            <Info>Repos</Info>
            <Info>Followers</Info>
            <Info>Following</Info>
            <br />
            <Data>{repos}</Data>
            <Data>{followersUser}</Data>
            <Data>{followingUser}</Data>
          </MiddleContainer>

          <Icon src={locationplace} alt="location" />
          <Icon src={twitter} alt="twitter" />
          <Icon src={website} alt="website" />
          <Icon src={company} alt="company" />
          <Location>{locationUser}</Location>
          <Social>{twitterUser}</Social>
          <Web>{blogUser}</Web>
          <Company>{companyUser}</Company>
        </Contenedor>
      )}
    </>
  );
};
