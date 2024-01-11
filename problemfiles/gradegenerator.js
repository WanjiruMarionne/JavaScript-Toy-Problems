// Students grades classification
function studentGrades(score){
    let grade;
    if (score>79 && score<101) {
        grade="A";
    } else if (score>59 && score<80) {
        grade="B";
    } else if (score>49 && score<60) {
        grade="C";
    } else if (score>39 && score<50) {
        grade="D";
    } else if (score>0 && score<40) {
        grade="E";
    //If the input is outside the 0-100 range;
    } else {
        return "Invalid Input";
    }
        return (grade);
};