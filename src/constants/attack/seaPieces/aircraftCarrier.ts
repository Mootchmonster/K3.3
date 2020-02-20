import { UNABLE_TO_HIT } from '../../globals';
// prettier-ignore
import { AIRBORN_ISR_TYPE_ID, AIR_REFUELING_SQUADRON_ID, ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, A_C_CARRIER_TYPE_ID, BOMBER_TYPE_ID, C_130_TYPE_ID, DESTROYER_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, MC_12_TYPE_ID, MISSILE_TYPE_ID, RADAR_TYPE_ID, SAM_SITE_TYPE_ID, SOF_TEAM_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, SUBMARINE_TYPE_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, TANK_COMPANY_TYPE_ID, TRANSPORT_TYPE_ID } from '../../pieces/pieceId';

export const aircraftCarrier: { [id: number]: number } = {};
aircraftCarrier[BOMBER_TYPE_ID] = 5;
aircraftCarrier[STEALTH_BOMBER_TYPE_ID] = 12;
aircraftCarrier[STEALTH_FIGHTER_TYPE_ID] = 12;
aircraftCarrier[AIR_REFUELING_SQUADRON_ID] = 11;
aircraftCarrier[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = 12;
aircraftCarrier[AIRBORN_ISR_TYPE_ID] = 10;
aircraftCarrier[ARMY_INFANTRY_COMPANY_TYPE_ID] = UNABLE_TO_HIT;
aircraftCarrier[ARTILLERY_BATTERY_TYPE_ID] = UNABLE_TO_HIT;
aircraftCarrier[TANK_COMPANY_TYPE_ID] = UNABLE_TO_HIT;
aircraftCarrier[MARINE_INFANTRY_COMPANY_TYPE_ID] = UNABLE_TO_HIT;
aircraftCarrier[ATTACK_HELICOPTER_TYPE_ID] = 11;
aircraftCarrier[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = UNABLE_TO_HIT;
aircraftCarrier[SAM_SITE_TYPE_ID] = UNABLE_TO_HIT;
aircraftCarrier[DESTROYER_TYPE_ID] = 12;
aircraftCarrier[A_C_CARRIER_TYPE_ID] = 10;
aircraftCarrier[SUBMARINE_TYPE_ID] = 12;
aircraftCarrier[TRANSPORT_TYPE_ID] = 10;
aircraftCarrier[MC_12_TYPE_ID] = 8;
aircraftCarrier[C_130_TYPE_ID] = 9;
aircraftCarrier[SOF_TEAM_TYPE_ID] = UNABLE_TO_HIT;
aircraftCarrier[RADAR_TYPE_ID] = UNABLE_TO_HIT;
aircraftCarrier[MISSILE_TYPE_ID] = UNABLE_TO_HIT;
