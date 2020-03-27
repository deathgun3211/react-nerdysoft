import React, { useState } from "react";
import { Button } from "../Button/Button";
import { ThemeContext } from "../../context";
import ImageCat from "../../assets/cat.jpg";
import "./PostImage.scss";

export const PostImage = props => {
  const { src = "https://cdn2.thecatapi.com/images/bcp.jpg" } = props;


  const [isHidden, setIsHidden] = useState(false);

  const onClickHandler = () => {

    setIsHidden(!isHidden);
  };

  return (
    <ThemeContext.Consumer>
      {value => {
        return (
          <div className="image-wrapper">
            {!isHidden && <img src={src} className="img1" />}
            <Button
              className={`${
                value === "dark" ? "dark" : "light"
              } btn-sm btn-secondary`}
              label={!isHidden ? "Hide img" : "Show img"}
              onClick={onClickHandler}
            />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
