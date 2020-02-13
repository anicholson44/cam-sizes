import { StateType, ActionType } from "typesafe-actions";
import { Epic } from "redux-observable";
import { IdStore } from "../utils/id-store";

export { IdStore };

export type RootAction = ActionType<typeof import("./actions").default>;

declare module "typesafe-actions" {
  interface Types {
    RootAction: RootAction;
  }
}

export interface Entity {
  readonly id: number;
}

export interface EntityMap<E extends Entity> {
  readonly [id: number]: E;
}

export interface Manufacturer extends Entity {
  readonly name: string;
  readonly camStyles: ReadonlyArray<number>;
}

export interface CamStyle extends Entity {
  readonly name: string;
  readonly cams: ReadonlyArray<number>;
}

export interface Cam extends Entity {
  readonly name: string;
  readonly color: string;
  readonly rangeMin: number;
  readonly rangeMax: number;
  readonly weight: number;
  readonly strength: number;
  readonly camStyleId: number;
}

export interface EntitiesState {
  readonly manufacturers: EntityMap<Manufacturer>;
  readonly camStyles: EntityMap<CamStyle>;
  readonly cams: EntityMap<Cam>;
}

// Store selected cam styles and selected cams in a nested data structure. The top-level keys
// are cam style ids. The top-level values are id stores of selected cam ids for those cam style
// ids. This support the select all, deselect all, select, and deselect actions for cams.
// The number represents the number of a particular cam in the rack.
export type SelectedCamStyles = IdStore<IdStore<number>>;

export interface RootState {
  readonly entities: EntitiesState;
  readonly selectedCamStyles: SelectedCamStyles;
  readonly highlightedCams: IdStore<true>;
}

export type RootEpic = Epic<
  RootAction,
  RootAction,
  RootState | void,
  { api: string }
>;
