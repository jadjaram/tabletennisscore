
function savePlayerInFo(){
    
}

async function saveScore(player, point){
 
    const result =  await getDataLocalStorage()

    if(!result.data){
        console.log('sin informacion')
    }else{
        let sumSet = result.data.sumSets
        //set 1
        if(sumSet === 0 && player === 'player1'){
    
            result.data.Sets.player1.score.splice(0, 1, point)               
            select_id('tablaSet0P1').innerHTML = point
            select_id('tablaSet0P1').style.backgroundColor = '#3498db'
            select_id('tablaSet0P1').style.fontWeight = 'bold'
        }
    
        if(sumSet === 0 && player === 'player2'){
    
            result.data.Sets.player2.score.splice(0, 1, point)               
            select_id('tablaSet0P2').innerHTML = point
            select_id('tablaSet0P2').style.backgroundColor = '#3498db'
            select_id('tablaSet0P2').style.fontWeight = 'bold'
        }
            //set 2
        if(sumSet === 1 && player === 'player1'){
    
            result.data.Sets.player1.score.splice(1, 1, point)               
            select_id('tablaSet1P1').innerHTML = point
            select_id('tablaSet1P1').style.backgroundColor = '#3498db'
            select_id('tablaSet1P1').style.fontWeight = 'bold'
        }
    
        if(sumSet === 1 && player === 'player2'){
    
            result.data.Sets.player2.score.splice(1, 1, point)               
            select_id('tablaSet1P2').innerHTML = point
            select_id('tablaSet1P2').style.backgroundColor = '#3498db'
            select_id('tablaSet1P2').style.fontWeight = 'bold'
        }
        //set 3
        if(sumSet === 2 && player === 'player1'){
    
            result.data.Sets.player1.score.splice(2, 1, point)               
            select_id('tablaSet2P1').innerHTML = point
            select_id('tablaSet2P1').style.backgroundColor = '#3498db'
            select_id('tablaSet2P1').style.fontWeight = 'bold'
        }
    
        if(sumSet === 2 && player === 'player2'){
    
            result.data.Sets.player2.score.splice(2, 1, point)               
            select_id('tablaSet2P2').innerHTML = point
            select_id('tablaSet2P2').style.backgroundColor = '#3498db'
            select_id('tablaSet2P2').style.fontWeight = 'bold'
        }
        //set 4
        if(sumSet === 3 && player === 'player1'){
    
            result.data.Sets.player1.score.splice(3, 1, point)               
            select_id('tablaSet3P1').innerHTML = point
            select_id('tablaSet3P1').style.backgroundColor = '#3498db'
            select_id('tablaSet3P1').style.fontWeight = 'bold'
        }
    
        if(sumSet === 3 && player === 'player2'){
    
            result.data.Sets.player2.score.splice(3, 1, point)               
            select_id('tablaSet3P2').innerHTML = point
            select_id('tablaSet3P2').style.backgroundColor = '#3498db'
            select_id('tablaSet3P2').style.fontWeight = 'bold'
        }
        //set 5
        if(sumSet === 4 && player === 'player1'){
    
            result.data.Sets.player1.score.splice(4, 1, point)               
            select_id('tablaSet4P1').innerHTML = point
            select_id('tablaSet4P1').style.backgroundColor = '#3498db'
            select_id('tablaSet4P1').style.fontWeight = 'bold'
        }
    
        if(sumSet === 4 && player === 'player2'){
    
            result.data.Sets.player2.score.splice(4, 1, point)               
            select_id('tablaSet4P2').innerHTML = point
            select_id('tablaSet4P2').style.backgroundColor = '#3498db'
            select_id('tablaSet4P2').style.fontWeight = 'bold'
        }
        //set 6
        if(sumSet === 5 && player === 'player1'){
    
            result.data.Sets.player1.score.splice(5, 1, point)               
            select_id('tablaSet5P1').innerHTML = point
            select_id('tablaSet5P1').style.backgroundColor = '#3498db'
            select_id('tablaSet5P1').style.fontWeight = 'bold'
        }
    
        if(sumSet === 5 && player === 'player2'){
    
            result.data.Sets.player2.score.splice(5, 1, point)               
            select_id('tablaSet5P2').innerHTML = point
            select_id('tablaSet5P2').style.backgroundColor = '#3498db'
            select_id('tablaSet5P2').style.fontWeight = 'bold'
        }
        //set 7
        if(sumSet === 6 && player === 'player1'){
    
            result.data.Sets.player1.score.splice(6, 1, point)               
            select_id('tablaSet6P1').innerHTML = point
            select_id('tablaSet6P1').style.backgroundColor = '#3498db'
            select_id('tablaSet6P1').style.fontWeight = 'bold'
        }
    
        if(sumSet === 6 && player === 'player2'){
    
            result.data.Sets.player2.score.splice(6, 1, point)               
            select_id('tablaSet6P2').innerHTML = point
            select_id('tablaSet6P2').style.backgroundColor = '#3498db'
            select_id('tablaSet6P2').style.fontWeight = 'bold'
        }
    
    }

    localStorage.setItem("matchActual", JSON.stringify(result.data))
}

async function saveSet(player){

    const result = await getDataLocalStorage()

    if(result.data){

        let numberSet = result.data.sumSets

        if(numberSet === 0 && player === "player1"){
            result.data.Sets.player1.sets.splice(0, 1, 1)   
        }
    
        if(numberSet === 0 && player === "player2"){
            result.data.Sets.player2.sets.splice(0, 1, 1)          
        }
    
        if(numberSet === 1 && player === "player1"){
            result.data.Sets.player1.sets.splice(1, 1, 1)          
        }
        if(numberSet === 1 && player === "player2"){
            result.data.Sets.player2.sets.splice(1, 1, 1)          
        }

        if(numberSet === 2 && player === "player1"){
            result.data.Sets.player1.sets.splice(2, 1, 1)          
        }
        if(numberSet === 2 && player === "player2"){
            result.data.Sets.player2.sets.splice(2, 1, 1)          
        }

        if(numberSet === 3 && player === "player1"){
            result.data.Sets.player1.sets.splice(3, 1, 1)          
        }
        if(numberSet === 3 && player === "player2"){
            result.data.Sets.player2.sets.splice(3, 1, 1)          
        }

        if(numberSet === 4 && player === "player1"){
            result.data.Sets.player1.sets.splice(4, 1, 1)          
        }
        if(numberSet === 4 && player === "player2"){
            result.data.Sets.player2.sets.splice(4, 1, 1)          
        }

        if(numberSet === 5 && player === "player1"){
            result.data.Sets.player1.sets.splice(5, 1, 1)          
        }
        if(numberSet === 5 && player === "player2"){
            result.data.Sets.player2.sets.splice(5, 1, 1)          
        }

        if(numberSet === 6 && player === "player1"){
            result.data.Sets.player1.sets.splice(6, 1, 1)          
        }
        if(numberSet === 6 && player === "player2"){
            result.data.Sets.player2.sets.splice(6, 1, 1)          
        }
    }

    localStorage.setItem("matchActual", JSON.stringify(result.data))

}


function sumSet(a, b){
    var c = a + b
    return c
}

function reset(){


}

