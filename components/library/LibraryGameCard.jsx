import GameCard from "components/common/GameCard";
import { css } from "@emotion/react";

export default function LibraryGameCard({ game }) {
  return (
    <GameCard
      key={game.name}
      game={game}
      showArgs={{
        isLink: false,
        showImage: true,
        showName: true,
        forLibrary: true,
      }}
    />
  );
}
