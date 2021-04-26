import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";



export function percentagePar(value: number, par: number) {
    return Math.round((value / par) * 100)
}

export function KDAFormula(kills: number, assists: number, deaths: number, games: number) {
    return Math.round(((kills / games) + (assists / games) / (deaths / games)))
}

export function kdacolor(value: number, classes : ClassNameMap) {

    if (value >= 3.0 && value  < 4.0) {
        return  classes.greenKDA
    } else if (value >= 4.0 && value < 5.0) {
        return classes.blueKDA
    } else if (value >= 5.0) {
    return classes.yellowKDA
    }
    return ""
}

