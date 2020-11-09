import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FormNav,
  CreateFilmContainer,
  GlobalStyle,
  ModalWrappers,
} from "./CreateFilmElements";
import Button from "./../Login/Button";
import Modal from "./Modal";
import Card from "./Card";

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const [movieCollection, setMovieCollection] = useState([]);
  console.log("heelo", movieCollection);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

    useEffect(async () => {
      const url = "https://staremovieapp.herokuapp.com/apiv1/films";
      const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
      });
      let userData = await response
        .json()
        .then((val) => {
          return val;
        })
        .then((user1) => {
          setMovieCollection(user1);
        });
    }, []);


  return (
    <>
      <FormNav>
        <nav className="RegisterContainer-nav">
          <NavLink className="RegisterContainer-logo" to="/">
            <img src="./favicon-32x32.png" className="logo-img" alt="logo" />{" "}
            STARE
          </NavLink>
        </nav>
      </FormNav>
      <CreateFilmContainer>
        <Button onClick={openModal} buttonName="Add a Film" />
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          insert={setMovieCollection}
        />
        <GlobalStyle />
        <ModalWrappers>
          <div>
            {movieCollection.map(
              ({
                name,
                description,
                ReleaseDate,
                ticket_price,
                country,
                genre,
                image_url,
              }) => (
                <>
                  <Card
                    name={name}
                    description={description}
                    releaseDate={ReleaseDate}
                    ticketPrice={ticket_price}
                    country={country}
                    genre={genre}
                    imageUrl={image_url}
                  />
                </>
              ),
            )}
          </div>
        </ModalWrappers>
      </CreateFilmContainer>
    </>
  );
};

export default Form;
