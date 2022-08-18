function BMI (weight = 52 , height = 1.53) {

   let result =  weight / (height * height);
   return result;
}

console.log ();
let StatusText = document.getElementById(`result`)

function Status (bmi) {

    if ( bmi < 18.5 ) {

        StatusText.style.color=`orange`
        return " لديك نقص  في الوزن";

    } else if ( bmi >= 18.5 && bmi < 25) {

        StatusText.style.color=`green`
        return "وزنك صحي";

    } else if ( bmi >= 25 ) {

        StatusText.style.color=`red`
        return "لديك زيادة في الوزن";
    }
}


function calculate () {

    let weight = document.getElementById(`weight`).value;
    let height = document.getElementById(`height`).value;

    let bmi = BMI(weight,height);
    let desc = Status(bmi);

    let div = document.getElementById(`result`); 

    div.innerText = bmi + " == " + desc
}