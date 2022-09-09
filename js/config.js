//$('#ModalTW').modal({backdrop: 'static', keyboard: false})

const urlFlagsCountry = 'https://countryflagsapi.com/png/';
var selectedCountry;
var dataSaveLocal = {};
var score1 = select_id('player1').value;
var score2 = select_id('player2').value;
var setPlayer1 = select_id('setPlayer1').value;
var setPlayer2 = select_id('setPlayer2').value;

select_id('box-dobles').style.display = 'none'

var modoDoubles = select_id('modoDobles')
var modoIndividual = select_id('modoIndividual')
var bestOfThree = select_id('bestOfThree')
var bestOfFour = select_id('bestOfFour')

modoDoubles.addEventListener('change', validateCheck, false)
modoIndividual.addEventListener('change', validateCheckInd, false)
bestOfFour.addEventListener('change', validateSetInGame,false)
bestOfThree.addEventListener('change', validateSetIn,false)

getPaises();
getDataLocalStorage()
readDataLocal();
CountSet()

function validateSetInGame(){
  var checked = bestOfFour.checked
  if(checked){
    bestOfThree.checked = false
  }
}

function validateSetIn(){
  var checked = bestOfThree.checked
  if(checked){
    bestOfFour.checked = false
  }
}

function validateCheck(){

  var checked = modoDoubles.checked
  if(checked){
    select_id('box-individual').style.display = 'none'
    select_id('box-dobles').style.display = 'block'
    modoIndividual.checked = false
  }
  
}

function validateCheckInd(){

  var checked = modoIndividual.checked
  if(checked){
    select_id('box-individual').style.display = 'block'
    select_id('box-dobles').style.display = 'none'
    modoDoubles.checked = false
  }
}


// api flags 
 function getPaises(){

    let url = 'https://restcountries.com/v3.1/all'
   fetch(url)
    .then(response => response.json())
    .then(data => {

        var countries = Array.from(data)
            
        countries.map((country, index)=>{

      var orderCountries = countries.sort((a, b) => b.name.common.localeCompare(a.name.common))

            var paisOption = document.createElement("option");
            var pais2Option = document.createElement("option");
            var pais3Option = document.createElement("option");
            var pais4Option = document.createElement("option");

            paisOption.className = 'pais_option'
            paisOption.value = orderCountries[index].name.common
            paisOption.text = orderCountries[index].name.common
            pais.prepend(paisOption)

            paisOption.className = 'pais_option'
            pais2Option.value = orderCountries[index].name.common
            pais2Option.text = orderCountries[index].name.common
            pais2.prepend(pais2Option)

            paisOption.className = 'pais_option'
            pais3Option.value = orderCountries[index].name.common
            pais3Option.text = orderCountries[index].name.common
            pais3.prepend(pais3Option)

            paisOption.className = 'pais_option'
            pais4Option.value = orderCountries[index].name.common
            pais4Option.text = orderCountries[index].name.common
            pais4.prepend(pais4Option)

        })
    })
    
  }

  select_id('pais').onchange = ()=>{flagsPrepend(1)}
  select_id('pais2').onchange = ()=>{flagsPrepend(2)}
  select_id('pais3').onchange = ()=>{flagsPrepend(3)}
  select_id('pais4').onchange = ()=>{flagsPrepend(4)}

  function flagsPrepend(n){

    if(n === 1){

        selectedCountry = select_id("pais").value
        select_id('imgNation').src = urlFlagsCountry + selectedCountry

    }else if(n===2){
        selectedCountry = select_id("pais2").value
        select_id('imgNation2').src = urlFlagsCountry + selectedCountry

    }else if(n===3){
      selectedCountry = select_id("pais3").value
      select_id('imgNation3').src = urlFlagsCountry + selectedCountry

    }else if(n===4){
      selectedCountry = select_id("pais4").value
      select_id('imgNation4').src = urlFlagsCountry + selectedCountry

    }
  }

   
    // select_id("saveData").onclick = ()=>{

    // }


function saveInfoMatch(){
  
  var player1 =  select_id('modalInputPlayer1').value
  var countryP1 =  select_id('pais').value
  var flagP1 = select_id('imgNation').src
  var player2 =  select_id('modalInputPlayer2').value
  var countryP2 =  select_id('pais2').value
  var flagP2 = select_id('imgNation2').src
  var title = select_id('TournamentTitle').value
  var category = select_id('category').value
  var dateTournament = select_id('dateTournament').value
  var round = select_id('round').value
  var player1ADouble = select_id('Player1A_doubles').value
  var player1BDouble = select_id('Player1B_doubles').value
  var player2ADouble = select_id('Player2A_doubles').value
  var player2BDouble = select_id('Player2B_doubles').value
  var flag_doubleOne = select_id('imgNation3').src
  var flag_doubleTwo = select_id('imgNation4').src
  var modo;
  var numberSets = ""
  var checkedIndividual = modoIndividual.checked
  var checkedDoubles = modoDoubles.checked
  var checkedFour = bestOfFour.checked
  var checkedThree = bestOfThree.checked

  if(checkedIndividual){
     modo = modoIndividual.value
  }

  if(checkedDoubles){
    modo = modoDoubles.value
 }

 if(checkedFour){
  numberSets = select_id('bestOfFour').value
 }

 if(checkedThree){
  numberSets = select_id('bestOfThree').value
 }

  dataSaveLocal.match = `match-`+ Math.floor(Math.random() * 10000);
  dataSaveLocal.title = title
  dataSaveLocal.date = dateTournament
  dataSaveLocal.category = category
  dataSaveLocal.bestOf = numberSets
  dataSaveLocal.round = round
  dataSaveLocal.modality = modo
  dataSaveLocal.PlayerDoubles = [player1ADouble + " / " + player1BDouble, player2ADouble + " / " +            player2BDouble]
  dataSaveLocal.flagsDoubles = [flag_doubleOne, flag_doubleTwo]
  dataSaveLocal.players = [player1, player2]
  dataSaveLocal.country = [countryP1, countryP2]
  dataSaveLocal.flags = [flagP1, flagP2]
  dataSaveLocal.sumSets = 0
  dataSaveLocal.service = {
    servicePlayer1:false,
    servicePlayer2:false
  }
  dataSaveLocal.stateSet = null
  dataSaveLocal.service = {
    player1: false,
    player2: false,
  }
  dataSaveLocal.InitialService = {
    player1:false,
    player2:false
  }
  dataSaveLocal.Sets = {
    player1:{
      score:[0,0,0,0,0,0,0],
      sets:[0,0,0,0,0,0,0],
      countSets: 0,
    },

    player2:{
      score:[0,0,0,0,0,0,0],
      sets:[0,0,0,0,0,0,0],
      countSets: 0,
    }
  }

  dataSaveLocal.cards= {
    player1:{
      yellowCard: false,
      doubleYellow: false,
      redCard: false,
      time: false,

    },
    player2:{
      yellowCard: false,
      doubleYellow: false,
      redCard: false,
      time: false,
    }
  }

  // select_id("initialService1").disabled = false;
  // select_id("initialService2").disabled = false;
  saveLocalStorage("matchActual", dataSaveLocal)
  window.open('https://jadjaram.github.io/tabletennisscore/escore.html')
}

function saveLocalStorage(key,data){
      
        localStorage.setItem(key, JSON.stringify(data))
        
        readDataLocal()
}


function readDataLocal(){
    
  const result = getDataLocalStorage()

  var newDoublesOne = []
  var newDoublesTwo = []

      if(!result.data){

        select_id('flag_player1').style.display = 'none'
        select_id('flag_player2').style.display = 'none'
        select_id('table_match').classList.add('inactive')
 
      }else{

        select_id('finalMatch').disabled = false
        select_id('warmUp').disabled = false
        select_id('timePlayerOne').disabled = false;
        select_id('timePlayerTwo').disabled = false;
        select_id("initialService1").disabled = false;
        select_id("initialService2").disabled = false;
        select_id('GiroScore').disabled = false


          if(result.data.modality === "dobles"){
          
            const doublesOne = result.data.PlayerDoubles[0]
            const doublesTwo = result.data.PlayerDoubles[1]
             newDoublesOne = doublesOne.split(" ")
             newDoublesTwo = doublesTwo.split(" ")
          }
          
              if(result.data.modality === "individual"){

                if(result.data.flags[0] != "" && result.data.flags[1] != ""){

                  select_id('inputPlayer1').value = result.data.players[0]
                  select_id('inputPlayer2').value = result.data.players[1]
                  select_id('flag_player1').src = result.data.flags[0]
                  select_id('flag_player2').src = result.data.flags[1]
                  select_id('resumePlayer1').src = result.data.flags[0]
                  select_id('resumePlayer2').src = result.data.flags[1]
                  select_id('tableResumePlayer1').innerHTML = result.data.players[0]
                  select_id('tableResumePlayer2').innerHTML = result.data.players[1]

                }

              }

              if(result.data.modality === "dobles"){

                select_id('flag_player1').src = result.data.flagsDoubles[0]
                select_id('flag_player2').src = result.data.flagsDoubles[1]

                select_id('inputPlayer1').value = newDoublesOne[1] + " / " + newDoublesOne[4]
                select_id('inputPlayer2').value = newDoublesTwo[1] + " / " + newDoublesTwo[4]
      
                select_id('resumePlayer1').src = result.data.flagsDoubles[0]
                select_id('resumePlayer2').src = result.data.flagsDoubles[1]

                select_id('tableResumePlayer1').innerHTML = newDoublesOne[1] + " / " + newDoublesOne[4]
                select_id('tableResumePlayer2').innerHTML = newDoublesTwo[1] + " / " + newDoublesTwo[4]
      
              }   
        
        if(result.data.modality === "individual" || result.data.modality === "dobles"){

          if(result.data.InitialService.player1 === true){
            select_id("initialService2").style.display = "none";
            select_id("BtnPlusPlayer2").disabled = false;
            select_id("initialService1").disabled = true;
            select_id("BtnPlusPlayer2").disabled = false;
            select_id("BtnPlusPlayer1").disabled = false;
              select_id('serviceTwo').classList.remove('active')
              select_id('serviceOne').classList.add('active')
          }

          if(result.data.InitialService.player2 === true){
            select_id("initialService1").style.display = "none";
            select_id("BtnPlusPlayer2").disabled = false;
            select_id("initialService2").disabled = true;
            select_id("BtnPlusPlayer2").disabled = false;
            select_id("BtnPlusPlayer1").disabled = false;
            select_id('serviceTwo').classList.add('active')
            select_id('serviceOne').classList.remove('active')
          }
          
          if(result.data.cards.player1.time === true){
            select_id('timePlayerOne').disabled = true;
            select_id('timerPlayerOne').classList.add('cardTime')
          }
          if(result.data.cards.player2.time === true){
            select_id('timePlayerTwo').disabled = true;
            select_id('timerPlayerTwo').classList.add('cardTime')
          }
  
          if(result.data.cards.player1.yellowCard === true){
            select_id('YellowPlayerOne').classList.add('cardYellow')
          }
  
          if(result.data.cards.player2.yellowCard === true){
            select_id('YellowPlayerTwo').classList.add('cardYellow')
          }
  
          if(result.data.cards.player1.doubleYellow === true){
            select_id('doubleYellowP1').classList.add('cardDoubleYellow')
          }
  
          if(result.data.cards.player1.redCard === true){
            select_id('redPlayerOne').classList.add('cardRed')
          }
  
          if(result.data.cards.player2.doubleYellow === true){
            select_id('playerTwoDoubleYellowCard').classList.add('cardDoubleYellow')
          }
  
          if(result.data.cards.player2.redCard === true){
            select_id('redPlayerTwo').classList.add('cardRed')
          }
  
        }

        select_id("setPlayer1").value  = result.data.Sets.player1.countSets
        select_id('tablaSet0P1').innerHTML = result.data.Sets.player1.score[0]
        select_id('tablaSet1P1').innerHTML = result.data.Sets.player1.score[1] 
        select_id('tablaSet2P1').innerHTML = result.data.Sets.player1.score[2] 
        select_id('tablaSet3P1').innerHTML = result.data.Sets.player1.score[3] 
        select_id('tablaSet4P1').innerHTML = result.data.Sets.player1.score[4] 
        select_id('tablaSet5P1').innerHTML = result.data.Sets.player1.score[5] 
        select_id('tablaSet6P1').innerHTML = result.data.Sets.player1.score[6] 

        
        select_id("setPlayer2").value  = result.data.Sets.player2.countSets
        select_id('tablaSet0P2').innerHTML = result.data.Sets.player2.score[0]
        select_id('tablaSet1P2').innerHTML = result.data.Sets.player2.score[1]
        select_id('tablaSet2P2').innerHTML = result.data.Sets.player2.score[2]
        select_id('tablaSet3P2').innerHTML = result.data.Sets.player2.score[3]
        select_id('tablaSet4P2').innerHTML = result.data.Sets.player2.score[4]
        select_id('tablaSet5P2').innerHTML = result.data.Sets.player2.score[5]
        select_id('tablaSet6P2').innerHTML = result.data.Sets.player2.score[6]

        select_id('setsResumePlayer1').innerHTML = result.data.Sets.player1.countSets
        select_id('setsResumePlayer2').innerHTML = result.data.Sets.player2.countSets

        let data1 = result.data.Sets.player1.countSets
        let data2 = result.data.Sets.player2.countSets

        if(data1 === 0 && data2 === 0 ){

          select_id('player1').value = result.data.Sets.player1.score[0] 
          select_id("setPlayer1").value  = result.data.Sets.player1.countSets
          select_id('tablaSet0P1').innerHTML = result.data.Sets.player1.score[0] 

          select_id('player2').value = result.data.Sets.player2.score[0]
          select_id("setPlayer2").value  = result.data.Sets.player2.sets[0]
          select_id('tablaSet0P2').innerHTML = result.data.Sets.player2.score[0]

        }else if(data1 === 1 && data2 === 0 || data1 === 0 && data2 === 1){

          select_id('player1').value = result.data.Sets.player1.score[1] 
          select_id("setPlayer1").value  = result.data.Sets.player1.countSets
          select_id('player2').value = result.data.Sets.player2.score[1]
          select_id("setPlayer2").value  = result.data.Sets.player2.countSets

        }else if(data1 === 2 && data2 === 0 || data1 === 0 && data2 === 2 || data1 === 1 && data2 === 1 ){

          select_id('player1').value = result.data.Sets.player1.score[2]
          select_id("setPlayer1").value  = result.data.Sets.player1.countSets
          select_id('player2').value = result.data.Sets.player2.score[2]
          select_id("setPlayer2").value  = result.data.Sets.player2.countSets

        }else if(data1 === 3 && data2 === 0 || data1 === 0 && data2 === 3 || data1 === 2 && data2 === 1 || data1 === 1 && data2 === 2){

          select_id('player1').value = result.data.Sets.player1.score[3]
          select_id("setPlayer1").value  = result.data.Sets.player1.countSets
          select_id('player2').value = result.data.Sets.player2.score[3]
          select_id("setPlayer2").value  = result.data.Sets.player2.countSets

        }else if(data1 === 4 && data2 === 0 || data1 === 0 && data2 === 4 || data1 === 3 && data2 === 1 || data1 === 1 && data2 === 3 || data1 === 2 && data2 === 2){
          select_id('player1').value = result.data.Sets.player1.score[4]
          select_id("setPlayer1").value  = result.data.Sets.player1.countSets
          select_id('player2').value = result.data.Sets.player2.score[4]
          select_id("setPlayer2").value  = result.data.Sets.player2.countSets

        }else if(data1 === 3 && data2 === 2 || data1 === 2 && data2 === 3){

          select_id('player1').value = result.data.Sets.player1.score[5]
          select_id("setPlayer1").value  = result.data.Sets.player1.countSets
          select_id('player2').value = result.data.Sets.player2.score[5]
          select_id("setPlayer2").value  = result.data.Sets.player2.countSets

        }else if(data1 === 3 && data2 === 3){

          select_id('player1').value = result.data.Sets.player1.score[6]
          select_id("setPlayer1").value  = result.data.Sets.player1.countSets
          select_id('player2').value = result.data.Sets.player2.score[6]
          select_id("setPlayer2").value  = result.data.Sets.player2.countSets
        }

        // if(result.data.sumSets > 1){
        //   giro()
        // }
        
        if(result.data.bestOf === "5" ){
          $(".hide2").toggle();
          $('td:nth-child(7)').toggle();
          $('td:nth-child(8)').toggle();
        } 
            
        select_id('id-round').innerHTML = data.round
      }


 }

 function saveScoreInLineOne(score, set){

        const result = getDataLocalStorage()
    
    if(!result.data){

        return console.log("Sin Datos en LocalStorage")

        }else{

          let data1 = result.data.Sets.player1.countSets
          let data2 = result.data.Sets.player2.countSets
        
      if(data1 === 0 && data2 === 0 ){
       
        result.data.Sets.player1.score.splice(0, 1, score)
        result.data.Sets.player1.sets.splice(0, 1, set)
          
        select_id('tablaSet0P1').innerHTML = score
        select_id('tablaSet0P1').style.backgroundColor = '#3498db'
        select_id('tablaSet0P1').style.fontWeight = 'bold'

      }else if(data1 === 1 && data2 === 0 || data1 === 0 && data2 === 1){
      
        result.data.Sets.player1.score.splice(1, 1, score)
        result.data.Sets.player1.sets.splice(1, 1, set)
        select_id('tablaSet1P1').innerHTML = score
        select_id('tablaSet1P1').style.backgroundColor = '#3498db'
        select_id('tablaSet1P1').style.fontWeight = 'bold'

      }else if(data1 === 2 && data2 === 0 || data1 === 0 && data2 === 2 || data1 === 1 && data2 === 1 ){
      
        result.data.Sets.player1.score.splice(2, 1, score)
        result.data.Sets.player1.sets.splice(2, 1, set)
        select_id('tablaSet2P1').innerHTML = score
        select_id('tablaSet2P1').style.backgroundColor = '#3498db'
        select_id('tablaSet2P1').style.fontWeight = 'bold'
      }else if(data1 === 3 && data2 === 0 || data1 === 0 && data2 === 3 || data1 === 2 && data2 === 1 || data1 === 1 && data2 === 2){
      
        result.data.Sets.player1.score.splice(3, 1, score)
        result.data.Sets.player1.sets.splice(3, 1, set)
        select_id('tablaSet3P1').innerHTML = score
        select_id('tablaSet3P1').style.backgroundColor = '#3498db'
        select_id('tablaSet3P1').style.fontWeight = 'bold'
      }else if(data1 === 4 && data2 === 0 || data1 === 0 && data2 === 4 || data1 === 3 && data2 === 1 || data1 === 1 && data2 === 3 || data1 === 2 && data2 === 2){
          
        result.data.Sets.player1.score.splice(4, 1, score)
        result.data.Sets.player1.sets.splice(4, 1, set)
          select_id('tablaSet4P1').innerHTML = score
          select_id('tablaSet4P1').style.backgroundColor = '#3498db'
          select_id('tablaSet4P1').style.fontWeight = 'bold'
      }else if(data1 === 3 && data2 === 2 || data1 === 2 && data2 === 3){
          
        result.data.Sets.player1.score.splice(5, 1, score)
        result.data.Sets.player1.sets.splice(5, 1, set)
        select_id('tablaSet5P1').innerHTML = score
        select_id('tablaSet5P1').style.backgroundColor = '#3498db'
        select_id('tablaSet5P1').style.fontWeight = 'bold'
      }else if(data1 === 3 && data2 === 3){
          
        result.data.Sets.player1.score.splice(6, 1, score)
        result.data.Sets.player1.sets.splice(6, 1, set)
      select_id('tablaSet6P1').innerHTML = score
      select_id('tablaSet6P1').style.backgroundColor = '#3498db'
      select_id('tablaSet6P1').style.fontWeight = 'bold'

      }else{
        return
      }
    }
                  
      localStorage.setItem("matchActual", JSON.stringify(result.data)) //Storage

   }



function saveScoreInLineTwo(score, set){

  const result =  getDataLocalStorage() //Storage

        if(!result.data){
          
          console.log("error al consultar localStorage")
          
        }else{

          let data1 = result.data.Sets.player1.countSets
          let data2 = result.data.Sets.player2.countSets

          if(data1 === 0 && data2 === 0 ){

            result.data.Sets.player2.score.splice(0, 1, score)
            result.data.Sets.player2.sets.splice(0, 1, set)
            select_id('tablaSet0P2').innerHTML = score
            select_id('tablaSet0P2').style.backgroundColor = '#3498db'
            select_id('tablaSet0P2').style.fontWeight = 'bold'

          }else if(data1 === 1 && data2 === 0 || data1 === 0 && data2 === 1){
          
            result.data.Sets.player2.score.splice(1, 1, score)
            result.data.Sets.player2.sets.splice(1, 1, set)
            select_id('tablaSet1P2').innerHTML = score
            select_id('tablaSet1P2').style.backgroundColor = '#3498db'
            select_id('tablaSet1P2').style.fontWeight = 'bold'

          }else if(data1 === 2 && data2 === 0 || data1 === 0 && data2 === 2 || data1 === 1 && data2 === 1 ){
          
            result.data.Sets.player2.score.splice(2, 1, score)
            result.data.Sets.player2.sets.splice(2, 1, set)
            select_id('tablaSet2P2').innerHTML = score
            select_id('tablaSet2P2').style.backgroundColor = '#3498db'
            select_id('tablaSet2P2').style.fontWeight = 'bold'
          }else if(data1 === 3 && data2 === 0 || data1 === 0 && data2 === 3 || data1 === 2 && data2 === 1 || data1 === 1 && data2 === 2){
          
            result.data.Sets.player2.score.splice(3, 1, score)
            result.data.Sets.player2.sets.splice(3, 1, set)
            select_id('tablaSet3P2').innerHTML = score
            select_id('tablaSet3P2').style.backgroundColor = '#3498db'
            select_id('tablaSet3P2').style.fontWeight = 'bold'
          }else if(data1 === 4 && data2 === 0 || data1 === 0 && data2 === 4 || data1 === 3 && data2 === 1 || data1 === 1 && data2 === 3 || data1 === 2 && data2 === 2){
              
            result.data.Sets.player2.score.splice(4, 1, score)
            result.data.Sets.player2.sets.splice(4, 1, set)
              select_id('tablaSet4P2').innerHTML = score
              select_id('tablaSet4P2').style.backgroundColor = '#3498db'
              select_id('tablaSet4P2').style.fontWeight = 'bold'
          }else if(data1 === 3 && data2 === 2 || data1 === 2 && data2 === 3){
              
            result.data.Sets.player2.score.splice(5, 1, score)
            result.data.Sets.player2.sets.splice(5, 1, set)
            select_id('tablaSet5P2').innerHTML = score
            select_id('tablaSet5P2').style.backgroundColor = '#3498db'
            select_id('tablaSet5P2').style.fontWeight = 'bold'
          }else if(data1 === 3 && data2 === 3){
              
            result.data.Sets.player2.score.splice(6, 1, score)
            result.data.Sets.player2.sets.splice(6, 1, set)
          select_id('tablaSet6P2').innerHTML = score
          select_id('tablaSet6P2').style.backgroundColor = '#3498db'
          select_id('tablaSet6P2').style.fontWeight = 'bold'
          }else{
            return
          }
        

        }

        localStorage.setItem("matchActual", JSON.stringify(result.data)) 
  }

           //Storage


 function saveServicePlayer(n){

  const result =  getDataLocalStorage()//Storage

  if(result.data.service.servicePlayer1 === false && result.data.service.servicePlayer1 === false){

    if(n===1){
      result.data.service.servicePlayer1 =  true
    }
    if(n===2){
      result.data.service.servicePlayer2 =  true
    }
  }

  if(result.data){

    if(n === 1){
      result.data.InitialService.player1 = true
      result.data.InitialService.player2 = false
      result.data.service.player1 = true;
    }
    if(n === 2){
      result.data.InitialService.player2 = true
      result.data.InitialService.player1 = false
      result.data.service.player2 = true;
    }
    
    localStorage.setItem("matchActual", JSON.stringify(result.data)) //Storage
  }
 
 }


function setCardPlayer(player, card){

  const result =  getDataLocalStorage() //Storage

  if(result.data){

    if(player === "player1" && card === "whiteCard"){
      result.data.cards.player1.time = true
    }
  
     if(player === "player1" && card === "yellowCard"){
      result.data.cards.player1.yellowCard = true
    }
  
    if(player === "player1" && card === "doubleYellowModal"){
      result.data.cards.player1.doubleYellow = true
    }
  
    if(player === "player1" && card === "redCardModal"){
      result.data.cards.player1.redCard = true
    }
    // player 2
    if(player === "player2" && card === "whiteCard"){
      
      result.data.cards.player2.time = true
    }
  
     if(player === "player2" && card === "yellowCard"){
      result.data.cards.player2.yellowCard = true
    }
  
    if(player === "player2" && card === "doubleYellowModal"){
      result.data.cards.player2.doubleYellow = true
    }
  
    if(player === "player2" && card === "redCardModal"){
      result.data.cards.player2.redCard = true
    }

    localStorage.setItem("matchActual", JSON.stringify(result.data))

  }

 
}

// MOSTAR TODOS LOS LOCALS STORAGE var miStorage = window.localStorage;

function CountSet(){

  const result =  getDataLocalStorage()//Storage

  if(result.data){

    const arraySetPlayer1 = result.data.Sets.player1.sets
    const arraySetPlayer2 = result.data.Sets.player2.sets

   const arrayPlayers = arraySetPlayer2.concat(arraySetPlayer1)
   let sumSetsPlayers = 0
    for (let i = 0; i < arrayPlayers.length; i++) {
       sumSetsPlayers += arrayPlayers[i];
  }


  result.data.sumSets = sumSetsPlayers
  localStorage.setItem("matchActual", JSON.stringify(result.data))

  }
  
}

function countSetPlayer(n){

  const result =  getDataLocalStorage()//Storage

  if(result.data){

    if(n === 1){

      const arraySetPlayer1 = result.data.Sets.player1.sets
  

        let sumSetsPlayer1 = 0
            for (let i = 0; i < arraySetPlayer1.length; i++) {
              sumSetsPlayer1 += arraySetPlayer1[i];
            }
      
      result.data.Sets.player1.countSets = sumSetsPlayer1

    }

    if(n === 2){

      const arraySetPlayer2 = result.data.Sets.player2.sets

      let sumSetsPlayers = 0
      for (let i = 0; i < arraySetPlayer2.length; i++) {
        sumSetsPlayers += arraySetPlayer2[i];
    }
    result.data.Sets.player2.countSets = sumSetsPlayers
    }
    
  localStorage.setItem("matchActual", JSON.stringify(result.data))

  }
}

// FUNCIONES GLOBALES //

function style(id) {
  return select_id(id).style
}
function select_id(id) {
  return document.getElementById(id)
}

function select_Class(cl) {
  return document.getElementsByClassName(cl);
}

function deleteStorage(){

  localStorage.removeItem('matchActual')
  location.reload()

}

function getDataLocalStorage(){

  const data =  JSON.parse(localStorage.getItem("matchActual"))//Storage
  return { data }
}


function saveMatchFinal(){

 const result = getDataLocalStorage()
 let date = new Date()
 var hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
 var key = "match-"+ date.toLocaleDateString() + "-" + hora
 if(result.data){
    
  saveLocalStorage(key, result.data)

 }

}



// FIN FUNCIONES GLOBALES //
