import Constructor from "../constructors/index.js";
import Driver from "../drivers/index.js";

export type DriverStanding = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
};

export type ConstructorStanding = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
};

export type DriverWinners = {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
} | null;

export type ConstructorWinners = {
  season: string;
  round: string;
  ConstructorStandings: ConstructorStanding[];
} | null;
