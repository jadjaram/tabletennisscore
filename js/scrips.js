// CONTROALDOR DE CRONOMENTRO //

let stopwatchInterval;
let runningTime = 0;
let t = 0;
let counter = 0;
let whiteCard = 0;
let alternator = 0;
let valueP1 = 0;
let valueP2 = 0;
let SetPlayer1 = 0
let SetPlayer2 = 0
let resultScore = 0;
let counterReduce = 0
let discount = 0;
var ServicePlayerActive = 0
let stateSet;
let indicador = 0


select_id("BtnPlusPlayer2").disabled = true;
select_id("BtnPlusPlayer1").disabled = true;
select_id('modalCardsPlayerOne').disabled = true;
select_id('modalCardsPlayerTwo').disabled = true;
select_id('timePlayerOne').disabled = true;
select_id('timePlayerTwo').disabled = true;
select_id("initialService1").disabled = true;
select_id("initialService2").disabled = true;
select_id('finalMatch').disabled = true
select_id('warmUp').disabled = true
select_id('EndSet').disabled = true
select_id('GiroScore').disabled = true
select_id('view_match').style.pointerEvents = 'none'

select_id('play-pause').onclick = ()=> {playPause()}
select_id('stop').onclick = ()=> {stop()}
select_id('closeModal').onclick = ()=> {stop()}

select_id('timePlayerOne').onclick = ()=>{
    t = 60;
    whiteCard = 1;
  
}
// time player one
select_id('timePlayerTwo').onclick = ()=>{
    t = 60;
    whiteCard = 2;
    
}

select_id('warmUp').onclick = ()=> {
    t = 120;
    select_id('warmUp').disabled = true
}

// select_id("BtnPlusPlayer1").onclick = ()=>{incrementScore(1)}
select_id("BtnPlusPlayer1").onclick = ()=>{sumScoreP1()}
select_id("BtnPlusPlayer2").onclick = ()=>{sumScoreP2()}
select_id("BtnMinusPlayer1").onclick = ()=>{resScoreP1()}
select_id("BtnMinusPlayer2").onclick = ()=>{resScoreP2()}

const playPause = () => {
    const isPaused = !select_id('play-pause').classList.contains('running');
    if (isPaused) {
        select_id('play-pause').classList.add('running');
        start();
    } else {
        select_id('play-pause').classList.remove('running');
        pause();
    }

}

const pause = () => {

    select_id('seconds-sphere').style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () => {

    select_id('seconds-sphere').style.transform = 'rotate(-90deg) translateX(60px)';
    select_id('seconds-sphere').style.animation = 'none';
    select_id('play-pause').classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    select_id('stopwatch').textContent = '00:00';
    counter = 0;
    t = 0;
    $('#ModalTW').modal('hide');
}

const start = () => {

    if(whiteCard === 1){
        
        setCardPlayer("player1","whiteCard")
        select_id('timePlayerOne').disabled = true;
        select_id('timerPlayerOne').classList.add('cardTime')
      }
      if(whiteCard === 2){
        
        setCardPlayer("player2","whiteCard")
        select_id('timePlayerTwo').disabled = true;
        select_id('timerPlayerTwo').classList.add('cardTime')
      }
    select_id('seconds-sphere').style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    select_id('seconds-sphere').style.animationPlayState = 'running';
    stopwatchInterval = setInterval( () => {

        runningTime = Date.now() - startTime;
          counter ++;
        if(counter === t){
            stop()

            return
        }

        select_id('stopwatch').textContent = calculateTime(runningTime);
    }, 1000)

    whiteCard = 0;
}

const calculateTime = runningTime => {

    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}


// CONTROL SCORE //

// INCREMENT //

 function sumScoreP1(){

    const result = getDataLocalStorage()
        valueP2 = parseInt(select_id('player2').value)
        valueP1 = parseInt(select_id('player1').value)
        select_id("BtnMinusPlayer1").disabled = false
        valueP1 = valueP1 + 1 
        select_id('player1').value = valueP1
        alternator ++;
    if(valueP2 <= 9 && valueP1 > 10){
        
        saveScoreInLineOne(valueP1, 1);
        countSetPlayer(1)
        select_id("setPlayer1").value = result.data.Sets.player1.countSets + 1;
        select_id('setsResumePlayer1').innerHTML = result.data.Sets.player1.countSets + 1;
        select_id("BtnPlusPlayer2").disabled = true
        select_id("BtnPlusPlayer1").disabled = true
        stateSet = false
        select_id('EndSet').disabled = false;
         return
    
    }else{

        select_id('player1').value = valueP1 
        if(alternator === 2){
            serviceMatch()
        }
        saveScoreInLineOne(valueP1, 0);
  
    }
        
    if(valueP1 >=10 && valueP2 >= 10){
  
        select_id('player1').value = valueP1
    
        if(alternator === 1){
            serviceMatch()
        }
                
                let dif = 0
                dif = (valueP1 - valueP2)

                if(dif <= 1){

                saveScoreInLineOne(valueP1, 0);

                }else if(dif > 1){

                    saveScoreInLineOne(valueP1, 1);
                    countSetPlayer(1)
                    select_id("setPlayer1").value = result.data.Sets.player1.countSets + 1;
                    select_id('setsResumePlayer1').innerHTML = result.data.Sets.player1.countSets + 1;
                    select_id("BtnPlusPlayer2").disabled = true
                    select_id("BtnPlusPlayer1").disabled = true
                    stateSet = false
                    select_id('EndSet').disabled = false;
                   
                }
    }
            
  }

  function sumScoreP2(){

    const result = getDataLocalStorage()

        valueP2 = parseInt(select_id('player2').value)
        valueP1 = parseInt(select_id('player1').value)
        select_id("BtnMinusPlayer1").disabled = false
        valueP2 = valueP2 + 1 
        select_id('player2').value = valueP2
        alternator ++;
    if(valueP1 <= 9 && valueP2 > 10){
        
        saveScoreInLineTwo(valueP2, 1);
        countSetPlayer(2)
        select_id("setPlayer2").value = result.data.Sets.player2.countSets + 1;
        select_id('setsResumePlayer2').innerHTML = result.data.Sets.player2.countSets + 1;
        select_id("BtnPlusPlayer2").disabled = true
        select_id("BtnPlusPlayer1").disabled = true
        stateSet = false
        select_id('EndSet').disabled = false;
        return
    
    }else{

        select_id('player2').value = valueP2
        if(alternator === 2){
            serviceMatch()
        }
        saveScoreInLineTwo(valueP2, 0);
  
    }
        
    if(valueP2 >=10 && valueP1 >= 10){
  
        select_id('player2').value = valueP2
    
            if(alternator === 1){
                serviceMatch()
            }
                
                let dif = 0
                dif = (valueP2 - valueP1)

                if(dif <= 1){

                saveScoreInLineTwo(valueP2, 0);

                }else if(dif > 1){

                    saveScoreInLineTwo(valueP2, 1);
                    countSetPlayer(2)
                    select_id("setPlayer2").value = result.data.Sets.player1.countSets + 1;
                    select_id('setsResumePlayer2').innerHTML = result.data.Sets.player2.countSets + 1;
                    select_id("BtnPlusPlayer2").disabled = true
                    select_id("BtnPlusPlayer1").disabled = true
                    stateSet = false
                    select_id('EndSet').disabled = false;
                    
                }
    }
            
  }
  
            
// FIN AUMENTAR //

function resScoreP1(){

    const result = getDataLocalStorage()

        valueP2 = parseInt(select_id('player2').value)
        valueP1 = parseInt(select_id('player1').value)
        setPlayer1 = select_id("setPlayer1").value 
        
    if(valueP1 < 1){
        return
    }

    
      
        select_id("BtnPlusPlayer1").disabled = false

        valueP1 = valueP1 - 1 
        select_id('player1').value = valueP1
        indicador ++;
        if(indicador === 1){
            serviceMatch()
            alternator =  1
        }

        if(indicador === 2){
            serviceMatch()
        }
        indicador = 0
   
        if(setPlayer1 > 0){

            if(indicador === 1){
                //serviceMatch()
                alternator =  1
            }
            
            var data =  result.data.Sets.player1.countSets - 1
            result.data.Sets.player1.countSets = data
            localStorage.setItem("matchActual", JSON.stringify(result.data))
            const resultNew = getDataLocalStorage()
            select_id("setPlayer1").value = resultNew.data.Sets.player1.countSets;
            select_id('setsResumePlayer1').innerHTML = resultNew.data.Sets.player1.countSets;
            saveScoreInLineOne(valueP1, 0);
            countSetPlayer(1)
            select_id("BtnPlusPlayer2").disabled = false
            select_id("BtnPlusPlayer1").disabled = false
            stateSet = false
            select_id('EndSet').disabled = true;
            return
        }
 
        select_id('player1').value = valueP1 
        saveScoreInLineOne(valueP1, 0);       
        
            
  }

  function resScoreP2(){

    const result = getDataLocalStorage()

    valueP2 = parseInt(select_id('player2').value)
    valueP1 = parseInt(select_id('player1').value)
    setPlayer2 = select_id("setPlayer2").value 
    
if(valueP2 < 1){
    return
}


  
    select_id("BtnPlusPlayer2").disabled = false

    valueP2 = valueP2 - 1 
    select_id('player2').value = valueP2
    indicador ++;
    if(indicador === 1){
        serviceMatch()
        alternator =  1
    }

    if(indicador === 2){
        serviceMatch()
    }
    indicador = 0

    if(setPlayer2 > 0){

        if(indicador === 1){
            //serviceMatch()
            alternator =  1
        }
        
        var data =  result.data.Sets.player2.countSets - 1
        result.data.Sets.player2.countSets = data
        localStorage.setItem("matchActual", JSON.stringify(result.data))
        const resultNew = getDataLocalStorage()
        select_id("setPlayer2").value = resultNew.data.Sets.player2.countSets;
        select_id('setsResumePlayer2').innerHTML = resultNew.data.Sets.player2.countSets;
        saveScoreInLineTwo(valueP2, 0);
        countSetPlayer(2)
        select_id("BtnPlusPlayer2").disabled = false
        select_id("BtnPlusPlayer1").disabled = false
        stateSet = false
        select_id('EndSet').disabled = true;
        return
    }

    select_id('player2').value = valueP2 
    saveScoreInLineTwo(valueP2, 0);       
    
            
  }







// END CONTROL SCORE PLAYERS /

// CONTROLS SERVICE
function serviceMatch(){
    
    discount = counterReduce
    counterReduce = 0;
    alternator = 0;
    const result =  getDataLocalStorage()

    if(result.data.InitialService.player1 === true){
        select_id('serviceTwo').classList.add('active')
        select_id('serviceOne').classList.remove('active')
        result.data.InitialService.player2 = true;
        result.data.InitialService.player1 = false
    }else{
        select_id('serviceTwo').classList.remove('active')
        select_id('serviceOne').classList.add('active')
        result.data.InitialService.player2 = false;
        result.data.InitialService.player1 = true
    }

    localStorage.setItem("matchActual", JSON.stringify(result.data))

    

}

function changeService(){

    counterReduce = 0;
    const result =  getDataLocalStorage()

    if(result.data.InitialService.player1 === true){
        select_id('serviceTwo').classList.add('active')
        select_id('serviceOne').classList.remove('active')
        result.data.InitialService.player2 = true;
        result.data.InitialService.player1 = false
    }else{
        select_id('serviceTwo').classList.remove('active')
        select_id('serviceOne').classList.add('active')
        result.data.InitialService.player2 = false;
        result.data.InitialService.player1 = true
    }

    localStorage.setItem("matchActual", JSON.stringify(result.data))

}


    //PLAYER ONE CONTROLLER CARDS IN SETS
 
        select_id('yellowCardModal').onclick = ()=>{
        select_id('YellowPlayerOne').classList.add('cardYellow')
        setCardPlayer("player1", "yellowCard")
        }
        select_id('doubleYellowModal').onclick = ()=> {
        select_id('doubleYellowP1').classList.add('cardDoubleYellow')
        setCardPlayer("player1", "doubleYellowModal")

        }
        select_id('redCardModal').onclick = ()=> {
        select_id('redPlayerOne').classList.add('cardRed')
        setCardPlayer("player1", "redCardModal")
        }
  

     //player Two controller cards

    select_id('yellowCardModalP2').onclick = ()=>{
    select_id('YellowPlayerTwo').classList.add('cardYellow')
    setCardPlayer("player2", "yellowCard")
    }

    select_id('doubleYellowP2').onclick = ()=> {
        select_id('playerTwoDoubleYellowCard').classList.add('cardDoubleYellow')
        setCardPlayer("player2", "doubleYellowModal")
    }

    select_id('redCardModalP2').onclick = ()=> {
    select_id('redPlayerTwo').classList.add('cardRed')
    //setCardPlayer("player2", "redCardModal")

    }
  
// SERVICE INITIAL
  select_id('initialService1').onclick = ()=>{

    select_id("serviceOne").classList.add("active")
    select_id("initialService1").disabled = true;
    select_id("initialService2").style.display = "none";
    select_id("BtnPlusPlayer2").disabled = false;
    select_id("BtnPlusPlayer1").disabled = false;
    select_id('modalCardsPlayerOne').disabled = false;
    select_id('modalCardsPlayerTwo').disabled = false;
    select_id('timePlayerOne').disabled = false;
    select_id('timePlayerTwo').disabled = false;
    saveServicePlayer(1)

  }

  select_id('initialService2').onclick = ()=>{

    select_id("serviceTwo").classList.add("active")
    select_id("initialService1").style.display = "none";
    select_id("initialService2").disabled = true
    select_id("BtnPlusPlayer2").disabled = false;
    select_id("BtnPlusPlayer1").disabled = false;
    select_id('modalCardsPlayerOne').disabled = false;
    select_id('modalCardsPlayerTwo').disabled = false;
    select_id('timePlayerOne').disabled = false;
    select_id('timePlayerTwo').disabled = false;
    saveServicePlayer(2)
  
  }

 // FIN CONTROLADOR TARJETAS //


 //CONTROL CHANGE

 select_id('EndSet').onclick = ()=> changeSet()

 function changeSet(){

    stateSet = true;
    const result =  getDataLocalStorage()//Storage
    result.data.stateSet = stateSet
    localStorage.setItem("matchActual", JSON.stringify(result.data))
    if(result.data.bestOf === "7" && result.data.Sets.player1.countSets === 4 && result.data.Sets.player2.countSets === 3 || result.data.Sets.player1.countSets === 3 && result.data.Sets.player2.countSets === 4 ){
   
         Swal.fire({
           position: 'center',
           icon: 'error',
           title: 'La Partida a Finalizado',
           showConfirmButton: false,
           timer: 1500
         })
         return
    }
   
    if(result.data.bestOf === "5" && result.data.Sets.player1.countSets === 3 && result.data.Sets.player2.countSets === 2 || result.data.Sets.player1.countSets === 2 && result.data.Sets.player2.countSets === 3 ){
   
         Swal.fire({
           position: 'center',
           icon: 'error',
           title: 'La Partida a Finalizado',
           showConfirmButton: false,
           timer: 1500
         })
         return
    }
    value1 = 0;
    value2 = 0;

    select_id('box-player1').classList.toggle('order-2');
    select_id('box-player2').classList.toggle('order-0');
    select_id('table-grid').classList.toggle('order-1')
    select_id('table-p1').classList.toggle('changeP1');
    select_id('table-p2').classList.toggle('changeP2')
    select_id('box-btn-scoreP1').classList.toggle('order-2')
    select_id('box-btn-scoreP2').classList.toggle('order-0')
    select_id('BtnPlusPlayer1').classList.toggle('order-2')
    select_id('BtnPlusPlayer2').classList.toggle('order-2')
    select_id('BtnMinusPlayer2').classList.toggle('order-3')
    select_id('modalCardsPlayerOne').classList.toggle('order-4')
    select_id('initialService1').classList.toggle('order-2')
    select_id('timePlayerOne').classList.toggle('order-1')
    select_id('modalCardsPlayerTwo').classList.toggle('order-2')
    select_id('initialService2').classList.toggle('order-3')
    select_id('timePlayerTwo').classList.toggle('order-4')

    select_id(`player1`).value = 0
    select_id(`player2`).value = 0

    select_id("BtnPlusPlayer2").disabled = false;
    select_id("BtnPlusPlayer1").disabled = false;
    CountSet()

   if(stateSet === true){
        select_id('EndSet').disabled = true;
    }

    //if(result.data.service.player1 === false){
    //    serviceMatch()
   // }
    

 }

 select_id('finalMatch').onclick = ()=>{
    
    Swal.fire({
        title: 'Desea Conservar la Información?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        
          saveMatchFinal()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La información fue guardada',
            showConfirmButton: false,
            timer: 1500
          })

        } else if (result.isDenied) {
          deleteStorage()
          Swal.fire('No se guardaron cambios', '', 'info')
        }
      })


}

select_id('GiroScore').onclick = ()=>{changeSide()}

function changeSide(){

    const result = getDataLocalStorage()
    if(result.data){
        var setsForMatch = result.data.bestOf
        if(setsForMatch === "5" && result.data.Sets.player1.countSets === 2 && result.data.Sets.player2.countSets === 2){
            giro()
        }
        else if(setsForMatch === "7" && result.data.Sets.player1.countSets === 3 && result.data.Sets.player2.countSets === 3){
            giro()
        }else{
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: `No hay igualdad al mejor de ${result.data.bestOf} sets`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

}

function giro(){

    select_id('box-player1').classList.toggle('order-2');
    select_id('box-player2').classList.toggle('order-0');
    select_id('table-grid').classList.toggle('order-1')
    select_id('table-p1').classList.toggle('changeP1');
    select_id('table-p2').classList.toggle('changeP2')
    select_id('box-btn-scoreP1').classList.toggle('order-2')
    select_id('box-btn-scoreP2').classList.toggle('order-0')
    select_id('BtnPlusPlayer1').classList.toggle('order-2')
    select_id('BtnPlusPlayer2').classList.toggle('order-2')
    select_id('BtnMinusPlayer2').classList.toggle('order-3')
    select_id('modalCardsPlayerOne').classList.toggle('order-4')
    select_id('initialService1').classList.toggle('order-2')
    select_id('timePlayerOne').classList.toggle('order-1')
    select_id('modalCardsPlayerTwo').classList.toggle('order-2')
    select_id('initialService2').classList.toggle('order-3')
    select_id('timePlayerTwo').classList.toggle('order-4')
}

 function select_id(id) {
    return document.getElementById(id)
  }

  // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            console.log(forms);
          }else{
            saveInfoMatch()
          }
  
          form.classList.add('was-validated')
         // 
        }, false)
      })
  })()


            
                            // if(valueP1 === 10 && setsForMatch === "5" && parseInt(select_id("setPlayer1").value) === 2 && valueP2 < 10 ){
                            //     select_id('set-point1').classList.add('active')
                            //     select_id('set-point1').innerText = "SET POINT"   
                            // }else{
                            //      select_id('set-point1').innerText = ""
                            //      select_id('set-point1').classList.remove('active')
                            // }

                            // if(valueP1 === 10 && setsForMatch === "7" && parseInt(select_id("setPlayer1").value) === 3 && valueP2 < 10 ){
                            //     select_id('set-point1').classList.add('active')
                            //     select_id('set-point1').innerText = "SET POINT"   
                            // }else{
                            //      select_id('set-point1').innerText = ""
                            //      select_id('set-point1').classList.remove('active')
                            // }
