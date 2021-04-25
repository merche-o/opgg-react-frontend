
    export interface ChampionSummary {
        imageUrl: string;
        level: number;
    }

    export interface Spell {
        imageUrl: string;
    }

    export interface Item {
        imageUrl: string;
    }

    export interface General {
        kill: number;
        death: number;
        assist: number;
        kdaString: string;
        cs: number;
        csPerMin: number;
        contributionForKillRate: string;
        goldEarned: number;
        totalDamageDealtToChampions: number;
        largestMultiKillString: string;
        opScoreBadge: string;
    }

    export interface Ward {
        sightWardsBought: number;
        visionWardsBought: number;
    }

    export interface Stats {
        general: General;
        ward: Ward;
    }

    export interface Game {
        mmr?: number;
        champion: ChampionSummary;
        spells: Spell[];
        items: Item[];
        needRenew: boolean;
        gameId: string;
        createDate: number;
        gameLength: number;
        gameType: string;
        summonerId: string;
        summonerName: string;
        tierRankShort: string;
        stats: Stats;
        mapInfo?: any;
        peak: string[];
        isWin: boolean;
    }

    export interface ChampionDetailed {
        id: number;
        key: string;
        name: string;
        imageUrl: string;
        games: number;
        kills: number;
        deaths: number;
        assists: number;
        wins: number;
        losses: number;
    }

    export interface Position {
        games: number;
        wins: number;
        losses: number;
        position: string;
        positionName: string;
    }

    export interface Summary {
        wins: number;
        losses: number;
        kills: number;
        deaths: number;
        assists: number;
    }

    export interface IGameData {
        games: Game[];
        champions: ChampionDetailed[];
        positions: Position[];
        summary: Summary;
    }




    type GameDataAction  = {
        type: string
        name: string
        data?: IGameData
      }
      
      type GameDataState = {
          gameData?:IGameData
      }

    type DispatchGameData = (args: GameDataAction) => GameDataAction
