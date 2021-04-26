
    export interface Champion {
        imageUrl: string;
        level: number;
    }

    export interface Player {
        champion: Champion;
        summonerId: string;
        summonerName: string;
    }

    export interface Team {
        teamId: number;
        players: Player[];
    }

    export interface ITeamsData {
        gameId: string;
        teams: Team[];
    }

    type TeamsDataAction = {
        type: string
        name: string
        id : string
        data?: [id, ITeamsData]
    }
    
    type TeamsDataState = {
        teamData?: [{id : string, data:ITeamsData}]
    }


    type DispachTeamsData = (args: TeamsDataAction) => TeamsDataAction
