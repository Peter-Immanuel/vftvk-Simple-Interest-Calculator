function compute(){
        var rate = document.getElementById("interest")
        var principal = document.getElementById("principal")
        var years = document.getElementById('years')

        if (principal.value < 1 ){
                alert("Enter a Positive number!!")
        }
        else{        
                interest =parseInt((principal.value * years.value * (rate.value /100)))
                document.getElementById("amt").innerHTML=principal.value
                document.getElementById("rate").innerHTML = rate.value + "%"
                document.getElementById("result").innerHTML = interest
                document.getElementById("yrs").innerHTML =  new Date().getFullYear() + parseInt(years.value)
        }
}

function getRange(){
        var rate = document.getElementById("interest")
        document.getElementById("range-value").innerHTML = rate.value+"%"
}

function yearsList(){
        var newOption = document.createElement("option")
        var yearsNum = document.getElementById("years")

        for(var i = 1; i<=20; i++){
                yearsNum.appendChild(Map(newOption.value, i))
        }
}
onload(getRange());
onload(yearsList());
yes