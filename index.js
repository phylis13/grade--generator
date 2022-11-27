//grde-generator

function gradeGenerator(score,total){

   let percent = (score / total) * 100
   let letterGrade = ""

   if (percent >79) {
    letterGrade = "A"
   }else if (percent >=60 && percent <=79) {
    letterGrade = "B"
   }else if (percent >=59 && percent <=49 ) {
    letterGrade = "C"

   }else if (percent >=40 && percent <=49) {
    letterGrade = "D"
   }else if (percent <40) 

    return `you got ${letterGrade} ${percent}`
}
gradeGenerator(45,50)


        
