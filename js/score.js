let sum = 0;
let counterTime = 0;
let timeInterval;
let takeTime;
getPlayerStorage()
readDataStorage()

function select_id(id) {
    return document.getElementById(id)
}

function getPlayerStorage(){

  
    const dataLocal =  localStorage.getItem("matchActual")//Storage
    const data = JSON.parse(dataLocal)

    var doublesOne = ""
    var doublesTwo = ""
    var newDoublesOne = ""
    var newDoublesTwo = ""
    
    if(data){

         doublesOne = data.PlayerDoubles[0]
         doublesTwo = data.PlayerDoubles[1]
         newDoublesOne = doublesOne.split(" ")
         newDoublesTwo = doublesTwo.split(" ")
        
        if(data.bestOf === "5" ){
        $(".hide2").toggle();
        $('td:nth-child(7)').toggle();
        $('td:nth-child(8)').toggle();
  } 
    }



    if(data){

        select_id('tournamentTitleScore').innerHTML = data.title

        if(data.modality === "individual"){
            select_id('playerOneScorePoints').innerHTML = data.players[0]
            select_id('playerTwoScorePoints').innerHTML = data.players[1]
        }

        if(data.modality === "dobles"){
            select_id('playerOneScorePoints').innerHTML = newDoublesOne[1] + " / " + newDoublesOne[4]
            select_id('playerTwoScorePoints').innerHTML = newDoublesTwo[1] + " / " + newDoublesTwo[4]
        }

        if(data.modality === "individual"){
            select_id('flagsPlayerOneInLine').src = data.flags[0]
            select_id('flagsPlayerTwoInLine').src = data.flags[1]
        }else{
            select_id('flagsPlayerOneInLine').src = data.flagsDoubles[0]
            select_id('flagsPlayerTwoInLine').src = data.flagsDoubles[1] 
        }

        if(data.modality === "individual"){

            select_id('playerOneScoreInLine').innerHTML = data.players[0]
            select_id('playerTwoScoreInLine').innerHTML = data.players[1]
        }else{
            select_id('playerOneScoreInLine').innerHTML = newDoublesOne[1] + " / " + newDoublesOne[4]
            select_id('playerTwoScoreInLine').innerHTML = newDoublesTwo[1] + " / " + newDoublesTwo[4]
        }

        if(data.modality === "individual"){

            select_id('tableScorePlayerOne').src = data.flags[0]
            select_id('tableScorePlayerTwo').src = data.flags[1]

        }else{

            select_id('tableScorePlayerOne').src = data.flagsDoubles[0]
            select_id('tableScorePlayerTwo').src = data.flagsDoubles[1]
        }

    }

    
}

function readDataStorage(){

    setInterval(()=>{
        readStorage()
        counterTime ++;
        //console.log(counterTime);
        if(counterTime === 30){
            takeTime = counterTime
            if(takeTime === 30){
                showTable()
            }
        }
    },2000)

}

function readStorage(){

    const dataLocal =  localStorage.getItem("matchActual")//Storage
    const data = JSON.parse(dataLocal)

    if(data){


        select_id('setPlayerOneInLine').innerHTML = data.Sets.player1.countSets
        select_id('setPlayerTwoInLine').innerHTML = data.Sets.player2.countSets
        
        if(data.sumSets === 0){
            select_id('pointsPlayerOneInLine').innerHTML = data.Sets.player1.score[0]
            select_id('pointsPlayerTwoInLine').innerHTML = data.Sets.player2.score[0]
            if(data.InitialService.player1 ===  true){
                select_id('iconballP1').style.opacity = 1
                select_id('iconballP2').style.opacity = 0
            }else{
                select_id('iconballP2').style.opacity = 1
                select_id('iconballP1').style.opacity = 0
            }
        }else if(data.sumSets === 1){
            select_id('pointsPlayerOneInLine').innerHTML = data.Sets.player1.score[1]
            select_id('pointsPlayerTwoInLine').innerHTML = data.Sets.player2.score[1]
        }else if(data.sumSets === 2){
            select_id('pointsPlayerOneInLine').innerHTML = data.Sets.player1.score[2]
            select_id('pointsPlayerTwoInLine').innerHTML = data.Sets.player2.score[2]
        }else if(data.sumSets === 3){
            select_id('pointsPlayerOneInLine').innerHTML = data.Sets.player1.score[3]
            select_id('pointsPlayerTwoInLine').innerHTML = data.Sets.player2.score[3]
        }else if(data.sumSets === 4){
            select_id('pointsPlayerOneInLine').innerHTML = data.Sets.player1.score[4]
            select_id('pointsPlayerTwoInLine').innerHTML = data.Sets.player2.score[4]
        }else if(data.sumSets === 5){
            select_id('pointsPlayerOneInLine').innerHTML = data.Sets.player1.score[5]
            select_id('pointsPlayerTwoInLine').innerHTML = data.Sets.player2.score[5]
        }else if(data.sumSets === 6){
            select_id('pointsPlayerOneInLine').innerHTML = data.Sets.player1.score[6]
            select_id('pointsPlayerTwoInLine').innerHTML = data.Sets.player2.score[6]
        }else if(data.sumSets === 7){
            select_id('pointsPlayerOneInLine').innerHTML = data.Sets.player1.score[7]
            select_id('pointsPlayerTwoInLine').innerHTML = data.Sets.player2.score[7]
        }
    
        select_id('tableScore1P1').innerHTML = data.Sets.player1.score[0]
        select_id('tableScore2P1').innerHTML = data.Sets.player1.score[1]
        select_id('tableScore3P1').innerHTML = data.Sets.player1.score[2]
        select_id('tableScore4P1').innerHTML = data.Sets.player1.score[3]
        select_id('tableScore5P1').innerHTML = data.Sets.player1.score[4]
        select_id('tableScore6P1').innerHTML = data.Sets.player1.score[5]
        select_id('tableScore7P1').innerHTML = data.Sets.player1.score[6]

        select_id('tableScore1P2').innerHTML = data.Sets.player2.score[0]
        select_id('tableScore2P2').innerHTML = data.Sets.player2.score[1]
        select_id('tableScore3P2').innerHTML = data.Sets.player2.score[2]
        select_id('tableScore4P2').innerHTML = data.Sets.player2.score[3]
        select_id('tableScore5P2').innerHTML = data.Sets.player2.score[4]
        select_id('tableScore6P2').innerHTML = data.Sets.player2.score[5]
        select_id('tableScore7P2').innerHTML = data.Sets.player2.score[6]

        select_id('setsResumePlayer1').innerHTML = data.Sets.player1.countSets
        select_id('setsResumePlayer2').innerHTML = data.Sets.player2.countSets

    }
  
}

select_id('btn1').onclick = ()=>{

    select_id('body-score').classList.toggle('active')
    select_id('tournamentTitleScore').classList.toggle('text-white')
}



function showTable(){

    let count = 0;
    timeInterval = setInterval(() => {
        count ++;
        console.log(count);
        select_id('tableScoreView').style.visibility = 'visible'
        select_id('tableScoreView').style.opacity = 1

        if(count === 30){
            clearInterval(timeInterval)
            select_id('tableScoreView').style.visibility = 'hidden'
            select_id('tableScoreView').style.opacity = 0
            count = 0;
        }
        
    }, 1000);

    count = 0;
    counterTime = 0;

}




