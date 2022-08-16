
// ------------------------------------------
let sel = document.querySelector(".typelineTo") ;
// ------------------------------------------



let sel2 = document.querySelector(".lineFrom") ;




// ------------------------------------------

let selfrom = document.querySelector(".typelineFrom")

// ------------------------------------------


let lineOne = {
    "New El-Marg" : 1
    , "el marg":2
    , "Ezbet El-Nakhl" : 3 ,
    "Ain Shams" :4 ,
        "El-Matareyya" :5 ,
        "Helmeyet El-Zaitoun":6 ,
        "Hadayeq El-Zaitoun":7 ,
            "Saray El-Qobba":8 ,
            "Hammamat El-Qobba" :9 ,
            "Kobri El-Qobba" : 10 ,
            "Manshiet El-Sadr" :11 ,
                "El-Demerdash" :12 ,"Ghamra" :13 ,
                "Al-Shohadaa" :14 ,
                "Orabi" : 15 ,
                "Nasser" : 16 ,
                    "Sadat" : 17
                    , "Saad Zaghloul" : 18 ,
                    "Al-Sayeda Zeinab" :19 ,
                    "El-Malek El-Saleh"  : 20 ,
                    "Mar Girgis" : 21,
                    "El-Zahraa" : 22, 
                    "Dar El-Salam" :23  ,
                    "Hadayek El-Maadi"  : 24,
                    "Maadi" : 25  
                    , "Sakanat El-Maadi" :26
                        , "Tora El-Balad" :27
                        , "Kozzika" :28 ,
                        "Tora El-Asmant" : 29 
                        , "El-Maasara": 30 ,
                        "Hadayek Helwan" : 31 
                        , "Wadi Hof" :32 
                        , "Helwan University" : 33 ,
                        "Ain Helwan" : 34 ,
                        "Helwan"  :35    
}



let lineTwo = {
    "El-Mounib" : 1 , 
    "Sakiat Mekki" : 2 , 
    "Omm El-Misryeen"  : 3 ,
    "Giza" : 4 , 
    "Faisal" : 5 ,
    "Cairo University" : 6 ,
    "Bohooth" : 7 ,
    "Dokki" : 8 ,
    "Opera" : 9 ,
    "Sadat" : 10 ,
    "Mohamed Naguib" : 11 , 
    "Ataba" : 12 ,
    "Massara" : 13 , 
    "Rod El-Farag" : 14 ,
    "St. Teresa" : 15 ,
    "El-Khalafawy" : 16 ,
    "El-Mezallat" : 17 ,
    "Kolleyyet El-Zeraa" : 18 ,
    "Shubra El-Kheima" : 19

}

// Line 3


let lineThree = {

    "Haykstep" : 1 ,
    "Omar Ibn El Khatab" : 2 ,
    "Qubaa" : 3 ,
    "Hisham Barakat" :4 ,
    "El Nozha" : 5 , 
    "El Shams Club" : 6 ,
    "Alf Masken" : 7 , 
    "Heliopolis" : 8 , 
    "Haroun" : 9 ,
    "Al Ahram" : 10 ,
    "Kolleyet El Banat" : 11 ,
    "Staduim" : 12 ,
    "Fair Zone" : 13 , 
    "Abbasia" : 14 ,
    "Abdou Pasha" : 15 , 
    "El Giesh" : 16 ,
    "Bab El Shaaria" : 17 ,
    "Ataba" : 18

}



console.log(sel) ; 

let lineTo = document.querySelector(".lineTo") ; 



console.log(lineTo) ; 


sel.onchange = function(e){
console.log(e.target.value) ; 

let val = e.target.value ; 
if(val.match(/linetwo|lineone|linethree/)){
    let count = document.querySelectorAll('.stationTo') ;
            for(let  i = 0 ; i < count.length ;i++ )
            {
                lineTo.removeChild(count[i]) ; 
            }
    if(val.match('linetwo')){
        let count = document.querySelectorAll('.stationTo') ;
            for(let  i = 0 ; i < document.querySelectorAll('.stationTo').length ;i++ )
            {
                lineTo.removeChild(count[i]) ; 
            }
        for(let item in lineTwo )
        {
            let element = document.createElement("option") ; 
            element.className = "stationTo" ;
            let textnode = document.createTextNode(item) ; 
            element.appendChild(textnode) ; 
            lineTo.appendChild(element)  ;
            lineTo.removeAttribute("disabled")
        }
console.log(document.querySelectorAll(".stationTo").length) ; 

    }
    else if(val.match('lineone')){
            let count = document.querySelectorAll('.stationTo') ;
            for(let  i = 0 ; i < document.querySelectorAll('.stationTo').length ;i++ )
            {
                lineTo.removeChild(count[i]) ; 
            }
        for(let item in lineOne )
        {
            
            let element = document.createElement("option") ; 
            element.className = "stationTo" ;
            let textnode = document.createTextNode(item) ; 
            element.appendChild(textnode) ; 
            lineTo.appendChild(element)  ;
            lineTo.removeAttribute("disabled")
        }
console.log(document.querySelectorAll(".stationTo").length) ; 

    }

    else if(val.match('linethree')){
        console.log("Hello In Line Three") ; 
    let count = document.querySelectorAll(".stationTo") ; 
    for(let  i = 0 ; i < count.length ;i++ ){
                
                    lineTo.removeChild(count[i]) ;  
                
    }
    for(let item in lineThree)
        {
            
            let element = document.createElement("option") ; 
            element.className = "stationTo" ;
            let textnode = document.createTextNode(item) ; 
            element.appendChild(textnode) ; 
            lineTo.appendChild(element)  ;
            lineTo.removeAttribute("disabled")
        }
    
    }
else{
    console.log('Not Equal') ; 
}

}
}

let lineFrom = document.querySelector(".lineFrom") ; 


// From
selfrom.onchange = function(e){
    console.log(e.target.value) ; 
    
    let val = e.target.value ; 
    if(val.match(/linetwo|lineone|linethree/)){
        let count = document.querySelectorAll('.stationFrom') ;
                for(let  i = 0 ; i < count.length ;i++ )
                {
                    lineFrom.removeChild(count[i]) ; 
                }
        if(val.match('linetwo')){
            let count = document.querySelectorAll('.stationFrom') ;
                for(let  i = 0 ; i < document.querySelectorAll('.stationFrom').length ;i++ )
                {
                    lineFrom.removeChild(count[i]) ; 
                }
            for(let item in lineTwo )
            {
                let element = document.createElement("option") ; 
                element.className = "stationFrom" ;
                let textnode = document.createTextNode(item) ; 
                element.appendChild(textnode) ; 
                lineFrom.appendChild(element)  ;
                lineFrom.removeAttribute("disabled")
            }
    console.log(document.querySelectorAll(".stationFrom").length) ; 
    
        }
        else if(val.match('lineone')){
                let count = document.querySelectorAll('.stationFrom') ;
                for(let  i = 0 ; i < document.querySelectorAll('.stationFrom').length ;i++ )
                {
                    lineFrom.removeChild(count[i]) ; 
                }
            for(let item in lineOne )
            {
                
                let element = document.createElement("option") ; 
                element.className = "stationFrom" ;
                let textnode = document.createTextNode(item) ; 
                element.appendChild(textnode) ; 
                lineFrom.appendChild(element)  ;
                lineFrom.removeAttribute("disabled")
            }
    console.log(document.querySelectorAll(".stationFrom").length) ; 
    
        }
    
        else if(val.match('linethree')){
            console.log("Hello In Line Three") ; 
        let count = document.querySelectorAll(".stationFrom") ; 
        for(let  i = 0 ; i < count.length ;i++ ){
                    
                        lineFrom.removeChild(count[i]) ;  
                    
        }
        for(let item in lineThree)
            {
                
                let element = document.createElement("option") ; 
                element.className = "stationFrom" ;
                let textnode = document.createTextNode(item) ; 
                element.appendChild(textnode) ; 
                lineFrom.appendChild(element)  ;
                lineFrom.removeAttribute("disabled")
            }
        
        }
    else{
        console.log('Not Equal') ; 
    }
    
    }
    }



    // The From Value  And To Value 




    let form  = document.querySelector(".kform") ;
    
    console.log(form) ; 
    
    form.onsubmit = function(){

        let from = document.querySelector(".lineFrom").value ; 
    
        let to = document.querySelector(".lineTo" ).value ; 

        // Line 1 To Line 2  && Line 1 To Line 3
        if((lineOne[from] !==undefined && lineTwo[to] !== undefined ) || (lineOne[from] !== undefined &&  lineThree[to] !== undefined))
        {

            // Line 1  To line 2
            if(sel.value  == "linetwo"){
                if(lineOne[from] <= 15){
            let re = Math.abs(lineOne[from] - lineOne["Al-Shohadaa"]) + 1 ;
            re += Math.abs(lineTwo["Ataba"] - lineTwo[to]) + 1 ;
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else {
                document.querySelector(".price").innerHTML = "10 LE" ;
            }
            return false ; 
        }
        else{
            let re = Math.abs(lineOne[from] - lineOne["Sadat"]) + 1 ;
            re += Math.abs(lineTwo["Ataba"] - lineTwo[to]) + 1 ;
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else {
                document.querySelector(".price").innerHTML = "10 LE" ;
            }
            return false ; 
        }
        }
        if(sel.value  == "linethree"){
            if(lineOne[from] <= 15){
            let re = Math.abs(lineOne[from] - lineOne["Al-Shohadaa"]) + 1 ;
            re += Math.abs(lineThree["Ataba"] - lineThree[to]) + 1 ;
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else {
                document.querySelector(".price").innerHTML = "10 LE" ;
            }
            return false ; 
        }
        else{
            let re = Math.abs(lineOne[from] - lineOne["Sadat"]) + 1 ;
            re += Math.abs(lineThree["Ataba"] - lineThree[to]) + 1 ;
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else {
                document.querySelector(".price").innerHTML = "10 LE" ;
            }
            return false ; 
        }
        }

        }

        // Line 2 To line 1 && Line 2  To Line 3
        
        if((lineTwo[from] !==undefined && lineOne[to] !== undefined ) || (lineTwo[from] !== undefined &&  lineThree[to] !== undefined))
        {

            // Line 2  To line 1
            if(sel.value  == "lineone"){
                if(lineOne[from] <=15){
            let re = Math.abs(lineTwo[from] - lineTwo["Ataba"]) + 1 ;
            re += Math.abs(lineOne["Al-Shohadaa"] - lineOne[to]) + 1 ;
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else {
                document.querySelector(".price").innerHTML = "10 LE" ;
            }
            return false ; 
        }
        else{
            let re = Math.abs(lineTwo[from] - lineTwo["Ataba"]) + 1 ;
            re += Math.abs(lineOne["Sadat"] - lineOne[to]) + 1 ;
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else {
                document.querySelector(".price").innerHTML = "10 LE" ;
            }
            return false ; 
        }
        }
        // Line 2 To Line 3
        if(sel.value  == "linethree"){
            let re = Math.abs(lineTwo[from] - lineTwo["Ataba"]) + 1 ;
            re += Math.abs(lineThree["Ataba"] - lineThree[to])  ;
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else {
                document.querySelector(".price").innerHTML = "10 LE" ;
            }
            return false ; 
        }

        }



        // Line 3 TO Line 2 && Line 3 To line 1

        if((lineThree[from] !==undefined && lineTwo[to] !== undefined ) || (lineThree[from] !== undefined &&  lineOne[to] !== undefined))
        {

            // Line 2  To line 1
            if(sel.value  == "linetwo"){
                
            let re = Math.abs(lineThree[from] - lineThree["Ataba"]) + 1 ;
            re += Math.abs(lineTwo["Ataba"] - lineTwo[to])  ;
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else {
                document.querySelector(".price").innerHTML = "10 LE" ;
            }
            return false ; 
        
        
        }
        // Line 2 To Line 3
        if(sel.value  == "lineone"){
            if(lineOne[from] <= 15){
            let re = Math.abs(lineThree[from] - lineThree["Ataba"]) + 1 ;
            re += Math.abs(lineOne["Al-Shohadaa"] - lineOne[to])  ;
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else {
                document.querySelector(".price").innerHTML = "10 LE" ;
            }
            return false ; 
        }

        else{
            let re = Math.abs(lineThree[from] - lineThree["Ataba"]) + 1 ;
            re += Math.abs(lineOne["Sadat"] - lineOne[to])  ;
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else {
                document.querySelector(".price").innerHTML = "10 LE" ;
            }
            return false ; 
        }
        }

        }





        

        if((lineOne[to] !== undefined && lineOne[from] !== undefined) || (lineTwo[to] !== undefined && lineTwo[from] !== undefined) || (lineThree[to] !== undefined && lineThree[from] !== undefined) ){
            

            if(sel.value == "lineone")
            {
                console.log("Welcome To First Case") ;
                let re = Math.abs(lineOne[to] - lineOne[from] +1) ; 
            console.log("Inside Line 1" ) ; 
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else{
                document.querySelector(".price").innerHTML = "10 LE" ;
            }


            }
            if(sel.value == "linetwo" )
            {
                console.log("Welcome To First Case") ;
                let re = Math.abs(lineTwo[to] - lineTwo[from] +1) ; 
            console.log("Inside Line 2" ) ; 
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else{
                document.querySelector(".price").innerHTML = "10 LE" ;
            }


            }
            if(sel.value == "linethree")
            {
                console.log("Welcome To First Case") ;
                let re = Math.abs(lineThree[to] - lineThree[from] +1) ; 
            console.log("Inside Line 2" ) ; 
            if(re <= 9 ){
                document.querySelector(".price").innerHTML = "5 LE" ; 
    
            }
            else if(re <= 16 ){
                document.querySelector(".price").innerHTML = "7 LE" ;
            }
            else{
                document.querySelector(".price").innerHTML = "10 LE" ;
            }


            }
    
    
            return false;
        }

        

    }



