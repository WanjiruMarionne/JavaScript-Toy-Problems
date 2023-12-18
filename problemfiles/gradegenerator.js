// Students grades classification//

function studentGrades (score){
    if (score>79 && score<101) {
        return "A";
    } else if (score>59 && score<80) {
        return "B";
    } else if (score>49 && score<60) {
        return "C";
    } else if (score>39 && score<50) {
        return "D";
    } else if (score>0 && score<40) {
        return "E";
    }
}
