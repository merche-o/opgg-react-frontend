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



export function timeDifference(current:number, previous:number) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}