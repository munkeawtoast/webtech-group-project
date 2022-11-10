import Image from "next/image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
const GameImages = ({ imageID, gameName, setimgID }) => {
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
        <Container>
          <Image src={`/game/0/images/${imageID}.jpg`} layout="fill" />
        </Container>
        <Container>
          <Image src={`/game/0/images/${imageID + 1}.jpg`} layout="fill" />
        </Container>
        <Container>
          <Image src={`/game/0/images/${imageID + 2}.jpg`} layout="fill" />
        </Container>
        <Container>
          <Image src={`/game/0/images/${imageID + 3}.jpg`} layout="fill" />
        </Container>
        <span>&#62;</span>
      </div>
    </div>
  );
};

export default GameImages;
