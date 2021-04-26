import { ChampionUsageState } from "./championUsage";
import { GameDataState } from "./gameData";
import { SummonerSummaryState } from "./summonerSummary"
import { TeamsDataState } from "./teams";


export type GlobalState = {
    summonerSummatry: SummonerSummaryState,
    championUsage: ChampionUsageState,
    gameData: GameDataState,
    searchData: SearchState
}