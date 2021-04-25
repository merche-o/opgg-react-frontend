import { ChampionUsageState } from "./championUsage";
import { GameDataState } from "./gameData";
import {SummonerSummaryState} from "./summonerSummary"


export type GlobalState = {
    summonerSummatry : SummonerSummaryState,
    championUsage : ChampionUsageState,
    gameData : GameDataState
}