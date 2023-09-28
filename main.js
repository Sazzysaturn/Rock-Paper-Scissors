const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const battlebtn = document.getElementById("battle-btn")
const fightArena = document.getElementById("fight-arena")
const result = document.getElementById("Result")

let u_choice = -1
let comp_choice = -1

rockBtn.addEventListener("click", function(){
    u_choice = 0
    fightArena.innerHTML = `
    Rock VS
    `
    result.innerText = ""
})

paperBtn.addEventListener("click", function(){
    u_choice = 1
    fightArena.innerHTML = `
    Paper VS
    `
    result.innerText = ""
})

scissorsBtn.addEventListener("click", function(){
    u_choice = 2
    fightArena.innerHTML = `
    Scissors VS
    `
    result.innerText = ""
})

battlebtn.addEventListener("click",function(){
    if(u_choice==-1) return
    comp_choice = Math.floor(Math.random()*3)

    if(comp_choice==0){
        fightArena.innerHTML += `
        Rock
        `
    }
    else if(comp_choice==1){
        fightArena.innerHTML += `
        Paper
        `
    }
    else{
        fightArena.innerHTML += `
        Scissors
        `
    }
    
    if(u_choice===comp_choice){
        // Draw
        result.innerHTML = "Result: It's a Draw!"
    }
    else if((u_choice+2)%3===comp_choice){
        // Win
        result.innerHTML = "Result: You Win!"
    }
    else if((u_choice+1)%3===comp_choice){
        // Lose
        result.innerHTML = "Result: You Lose! Better Luck next time...."
    }
    
})