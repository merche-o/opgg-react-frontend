export interface TierRank {
    name: string;
    tier: string;
    tierDivision: string;
    string: string;
    shortString: string;
    division: string;
    imageUrl: string;
    lp: number;
    tierRankPoint: number;
}

export interface League {
    hasResults: boolean;
    wins: number;
    losses: number;
    tierRank: TierRank;
}

export interface PreviousTier {
    name: string;
    tier: string;
    tierDivision: string;
    string: string;
    shortString: string;
    division: string;
    imageUrl: string;
    lp: number;
    tierRankPoint: number;
    season: number;
}

export interface LadderRank {
    rank: number;
    rankPercentOfTop: number;
}

export interface Summoner {
    name: string;
    level: number;
    profileImageUrl: string;
    profileBorderImageUrl: string;
    url: string;
    leagues: League[];
    previousTiers: PreviousTier[];
    ladderRank: LadderRank;
    profileBackgroundImageUrl: string;
}

export interface ISummonerSummary {
    summoner: Summoner;
}
  
  
  type SummonerSummaryAction = {
    type: string
    name: string
    data?: ISummonerSummary
  }
  
  type SummonerSummaryState = {
      summoner?:ISummonerSummary
  }
  
  
  type DispatchSummonerSummary = (args: SummonerSummaryAction) => SummonerSummaryAction