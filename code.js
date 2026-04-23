// Empty 6X6 table initialized with in deepcopy.
var empty_table = [
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]]];
// 1 = Red1/2; 2 = Brown; 3 = Light blue; 4 = Yellow; 5 = Purple; 6 = Green; 
//7 = Rose rs; 8 = Dark blue; 9 = Orange; 10 = cyan; 11 = darkgreen; 12 = magenta

// [0] => color; 
// [1] => Number of following blocks / if 0 = empty; 
// [2] => button to move (1: left, 2: right, 3: up, 4: down, 0: middle)

var level_0a = [
    [["wh",0,0],["wh",0,0],["lb",2,3],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["lb",2,4],["pu",3,1],["pu",3,0],["pu",3,2]],
    [["r1",2,1],["r2",2,2],["wh",0,0],["wh",0,0],["wh",0,0],["ye",3,3]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["ye",3,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["ye",3,4]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]]];

var level_0 = [
    [["wh",0,0],["wh",0,0],["wh",0,0],["db",2,3],["wh",0,0],["wh",0,0]],
    [["lb",3,1],["lb",3,0],["lb",3,2],["db",2,4],["wh",0,0],["wh",0,0]],
    [["r1",2,1],["r2",2,2],["br",2,3],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["gr",2,3],["wh",0,0],["br",2,4],["pu",2,1],["pu",2,2],["br",2,3]],
    [["gr",2,4],["dg",2,1],["dg",2,2],["gr",2,3],["wh",0,0],["br",2,4]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["gr",2,4],["dg",2,1],["dg",2,2]]];

var level_1 = [
    [["wh",0,0],["pu",2,1],["pu",2,2],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["cy",3,3],["wh",0,0],["gr",2,1],["gr",2,2]],
    [["r1",2,1],["r2",2,2],["cy",3,0],["wh",0,0],["wh",0,0],["ye",3,3]],
    [["wh",0,0],["wh",0,0],["cy",3,4],["wh",0,0],["wh",0,0],["ye",3,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["ye",3,4]],
    [["lb",3,1],["lb",3,0],["lb",3,2],["wh",0,0],["wh",0,0],["wh",0,0]]];

var level_2 = [
    [["rs",2,1],["rs",2,2],["wh",0,0],["wh",0,0],["wh",0,0],["ma",3,3]],
    [["br",3,3],["wh",0,0],["wh",0,0],["pu",3,3],["wh",0,0],["ma",3,0]],
    [["br",3,0],["r1",2,1],["r2",2,2],["pu",3,0],["wh",0,0],["ma",3,4]],
    [["br",3,4],["wh",0,0],["wh",0,0],["pu",3,4],["wh",0,0],["wh",0,0]],
    [["db",2,3],["wh",0,0],["wh",0,0],["wh",0,0],["ye",2,1],["ye",2,2]],
    [["db",2,4],["wh",0,0],["lb",3,1],["lb",3,0],["lb",3,2],["wh",0,0]]];

var level_3 = [
    [["wh",0,0],["wh",0,0],["lb",3,3],["dg",2,3],["pu",2,1],["pu",2,2]],
    [["wh",0,0],["wh",0,0],["lb",3,0],["dg",2,4],["wh",0,0],["gr",2,3]],
    [["wh",0,0],["wh",0,0],["lb",3,4],["r1",2,1],["r2",2,2],["gr",2,4]],
    [["wh",0,0],["wh",0,0],["ye",3,1],["ye",3,0],["ye",3,2],["br",2,3]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["br",2,4]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]]];

var level_4 = [
    [["wh",0,0],["wh",0,0],["wh",0,0],["ma",2,1],["ma",2,2],["rs",3,3]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["or",2,3],["wh",0,0],["rs",3,0]],
    [["r1",2,1],["r2",2,2],["lb",3,3],["or",2,4],["wh",0,0],["rs",3,4]],
    [["ye",3,3],["wh",0,0],["lb",3,0],["pu",3,1],["pu",3,0],["pu",3,2]],
    [["ye",3,0],["wh",0,0],["lb",3,4],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["ye",3,4],["br",2,1],["br",2,2],["wh",0,0],["wh",0,0],["wh",0,0]]];

var level_5 = [
    [["br",3,1],["br",3,0],["br",3,2],["or",3,3],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["cy",2,3],["or",3,0],["wh",0,0],["wh",0,0]],
    [["r1",2,1],["r2",2,2],["cy",2,4],["or",3,4],["wh",0,0],["wh",0,0]],
    [["rs",3,3],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["rs",3,0],["pu",2,1],["pu",2,2],["ma",2,1],["ma",2,2],["ye",2,3]],
    [["rs",3,4],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["ye",2,4]]];

var level_6 = [
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]],
    [["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0],["wh",0,0]]];
    

let levels = [level_0, level_1, level_2, level_3, level_4, level_5, level_6,level_6, level_6, level_6,
level_0, level_1, level_2, level_3, level_4, level_5, level_6,level_6, level_6, level_6,
level_0, level_1, level_2, level_3, level_4, level_5, level_6,level_6, level_6, level_6,
level_0, level_1, level_2, level_3, level_4, level_5, level_6,level_6, level_6, level_6]


//let levels = [level_0, level_1, level_2, level_3, level_4, level_5, level_6]

let lastGame = JSON.parse(localStorage.getItem("_rush_hour_last_game"));
if (lastGame == null) {
    lastGame = 0;
}

let finishes = (JSON.parse(localStorage.getItem("_rush_hour_finishes")) || []).map(Number);

let selectLevelDiv = document.getElementById("selectLevel");

loadLevels();

let actual_table = deepcopy(levels[lastGame]); // Variable to store the actual table shoiwed on the screen.
let game_won = false; // Variable to check if the game is won.
let ROW = 6; // Number of rows.
let COL = 6; // Number of columns.
let level = lastGame; // Variable to store the number of level that is being played.
document.getElementById("level").innerHTML = level + 1;

window.onload = function () {
    draw_table(actual_table);
}

function loadLevels() {
    selectLevelDiv.innerHTML = ""
    let counter = 0;

    levels.forEach((level, index) => {
        let isActive = index == lastGame;
        let isCompleted = finishes.includes(index);

        let classes = "button buttonLevel";

        if (isActive) classes += " active";
        if (isCompleted) classes += " completed";

        if (counter == 5){
            selectLevelDiv.innerHTML += `<div class="salto" style="margin-top:10px;margin-bottom:10px;"></div>`;
        }

        if (counter == 10){
            counter = 0;
            selectLevelDiv.innerHTML += `<div style="margin-top:10px;margin-bottom:10px;"></div>`;
        }
        counter++;

        selectLevelDiv.innerHTML += `<button class="${classes}" data-level="${index}" onclick="set_mode(${index})">${index + 1}</button>`;
    });

    selectLevelDiv.innerHTML += `<div style="margin-top:10px;margin-bottom:10px;"></div>`;
    selectLevelDiv.innerHTML += `<button class="button buttonLevel back" onclick="volver()">&#8634</button>`;
    selectLevelDiv.innerHTML += `<button class="button buttonLevel reset" onclick="resetLevel()">&#10006</button>`;
}

// Help function to effectivly copy values of a 3D array.
function deepcopy(arr) {
    var newarr = empty_table
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            for (var k = 0; k < arr[i][j].length; k++) {
                newarr[i][j].splice(k, 1, arr[i][j][k]);
            }
        }
    }
    return newarr;
}

function draw_table(table) {
    let table_html = "";
    let table_inner_html = ""; 

    if (game_won == false) { 
        table_inner_html += table_ongoing(table);
        table_html = `<table class="table">${table_inner_html}</table>`;
    }

    document.getElementById("table_container").innerHTML = table_html;

    selectLevelDiv.classList.add("hidden");
}

function table_ongoing(table) { // Function to generate the html code for the table while the game is ongoing.
    let table_inner_html_ongoing = "";
    for (let i = 0; i < ROW; i++) {
        let row_html = `<tr class="items">`;
        for (let j = 0; j < COL; j++) {
            if (table[i][j][1] == 0) {
                if ((i == 2) && (j == 5)) {
                    row_html += `<td class="exit item item0 i${i}j${j}"></td>`;
                }
                else {                    
                    row_html += `<td class="item item0 i${i}j${j}"></td>`;
                }
            }
            else {
                let button_sym = ""
                let button_fun
                if (table[i][j][2] == 1) {
                    button_sym = "&#9668"
                    button_fun = "left(this)"
                }
                else if (table[i][j][2] == 2) {
                    button_sym = "&#9658"
                    button_fun = "right(this)"
                }
                else if (table[i][j][2] == 3) {
                    button_sym = "&#9650"
                    button_fun = "up(this)"
                }
                else if (table[i][j][2] == 4) {
                    button_sym = "&#9660"
                    button_fun = "down(this)"
                }
                else if (table[i][j][2] == 0) {
                    button_fun = ""
                }
                if ((i == 2) && (j == 5)){
                    row_html += `<td class="exit item item_${table[i][j][0]}" onclick="${button_fun}"> ${button_sym}</td>`;
                }
                else {
                    row_html += `<td class="item item_${table[i][j][0]}" onclick="${button_fun}"> ${button_sym}</td>`;
                }
            }
        }
        row_html += "</tr>";
        table_inner_html_ongoing += row_html;
    }
    return table_inner_html_ongoing;
}

function left(cell) {
    if (game_won == true) { 
        return
    }
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    if (col < COL - 1) {
        if (actual_table[row][col - 1][1] == 0) {
            for (let i = 0; i < actual_table[row][col][1]; i++) {
                actual_table[row][col + i - 1][0] = actual_table[row][col + i][0];
                actual_table[row][col + i - 1][1] = actual_table[row][col + i][1];
                actual_table[row][col + i - 1][2] = actual_table[row][col + i][2];
            }
            actual_table[row][col + actual_table[row][col][1] - 1][1] = 0;
            draw_table(actual_table);
            check_win();
        }
    }
}

function right(cell) {
    if (game_won == true) { 
        return
    }
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    if (col < COL - 1) {
        if (actual_table[row][col + 1][1] == 0) {
            for (let i = 0; i < actual_table[row][col][1]; i++) {
                actual_table[row][col - i + 1][0] = actual_table[row][col - i][0];
                actual_table[row][col - i + 1][1] = actual_table[row][col - i][1];
                actual_table[row][col - i + 1][2] = actual_table[row][col - i][2];
            }
            actual_table[row][col - actual_table[row][col][1] + 1][1] = 0;
            draw_table(actual_table);
            check_win();
        }
    }
}

function down(cell) {
    if (game_won == true) { 
        return
    }
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    if (row < ROW - 1) {
        if (actual_table[row + 1][col][1] == 0) {
            for (let i = 0; i < actual_table[row][col][1]; i++) {
                actual_table[row - i + 1][col][0] = actual_table[row - i][col][0];
                actual_table[row - i + 1][col][1] = actual_table[row - i][col][1];
                actual_table[row - i + 1][col][2] = actual_table[row - i][col][2];
            }
            actual_table[row - actual_table[row][col][1] + 1][col][1] = 0;
            draw_table(actual_table);
            check_win();
        }
    }
}

function up(cell) {
    if (game_won == true) { 
        return
    }
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    if (row < ROW - 1) {
        if (actual_table[row - 1][col][1] == 0) {
            for (let i = 0; i < actual_table[row][col][1]; i++) {
                actual_table[row + i - 1][col][0] = actual_table[row + i][col][0];
                actual_table[row + i - 1][col][1] = actual_table[row + i][col][1];
                actual_table[row + i - 1][col][2] = actual_table[row + i][col][2];
            }
            actual_table[row + actual_table[row][col][1] - 1][col][1] = 0;
            draw_table(actual_table);
            check_win();
        }
    }
}

function check_win() {
    if (actual_table[2][5][0] == "r2") {
        game_won = true;

        levelNum = Number(level);

        if (!finishes.includes(levelNum)) {            
            finishes.push(levelNum);
            localStorage.setItem("_rush_hour_finishes", JSON.stringify(finishes));
        }

        let table_inner_html = `<h1 class="win" onclick="set_mode(${level+1})" style="cursor:pointer">Level ${level+1} completed<br>Next level</h1>`
        if (level == levels.length - 1) {
            table_inner_html = `<h1 class="win" onclick="set_mode(0)" style="cursor:pointer">Level ${level+1} completed<br>First level</h1>`
        }
        table_inner_html += document.getElementById("table_container").innerHTML;
        document.getElementById("table_container").innerHTML = table_inner_html;

        loadLevels();
    }
}

function set_mode(mode) {    
    document.querySelectorAll(".buttonLevel").forEach(btn => {
        btn.classList.remove("active");
    });

    let button = document.querySelector(`.buttonLevel[data-level="${mode}"]`);

    if (button) {
        button.classList.add("active");
    }

    localStorage.setItem("_rush_hour_last_game", mode);
    level = mode;
    actual_table = deepcopy(levels[mode]);

    document.getElementById("level").innerHTML = level + 1;
    game_won = false;
    draw_table(actual_table);
}

function reset() {
    set_mode(level);
    game_won = false;
    draw_table(actual_table);
}

function resetLevel(){    
    let text = "Reset level completed?";
    if (confirm(text) == true) {
        selectLevelDiv.classList.add("hidden");
        document.querySelectorAll(".buttonLevel").forEach(btn => {
            btn.classList.remove("completed");
        });
        localStorage.setItem("_rush_hour_finishes", JSON.stringify([]));
        set_mode(0);
    } 
}

function selectLevel() {
    selectLevelDiv.classList.remove("hidden");
}

function volver() {
    selectLevelDiv.classList.add("hidden");    
}