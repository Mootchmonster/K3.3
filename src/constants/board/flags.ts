// prettier-ignore
import { DRAGON_ISLAND_ID, EAGLE_ISLAND_ID, FULLER_ISLAND_ID, HR_REPUBLIC_ISLAND_ID, KEONI_ISLAND_ID, LION_ISLAND_ID, MONTAVILLE_ISLAND_ID, NOYARC_ISLAND_ID, RICO_ISLAND_ID, SHOR_ISLAND_ID, TAMU_ISLAND_ID } from './islands';

export const FLAG_0_LOCATION = 5; // Dragon Bottom
export const FLAG_1_LOCATION = 14; // Dragon Top
export const FLAG_2_LOCATION = 108; // HR Republic
export const FLAG_3_LOCATION = 179; // Montaville
export const FLAG_4_LOCATION = 202; // Lion FLAG
export const FLAG_5_LOCATION = 240; // Noyarc
export const FLAG_6_LOCATION = 336; // Fuler
export const FLAG_7_LOCATION = 381; // Rico
export const FLAG_8_LOCATION = 499; // Tamu`
export const FLAG_9_LOCATION = 542; // Shor
export const FLAG_10_LOCATION = 676; // Keoni
export const FLAG_11_LOCATION = 670; // Eagle Top
export const FLAG_12_LOCATION = 708; // Eagle Botton

export const ALL_FLAG_LOCATIONS = [
    FLAG_0_LOCATION,
    FLAG_1_LOCATION,
    FLAG_2_LOCATION,
    FLAG_3_LOCATION,
    FLAG_4_LOCATION,
    FLAG_5_LOCATION,
    FLAG_6_LOCATION,
    FLAG_7_LOCATION,
    FLAG_8_LOCATION,
    FLAG_9_LOCATION,
    FLAG_10_LOCATION,
    FLAG_11_LOCATION,
    FLAG_12_LOCATION
];

export type ALL_FLAG_LOCATIONS_TYPE =
    | typeof FLAG_0_LOCATION
    | typeof FLAG_1_LOCATION
    | typeof FLAG_2_LOCATION
    | typeof FLAG_3_LOCATION
    | typeof FLAG_4_LOCATION
    | typeof FLAG_5_LOCATION
    | typeof FLAG_6_LOCATION
    | typeof FLAG_7_LOCATION
    | typeof FLAG_8_LOCATION
    | typeof FLAG_9_LOCATION
    | typeof FLAG_10_LOCATION
    | typeof FLAG_11_LOCATION
    | typeof FLAG_12_LOCATION;

export const FLAG_ISLAND_OWNERSHIP: { [id: number]: number } = {};
FLAG_ISLAND_OWNERSHIP[FLAG_0_LOCATION] = DRAGON_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_1_LOCATION] = DRAGON_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_2_LOCATION] = HR_REPUBLIC_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_3_LOCATION] = MONTAVILLE_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_4_LOCATION] = LION_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_5_LOCATION] = NOYARC_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_6_LOCATION] = FULLER_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_7_LOCATION] = RICO_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_8_LOCATION] = TAMU_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_9_LOCATION] = SHOR_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_10_LOCATION] = KEONI_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_11_LOCATION] = EAGLE_ISLAND_ID;
FLAG_ISLAND_OWNERSHIP[FLAG_12_LOCATION] = EAGLE_ISLAND_ID;
