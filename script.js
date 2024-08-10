const player=document.getElementById('player');
const resetBtn=document.getElementById('reset-btn');
const devInfo_okBtn=document.getElementById('devInfo-okBtn');
const devINFO_box=document.getElementById('info');
const i_btn=document.getElementById('i-btn');
const winner_msg=document.getElementById('winner-msg');

const btn=Array(9);
for(var i=0;i<btn.length;i++){
    btn[i]=document.getElementById(i);
    
}

resetBtn.addEventListener("click",()=>{
    location.reload();
   
});
let currentPlayer='X';
let array=Array(9).fill(null);

function chekcWinner(){
    if(
       (array[0]!=null && array[0]==array[1]&&array[1]==array[2])||
       (array[3]!=null && array[3]==array[4]&&array[4]==array[5])||
       (array[6]!=null && array[6]==array[7]&&array[7]==array[8])||

       (array[0]!=null && array[0]==array[3]&&array[3]==array[6])||
       (array[1]!=null && array[1]==array[4]&&array[4]==array[7])||
       (array[2]!=null && array[2]==array[5]&&array[5]==array[8])||

       (array[0]!=null && array[0]==array[4]&&array[4]==array[8])||
       (array[2]!=null && array[2]==array[4]&&array[4]==array[6])

    ){
        currentPlayer=(currentPlayer==="X")?"O":"X";
        player.innerText=`Player '${currentPlayer}' WINNER`;
        player.style.color='green';
        winner_msg.innerText=`Player '${currentPlayer}' Won!`
        winner_msg.classList.add('popup');
        

        for(let i=0;i<btn.length;i++){
            btn[i].onclick=null;
        }

        
    }
    else if(!array.some((temp)=> temp===null)){
        player.innerText='';
        winner_msg.innerText='Game Draw !'
        winner_msg.classList.add('popup');
        
    }
}
function handleClick(element){
    const id=Number(element.id);
    if(array[id]!==null)return
    array[id]=currentPlayer;
    element.innerText=currentPlayer;
    currentPlayer=(currentPlayer==="X")?"O":"X";
    player.innerText=`PLAYER '${currentPlayer}' TURN`;
    chekcWinner();   
}

devInfo_okBtn.addEventListener("click",()=>{
    devINFO_box.classList.remove('popup');
});

i_btn.addEventListener("click",()=>{
    devINFO_box.classList.add('popup')
})
