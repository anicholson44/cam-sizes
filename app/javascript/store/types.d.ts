import { StateType, ActionType } from 'typesafe-actions';
import { Epic } from 'redux-observable';

export type RootAction = ActionType<typeof import('./actions').default>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}

export interface Entity {
    id: number;
}

export interface EntityMap<E extends Entity> {
    [id: number]: E;
}

export interface Manufacturer extends Entity {
    name: string;
    camStyles: number[];
}

export interface CamStyle extends Entity {
    name: string;
    cams: number[];
    colorLabel: string;
}

export interface Cam extends Entity {
    name: string;
    color: string;
    rangeMin: number;
    rangeMax: number;
    weight: number;
    strength: number;
    camStyleId: number;
}

export interface EntitiesState {
    manufacturers: EntityMap<Manufacturer>;
    camStyles: EntityMap<CamStyle>;
    cams: EntityMap<Cam>;
}

// efficient data structure for storing a set of ids, because object are easier to work with
// than sets in JavaScript
export interface IdStore {
    [id: number]: true;
}

export interface RootState {
    entities: EntitiesState;
    loading: boolean;
    selectedCamStyles: IdStore;
}

export type RootEpic = Epic<RootAction, RootAction, RootState | void, { api: string }>;
