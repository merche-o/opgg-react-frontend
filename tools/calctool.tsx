export function percentagePar(value: number, par: number) {
    return Math.round((value / par) * 100)
}

export function KDAFormula(kills: number, assists: number, deaths: number, games: number) {
    return Math.round(((kills / games) + (assists / games) / (deaths / games)))
}

