

function compute(){
        var rate = document.getElementById("interest")
        var principal = document.getElementById("principal")
        var years = document.getElementById('years')

        let date = new Date()

        interest =parseInt((principal.value * years.value * (rate.value /100)))

        document.getElementById("amt").innerHTML=principal.value
        document.getElementById("rate").innerHTML = rate.value + "%"
        document.getElementById("result").innerHTML = interest
        document.getElementById("yrs").innerHTML =  date.getFullYear() + parseInt(years.value)    
}

function getRange(){
        var rate = document.getElementById("interest")
        document.getElementById("range-value").innerHTML = rate.value+"%"
}