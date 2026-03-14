"use client";

import { useReducer } from "react";
import Card from "./Card";

type StateType = Map<string, number>;

type ActionType =
  | { type: "rate"; venueName: string; rating: number }
  | { type: "remove"; venueName: string };

const initialState: StateType = new Map([
  ["The Bloom Pavilion", 0],
  ["Spark Space", 0],
  ["The Grand Table", 0],
]);

function ratingReducer(state: StateType, action: ActionType): StateType {
  const newState = new Map(state);

  switch (action.type) {
    case "rate":
      newState.set(action.venueName, action.rating);
      return newState;

    case "remove":
      newState.delete(action.venueName);
      return newState;

    default:
      return state;
  }
}

export default function CardPanel() {
  const [ratingMap, dispatch] = useReducer(ratingReducer, initialState);

  return (
    <div className="m-[20px]">
      <div className="flex flex-row flex-wrap justify-around content-around p-[10px]">
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
          rating={ratingMap.get("The Bloom Pavilion") ?? 0}
          onRatingChange={(venueName, rating) =>
            dispatch({ type: "rate", venueName, rating })
          }
        />

        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
          rating={ratingMap.get("Spark Space") ?? 0}
          onRatingChange={(venueName, rating) =>
            dispatch({ type: "rate", venueName, rating })
          }
        />

        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
          rating={ratingMap.get("The Grand Table") ?? 0}
          onRatingChange={(venueName, rating) =>
            dispatch({ type: "rate", venueName, rating })
          }
        />
      </div>

      <div className="text-md font-semibold mt-4">
        Venue List with Ratings: {ratingMap.size}
      </div>

      {Array.from(ratingMap.entries()).map(([venueName, rating]) => (
        <div
          key={venueName}
          data-testid={venueName}
          className="cursor-pointer"
          onClick={() => dispatch({ type: "remove", venueName })}
        >
          {venueName} : {rating}
        </div>
      ))}
    </div>
  );
}