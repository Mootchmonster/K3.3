import { UNABLE_TO_SEE } from '../../globals';
// prettier-ignore
import { AIRBORN_ISR_TYPE_ID, AIR_REFUELING_SQUADRON_ID, ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, A_C_CARRIER_TYPE_ID, BOMBER_TYPE_ID, C_130_TYPE_ID, DESTROYER_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, MC_12_TYPE_ID, MISSILE_TYPE_ID, RADAR_TYPE_ID, SAM_SITE_TYPE_ID, SOF_TEAM_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, SUBMARINE_TYPE_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, TANK_COMPANY_TYPE_ID, TRANSPORT_TYPE_ID } from '../../pieces/pieceId';

export const stealthFighter: { [id: number]: number } = {};
stealthFighter[BOMBER_TYPE_ID] = 1;
stealthFighter[STEALTH_BOMBER_TYPE_ID] = 0;
stealthFighter[STEALTH_FIGHTER_TYPE_ID] = 0;
stealthFighter[AIR_REFUELING_SQUADRON_ID] = 1;
stealthFighter[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = 1;
stealthFighter[AIRBORN_ISR_TYPE_ID] = 1;
stealthFighter[ARMY_INFANTRY_COMPANY_TYPE_ID] = 1;
stealthFighter[ARTILLERY_BATTERY_TYPE_ID] = 1;
stealthFighter[TANK_COMPANY_TYPE_ID] = 1;
stealthFighter[MARINE_INFANTRY_COMPANY_TYPE_ID] = 1;
stealthFighter[ATTACK_HELICOPTER_TYPE_ID] = 1;
stealthFighter[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = 1;
stealthFighter[SAM_SITE_TYPE_ID] = 2;
stealthFighter[DESTROYER_TYPE_ID] = 2;
stealthFighter[A_C_CARRIER_TYPE_ID] = 2;
stealthFighter[SUBMARINE_TYPE_ID] = UNABLE_TO_SEE;
stealthFighter[TRANSPORT_TYPE_ID] = 2;
stealthFighter[MC_12_TYPE_ID] = 1;
stealthFighter[C_130_TYPE_ID] = 1;
stealthFighter[SOF_TEAM_TYPE_ID] = UNABLE_TO_SEE;
stealthFighter[RADAR_TYPE_ID] = 2;
stealthFighter[MISSILE_TYPE_ID] = UNABLE_TO_SEE;
