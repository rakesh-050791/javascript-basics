// Students score, total possible score 
// 15/20 : you got C (75%)
// A 90 - 100, B 80 - 89 , C 70 - 79, D 60 - 69 , E 50 - 59


let gradeCalculator = function(scoreSecured, possibleScore) {

    let percentage = (scoreSecured / possibleScore) * 100
    let letterGrade = ''

    if (percentage >= 90) {

        letterGrade = 'A'

    } else if (percentage >= 80) {

        letterGrade = 'B'

    } else if (percentage >= 70) {

        letterGrade = 'C'

    } else if (percentage >= 60) {

        letterGrade = 'D'
 
    } else if (percentage >= 50) {

        letterGrade = 'E'

    } else {
        letterGrade = 'F'
    }

    return `You got ${letterGrade} with ${percentage}%`
}

let percentage = gradeCalculator(34, 50)
console.log(percentage)