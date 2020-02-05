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
}

export interface Cam extends Entity {
    name: string;
    color: string;
    rangeMin: number;
    rangeMax: number;
    weight: number;
    strength: number;
}

export interface EntitiesState {
    manufacturers: EntityMap<Manufacturer>;
    camStyles: EntityMap<CamStyle>;
    cams: EntityMap<Cam>;
}

export interface RootState {
    entities: EntitiesState;
    loading?: boolean;
}

export type RootEpic = Epic<RootAction, RootAction, RootState | void, { api: string }>;
