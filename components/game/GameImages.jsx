import Image from "next/image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
const GameImages = ({ imageID, gameID, setimgID }) => {
  const Container = styled.div`
    position: relative;
    width: 300px;
    aspect-ratio: 16/9;
  `;
  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        `}
      >
        <button>&#60;</button>
        <Container
          onClick={function () {
            setimgID(0);
          }}
        >
          <Image src={`/game/${gameID}/images/0.jpg`} layout="fill" />
        </Container>
        <Container
          onClick={function () {
            setimgID(1);
          }}
        >
          <Image src={`/game/${gameID}/images/1.jpg`} layout="fill" />
        </Container>
        <Container
          onClick={function () {
            setimgID(2);
          }}
        >
          <Image src={`/game/${gameID}/images/2.jpg`} layout="fill" />
        </Container>
        <Container
          onClick={function () {
            setimgID(3);
          }}
        >
          <Image src={`/game/${gameID}/images/3.jpg`} layout="fill" />
        </Container>
        <span>&#62;</span>
      </div>
    </div>
  );
};

export default GameImages;
