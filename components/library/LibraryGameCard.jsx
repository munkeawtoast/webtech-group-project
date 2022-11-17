import GameCard from "components/common/GameCard"

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
  )
}