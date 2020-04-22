import { IPlayer, ITeam } from "../lib/game";
import PlayerCard from "./PlayerCard";
import classnames from "classnames";

const Team = ({
  players,
  team,
  score,
  maxScore,
}: {
  players: IPlayer[] | undefined;
  team: ITeam;
  score?: number;
  maxScore?: number;
}) => {
  return (
    <div className="pb-1">
      <div
        className={classnames(
          "w-full px-2 py-1 border-t border-b flex justify-between mb-1",
          {
            "bg-red-100 text-red-900": team === "red",
            "bg-blue-100 text-blue-900": team === "blue",
            "bg-green-100 text-green-900":
              ["duetA", "duetB"].indexOf(team) > -1,
          }
        )}
      >
        <h3 className="capitalize font-mono font-bold">
          {formattedTeam[team]}
        </h3>
        <span className="text-sm font-bold">
          {maxScore && `${score}/${maxScore} cards`}
        </span>
      </div>
      <div className="px-2 py-1">
        {players && players.length ? (
          players.map((p) => <PlayerCard key={p.id} player={p} />)
        ) : (
          <p className="text-gray-500 text-sm">
            There are no players in this team yet!
          </p>
        )}
      </div>
    </div>
  );
};

const formattedTeam = {
  red: "red",
  blue: "blue",
  duetA: "Side A",
  duetB: "Side B",
};

export default Team;