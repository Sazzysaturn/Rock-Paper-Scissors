const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const battlebtn = document.getElementById("battle-btn")
const userChoice = document.getElementById("user-choice")
const computerChoice = document.getElementById("computer-choice")
const result = document.getElementById("Result")

let u_choice = -1
let comp_choice = -1

rockBtn.addEventListener("click", function(){
    u_choice = 0
    userChoice.innerHTML = `
    <img src="rock.png">
    `
})

paperBtn.addEventListener("click", function(){
    u_choice = 1
    userChoice.innerHTML = `
    <img src="paper.png">
    `
})

scissorsBtn.addEventListener("click", function(){
    u_choice = 2
    userChoice.innerHTML = `
    <img src="scissors.png">
    `
})

battlebtn.addEventListener("click",function(){
    if(u_choice==-1) return
    comp_choice = Math.floor(Math.random()*3)

    if(comp_choice==0){
        computerChoice.innerHTML = `
        <img src="rock.png">
        `
    }
    else if(comp_choice==1){
        computerChoice.innerHTML = `
        <img src="paper.png">
        `
    }
    else{
        computerChoice.innerHTML = `
        <img src="scissors.png">
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