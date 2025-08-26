function showTask1D() {
  document.querySelector('.tasks').style.display= 'none';
  document.querySelector('.task1D').classList.remove('hidden'); 
  document.querySelector('.back').style.visibility = 'visible';
}

function showTask2D() {
  document.querySelector('.tasks').style.display= 'none';
  document.querySelector('.task2D').classList.remove('hidden'); 
  document.querySelector('.back').style.visibility = 'visible';
}
function showTask3D() {
  document.querySelector('.tasks').style.display= 'none';
  document.querySelector('.task3D').classList.remove('hidden'); 
  document.querySelector('.back').style.visibility = 'visible';
}
function showTask4D() {
  document.querySelector('.tasks').style.display= 'none';
  document.querySelector('.task4D').classList.remove('hidden'); 
  document.querySelector('.back').style.visibility = 'visible';
}
function showTask5D() {
  document.querySelector('.tasks').style.display= 'none';
  document.querySelector('.task5D').classList.remove('hidden'); 
  document.querySelector('.back').style.visibility = 'visible';
}
function backBtn() {
  document.querySelector('.tasks').style.display= 'flex';
  document.querySelector('.task1D').classList.add('hidden');
  document.querySelector('.task2D').classList.add('hidden');
  document.querySelector('.task3D').classList.add('hidden');
  document.querySelector('.task4D').classList.add('hidden');
  document.querySelector('.task5D').classList.add('hidden');
  document.querySelector('.back').style.visibility = 'hidden';
  
}


let user = {
  coins: 0,
  badges: 0,
  completed: []
};


function loadProgress() {
  let saved = localStorage.getItem("userData");
  if (saved) {
    user = JSON.parse(saved);

    document.querySelector('.coin-count').innerHTML = user.coins;
    document.querySelector('.badge-count').innerHTML = user.badges;

    user.completed.forEach(task => {
      let taskDiv = document.querySelector(`.${task}D`);

      // add badge again
      let badge = document.createElement("img");
      badge.src = `assets/${task}b.png`; // adjust names if jpeg/png mismatch
      badge.alt = "badge";
      document.querySelector(".badgesD").appendChild(badge);

      // add congrats message again
      let congL = document.createElement("p");
      congL.innerHTML = "Congrats! You completed this task 🎉";
      taskDiv.appendChild(congL);

      // hide buttons + grayscale
      let btns = taskDiv.querySelector(".buttons");
      if (btns) btns.style.display = "none";
      let img = document.querySelector(`.bb${task[task.length - 1]}b`);
      if (img) img.style.filter = "grayscale(0%)";
    });
  }
}



function saveProgress() {
  localStorage.setItem("userData", JSON.stringify(user));
}

function completeTask1() {
  let badge = document.createElement("img");  
  badge.src = "assets/t1b.jpeg";               
  badge.alt = "badge";
  badge.style.border = "2px solid #F9C04A";
  let congL = document.createElement("p");
  congL.innerHTML = "Congrats! You completed this task 🎉";
  
  document.querySelector(".badgesD").appendChild(badge); 
  document.querySelector(".task1D").appendChild(congL);
  user.coins += 5;
  user.badges += 1;
  document.querySelector('.badge-count').innerHTML = user.badges;
  document.querySelector('.coin-count').innerHTML = user.coins;
  document.querySelector('.complete').style.display = 'none';
  document.querySelector('.failed').style.display = 'none';
  document.querySelector('.placeholder').style.display = 'none';
  document.querySelector('.bb1b').style.filter = 'grayscale(0%)';
  user.completed.push("task1"); 
  saveProgress();    
}

function completeTask2() {
  let badge = document.createElement("img");  
  badge.src = "assets/t2b.png";               
  badge.alt = "badge";
  let congL = document.createElement("p");
  congL.innerHTML = "Congrats! You completed this task 🎉";

  document.querySelector(".badgesD").appendChild(badge); 
  document.querySelector(".task2D").appendChild(congL);
  user.coins += 5;
  user.badges += 1;
  document.querySelector('.badge-count').innerHTML = user.badges;
  document.querySelector('.coin-count').innerHTML = user.coins;
  document.querySelector('.task2D .buttons').style.display = 'none';
  document.querySelector('.placeholder').style.display = 'none';
  document.querySelector('.bb2b').style.filter = 'grayscale(0%)';
  user.completed.push("task2"); 
  saveProgress();    
}

function completeTask3() {
  let badge = document.createElement("img");  
  badge.src = "assets/t3b.png";               
  badge.alt = "badge";
  let congL = document.createElement("p");
  congL.innerHTML = "Congrats! You completed this task 🎉";

  document.querySelector(".badgesD").appendChild(badge); 
  document.querySelector(".task3D").appendChild(congL);
  user.coins += 5;
  user.badges += 1;
  document.querySelector('.badge-count').innerHTML = user.badges;
  document.querySelector('.coin-count').innerHTML = user.coins;
  document.querySelector('.task3D .buttons').style.display = 'none';
  document.querySelector('.placeholder').style.display = 'none';
  document.querySelector('.bb3b').style.filter = 'grayscale(0%)';
  user.completed.push("task3"); 
  saveProgress();    
}

function completeTask4() {
  let badge = document.createElement("img");  
  badge.src = "assets/t4b.png";               
  badge.alt = "badge";
  let congL = document.createElement("p");
  congL.innerHTML = "Congrats! You completed this task 🎉";

  document.querySelector(".badgesD").appendChild(badge); 
  document.querySelector(".task4D").appendChild(congL);
  user.coins += 5;
  user.badges += 1;
  document.querySelector('.badge-count').innerHTML = user.badges;
  document.querySelector('.coin-count').innerHTML = user.coins;
  document.querySelector('.task4D .buttons').style.display = 'none';
  document.querySelector('.placeholder').style.display = 'none';
  document.querySelector('.bb4b').style.filter = 'grayscale(0%)';
  user.completed.push("task4"); 
  saveProgress();    
}
function completeTask5() {
  let badge = document.createElement("img");  
  badge.src = "assets/t5b.png";               
  badge.alt = "badge";
  let congL = document.createElement("p");
  congL.innerHTML = "Congrats! You completed this task 🎉";

  document.querySelector(".badgesD").appendChild(badge); 
  document.querySelector(".task5D").appendChild(congL);
  user.coins += 5;
  user.badges += 1;
  document.querySelector('.badge-count').innerHTML = user.badges;
  document.querySelector('.coin-count').innerHTML = user.coins;
  document.querySelector('.task5D .buttons').style.display = 'none';
  document.querySelector('.placeholder').style.display = 'none';
  document.querySelector('.bb5b').style.filter = 'grayscale(0%)';
  user.completed.push("task5"); 
  saveProgress();    
}
function failedTask() {
      alert("Ahh, that's completely fine! You are not alone, come back when you can. Try the next task :)");
}

function boughtBtn() {
  document.querySelector('.shopee').style.display = 'none';
  document.querySelector('.bought').style.display = 'flex';
}
function shopeeBtn() {
  document.querySelector('.shopee').style.display = 'flex';
  document.querySelector('.bought').style.display = 'none';
}
function buyShI() {
  if (user.coins >= 10) {
    user.coins -= 10;
    document.querySelector('.coin-count').innerHTML = user.coins;
    let item = document.querySelector('.shI');
    item.style.display = 'none';
    document.querySelector('.shIT').style.display = 'block' 
    document.querySelector('.placeholderr').style.display = 'none'
  } else {
    alert('You do not have enough coins to buy this item.');
  }
}
function buyIcI() {
  if (user.coins >= 15) {
    user.coins -= 15;
    document.querySelector('.coin-count').innerHTML = user.coins;
    let item = document.querySelector('.IcI');
    item.style.display = 'none';
    document.querySelector('.IcIT').style.display = 'block' 
    document.querySelector('.placeholderr').style.display = 'none'
  } else {
    alert('You do not have enough coins to buy this item.');
  }
}

function buyIcIT() {
  let cowboy = document.createElement("img");
  cowboy.src = "assets/shark.png";
  cowboy.alt = "cowboy";
  cowboy.style.width = "800px";
  cowboy.style.height = "auto";
  cowboy.style.position = "absolute";
  cowboy.style.draggable = "true";
  cowboy.style.top = "5vw";
  cowboy.style.left = "5vw";
  cowboy.style.zIndex = "1";
  const cmain = document.querySelector(".cmain");
  cmain.appendChild(cowboy); // adds at the end
  cmain.prepend(cowboy); // adds at the start

}
function buyShIT() {
  let shark = document.createElement("img");
  shark.src = "assets/cowB.png";
  shark.alt = "shark";
  shark.style.width = "800px";
  shark.style.height = "auto";
  shark.style.position = "absolute";
  shark.style.draggable = "true";
  shark.style.top = "5vw";
  shark.style.left = "5vw";
  shark.style.zIndex = "1";
  const cmain = document.querySelector(".cmain");
  cmain.appendChild(shark); // adds at the end
  cmain.prepend(shark);
}

loadProgress()
