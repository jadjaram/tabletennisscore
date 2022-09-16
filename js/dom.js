
var pointsP1 = parseInt(select_id('player1').value)
var pointsP2 = parseInt(select_id('player2').value)
var alternator = 0;
var indexPlayer = 0;
let stateSet;
let set = 0;
let clicked = 0;
let ctrChange = false;

const btnPlus1 = select_id('BtnPlusPlayer1')
const btnPlus2 = select_id('BtnPlusPlayer2')
const btnLess1 = select_id('BtnMinusPlayer1')
const btnLess2 = select_id('BtnMinusPlayer2')
var player1 = select_id('inputPlayer1').value
var player2 = select_id('inputPlayer2').value
let counterLess = 0;


btnPlus1.onclick = async ()=> {
    const result = await getDataLocalStorage();

    if(result.data.bestOf === "5"){

        if(result.data.Sets.player1.countSets === 3 && result.data.Sets.player2.countSets < 3){

            select_id("BtnPlusPlayer2").disabled = true;
            select_id("BtnPlusPlayer1").disabled = true;
            select_id('EndSet').disabled = true
          
    
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `El partido ha Terminado`,
                showConfirmButton: false,
                timer: 2500
              })
              
              return
        }

        if(result.data.Sets.player2.countSets === 3 && result.data.Sets.player1.countSets < 3){

            select_id("BtnPlusPlayer2").disabled = true;
            select_id("BtnPlusPlayer1").disabled = true;
            select_id('EndSet').disabled = true
          
    
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `El partido ha Terminado`,
                showConfirmButton: false,
                timer: 2500
              })
              
              return
        }

  
    }

    if(result.data.bestOf === "7"){

        if(result.data.Sets.player1.countSets === 4 && result.data.Sets.player2.countSets < 4){

            select_id("BtnPlusPlayer2").disabled = true;
            select_id("BtnPlusPlayer1").disabled = true;
            select_id('EndSet').disabled = true
          
    
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `El partido ha Terminado`,
                showConfirmButton: false,
                timer: 2500
              })
    
              return
        }

        if(result.data.Sets.player2.countSets === 4 && result.data.Sets.player1.countSets < 4){

            select_id("BtnPlusPlayer2").disabled = true;
            select_id("BtnPlusPlayer1").disabled = true;
            select_id('EndSet').disabled = true
          
    
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `El partido ha Terminado`,
                showConfirmButton: false,
                timer: 2500
              })
    
              return
        }

    }


    alternator ++;
    pointsP1 = pointsP1 + 1
    select_id('player1').value = pointsP1

    
    if(alternator === 2){
       await serviceMatch()
        console.log(ctrChange);
    }

    if(pointsP1 >10 && pointsP2 < 10){

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Confirmar Set para ${player1}`,
            showConfirmButton: false,
            timer: 2500
          })
          indexPlayer = 1
          select_id('EndSet').disabled = false
          select_id("BtnPlusPlayer2").disabled = true;
          select_id("BtnPlusPlayer1").disabled = true;

    }

    
    if(pointsP1 >= 10 && pointsP2 >=10){
        let res = pointsP1 - pointsP2
        if(res === 1 || res === 0){
  
          if(alternator === 1){
             await serviceMatch()
             console.log(ctrChange);
          }
  
        }
  
        if (res === 2) {
  
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Confirmar Set para ${player1}`,
                showConfirmButton: false,
                timer: 2500
              })
        select_id('EndSet').disabled = false
          select_id("BtnPlusPlayer2").disabled = true;
          select_id("BtnPlusPlayer1").disabled = true;
          indexPlayer = 1;
          result.data.indexPlayer = indexPlayer
          localStorage.setItem("matchActual", JSON.stringify(result.data))

        }
          
    }
    
    select_id("setPlayer1").value = result.data.Sets.player1.countSets;
    select_id('setsResumePlayer1').innerHTML = result.data.Sets.player1.countSets;
    
    await saveScore("player1", pointsP1)

    }

btnPlus2.onclick = async ()=> {
    const result = await getDataLocalStorage()

    if(result.data.bestOf === "5"){

        if(result.data.Sets.player2.countSets === 3 && result.data.Sets.player1.countSets < 3){

            select_id("BtnPlusPlayer2").disabled = true;
            select_id("BtnPlusPlayer1").disabled = true;
            select_id('EndSet').disabled = true
          
    
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `El partido ha Terminado`,
                showConfirmButton: false,
                timer: 2500
              })
              
              return
        }

        if(result.data.Sets.player1.countSets === 3 && result.data.Sets.player2.countSets < 3){

            select_id("BtnPlusPlayer2").disabled = true;
            select_id("BtnPlusPlayer1").disabled = true;
            select_id('EndSet').disabled = true
          
    
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `El partido ha Terminado`,
                showConfirmButton: false,
                timer: 2500
              })
              
              return
        }

  
    }

    if(result.data.bestOf === "7"){

        if(result.data.Sets.player2.countSets === 4 && result.data.Sets.player1.countSets < 4){

            select_id("BtnPlusPlayer2").disabled = true;
            select_id("BtnPlusPlayer1").disabled = true;
            select_id('EndSet').disabled = true
          
    
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `El partido ha Terminado`,
                showConfirmButton: false,
                timer: 2500
              })
    
              return
        }

        if(result.data.Sets.player1.countSets === 4 && result.data.Sets.player2.countSets < 4){

            select_id("BtnPlusPlayer2").disabled = true;
            select_id("BtnPlusPlayer1").disabled = true;
            select_id('EndSet').disabled = true
          
    
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `El partido ha Terminado`,
                showConfirmButton: false,
                timer: 2500
              })
    
              return
        }

    }

    alternator ++;
    pointsP2 = pointsP2 + 1
    select_id('player2').value = pointsP2
;
    if(alternator === 2){
        await serviceMatch()
        console.log(ctrChange);
    }

    if(pointsP2 > 10 && pointsP1 < 10){

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Confirmar Set para ${player2}`,
            showConfirmButton: false,
            timer: 2500
          })
          indexPlayer = 2
          result.data.indexPlayer = indexPlayer
          localStorage.setItem("matchActual", JSON.stringify(result.data))
          select_id('EndSet').disabled = false
          select_id("BtnPlusPlayer2").disabled = true;
          select_id("BtnPlusPlayer1").disabled = true;

    }

    if(pointsP2 >= 10 && pointsP1 >=10){
      let res = pointsP2 - pointsP1
      if(res === 1 || res === 0){

        if(alternator === 1){
            await serviceMatch()
            console.log(ctrChange);
        }

      }

      if (res === 2) {

        select_id("BtnPlusPlayer2").disabled = true;
        select_id("BtnPlusPlayer1").disabled = true;
        indexPlayer = 2;
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Confirmar Set para ${player2}`,
            showConfirmButton: false,
            timer: 2500
          })
          select_id('EndSet').disabled = false
    
      }
        
    }

    select_id("setPlayer2").value = result.data.Sets.player2.countSets;
    select_id('setsResumePlayer2').innerHTML = result.data.Sets.player2.countSets;
    await saveScore("player2", pointsP2)



}

btnLess1.onclick = async ()=>{
    const result = await getDataLocalStorage();

     if(pointsP1 > 0){

        clicked ++;
        if(ctrChange === true && alternator === 1 && clicked === 1){

            alternator = 0;

        }

        if(ctrChange === true && alternator === 0 && clicked === 2){

            alternator = 0;

        }

        if(ctrChange === false && alternator === 0 && clicked === 2){

            await serviceMatch()

        }

        if(ctrChange === false && alternator === 1 && clicked === 1){

            await serviceMatch()
        }

        if(ctrChange === false && alternator === 0 && clicked === 1){

            await serviceMatch()
            alternator = 1
        }

        pointsP1 = pointsP1 - 1
        select_id('player1').value = pointsP1
     
        select_id("setPlayer1").value = result.data.Sets.player1.countSets;
        select_id('setsResumePlayer1').innerHTML = result.data.Sets.player1.countSets;
        await saveScore("player1", pointsP1)
    
     }else{
    
        return
     }
       
    }
    
btnLess2.onclick = async ()=>{
        const result = await getDataLocalStorage();
        alternator = result.data.alternator
   
         if(pointsP2 > 0){
        
            clicked ++;
            if(ctrChange === true && alternator === 1 && clicked === 1){
    
                alternator = 0;
    
            }
    
            if(ctrChange === true && alternator === 0 && clicked === 2){
    
                alternator = 0;
    
            }
    
            if(ctrChange === false && alternator === 0 && clicked === 2){
    
                await serviceMatch()
    
            }
    
            if(ctrChange === false && alternator === 1 && clicked === 1){
    
                await serviceMatch()
            }
    
            if(ctrChange === false && alternator === 0 && clicked === 1){
    
                await serviceMatch()
                alternator = 1
            }
    
            pointsP2 = pointsP2 - 1
            select_id('player2').value = pointsP2
 
        
            select_id("setPlayer2").value = result.data.Sets.player1.countSets;
            select_id('setsResumePlayer2').innerHTML = result.data.Sets.player1.countSets;
            await saveScore("player2", pointsP2)
        
         }else{
        
            return
         }
           
    }

async function changeSet(){
    
       if(indexPlayer === 2){
     
            await saveSet("player2")
            await countSetPlayer(2)
        
        }
    
        if(indexPlayer === 1){
            await saveSet("player1")
            await countSetPlayer(1)
      
        }
    
       await CountSet()
       // return
    
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
        pointsP1 = 0;
        pointsP2 = 0;
    
        select_id("BtnPlusPlayer2").disabled = false;
        select_id("BtnPlusPlayer1").disabled = false;
    
        await serviceMatch()
        
        select_id('EndSet').disabled = true
    
         await showScore()
    
 }

 async function showScore(){

    const result = await getDataLocalStorage()

    select_id('setPlayer1').value = result.data.Sets.player1.countSets
    select_id('setPlayer2').value = result.data.Sets.player2.countSets
    select_id('setsResumePlayer1').innerHTML = result.data.Sets.player1.countSets;
    select_id('setsResumePlayer2').innerHTML = result.data.Sets.player2.countSets;

    result.data.indexPlayer = indexPlayer
    localStorage.setItem("matchActual", JSON.stringify(result.data))
    indexPlayer = 0
}

// CONTROLS SERVICE
async function serviceMatch(){
    const result = await getDataLocalStorage()
    
    discount = counterReduce
    counterReduce = 0;
    alternator = 0;
    serviceCounter = 0;
   
    result.data.alternator = alternator

    if(result.data.InitialService.player1 === true){
        select_id('serviceTwo').classList.add('active')
        select_id('serviceOne').classList.remove('active')
        result.data.InitialService.player2 = true;
        result.data.InitialService.player1 = false
        ctrChange = false
    }else{
        select_id('serviceTwo').classList.remove('active')
        select_id('serviceOne').classList.add('active')
        result.data.InitialService.player2 = false;
        result.data.InitialService.player1 = true
        ctrChange = true
    }

    localStorage.setItem("matchActual", JSON.stringify(result.data))

    

}


 function select_id(id) {
    return document.getElementById(id)
  }

