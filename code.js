// Empty 6X6 table initialized with in deepcopy.
var empty_table =
    [
        [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
    ]
// 1 = Red1/2; 2 = Brown; 3 = Light blue; 4 = Yellow; 5 = Purple; 6 = Green; 7 = Rose rs; 8 = Dark blue; 9 = Orange; 10 = cyan; 11 = darkgreen; 12 = magenta

// [0] => color; 
// [1] => Number of following blocks / if 0 = empty; 
// [2] => button to move (1: left, 2: right, 3: up, 4: down, 0: middle)

var intermediate_table = [
    [["lb", 2, 1], ["lb", 2, 2], ["rs", 2, 3], ["or", 3, 3], ["wh", 0, 0], ["wh", 0, 0]],
    [["br", 2, 1], ["br", 2, 2], ["rs", 2, 4], ["or", 3, 0], ["wh", 0, 0], ["wh", 0, 0]],
    [["db", 3, 3], ["r1", 2, 1], ["r2", 2, 2], ["or", 3, 4], ["wh", 0, 0], ["wh", 0, 0]],
    [["db", 3, 0], ["wh", 0, 0], ["wh", 0, 0], ["wh", 0, 0], ["wh", 0, 0], ["wh", 0, 0]],
    [["db", 3, 4], ["pu", 2, 1], ["pu", 2, 2], ["wh", 0, 0], ["wh", 0, 0], ["wh", 0, 0]],
    [["gr", 3, 1], ["gr", 3, 0], ["gr", 3, 2], ["wh", 0, 0], ["wh", 0, 0], ["wh", 0, 0]]];

var advanced_table = [
    [["wh", 0, 0], ["ye", 2, 3], ["wh", 0, 0], ["rs", 3, 1], ["rs", 3, 0], ["rs", 3, 2]],
    [["br", 2, 3], ["ye", 2, 4], ["wh", 0, 0], ["db", 2, 3], ["cy", 3, 3], ["wh", 0, 0]],
    [["br", 2, 4], ["r1", 2, 1], ["r2", 2, 2], ["db", 2, 4], ["cy", 3, 0], ["dg", 2, 3]],
    [["lb", 2, 3], ["pu", 3, 1], ["pu", 3, 0], ["pu", 3, 2], ["cy", 3, 4], ["dg", 2, 4]],
    [["lb", 2, 4], ["wh", 0, 0], ["gr", 2, 3], ["wh", 0, 0], ["wh", 0, 0], ["ma", 2, 3]],
    [["wh", 0, 0], ["wh", 0, 0], ["gr", 2, 4], ["or", 2, 1], ["or", 2, 2], ["ma", 2, 4]]];

var expert_table = [
    [["br", 2, 3], ["wh", 0, 0], ["wh", 0, 0], ["gr", 3, 1], ["gr", 3, 0], ["gr", 3, 2]],
    [["br", 2, 4], ["lb", 2, 1], ["lb", 2, 2], ["rs", 2, 3], ["wh", 0, 0], ["wh", 0, 0]],
    [["r1", 2, 1], ["r2", 2, 2], ["ye", 2, 3], ["rs", 2, 4], ["wh", 0, 0], ["dg", 3, 3]],
    [["wh", 0, 0], ["wh", 0, 0], ["ye", 2, 4], ["db", 2, 1], ["db", 2, 2], ["dg", 3, 0]],
    [["wh", 0, 0], ["wh", 0, 0], ["pu", 2, 3], ["or", 2, 1], ["or", 2, 2], ["dg", 3, 4]],
    [["wh", 0, 0], ["wh", 0, 0], ["pu", 2, 4], ["cy", 3, 1], ["cy", 3, 0], ["cy", 3, 2]]];

var grandmaster_table = [
    [["br", 2, 1], ["br", 2, 2], ["gr", 2, 3], ["wh", 0, 0], ["or", 2, 1], ["or", 2, 2]],
    [["lb", 2, 1], ["lb", 2, 2], ["gr", 2, 4], ["wh", 0, 0], ["cy", 3, 3], ["wh", 0, 0]],
    [["ye", 3, 3], ["wh", 0, 0], ["r1", 2, 1], ["r2", 2, 2], ["cy", 3, 0], ["wh", 0, 0]],
    [["ye", 3, 0], ["rs", 3, 1], ["rs", 3, 0], ["rs", 3, 2], ["cy", 3, 4], ["dg", 2, 3]],
    [["ye", 3, 4], ["wh", 0, 0], ["wh", 0, 0], ["db", 2, 3], ["wh", 0, 0], ["dg", 2, 4]],
    [["pu", 2, 1], ["pu", 2, 2], ["wh", 0, 0], ["db", 2, 4], ["ma", 2, 1], ["ma", 2, 2]]];


let level_name = "";
let actual_table = deepcopy(intermediate_table); // Variable to store the actual table shoiwed on the screen.
let game_won = false; // Variable to check if the game is won.
let ROW = 6; // Number of rows.
let COL = 6; // Number of columns.
let level = 0; // Variable to store the number of level that is being played.

window.onload = function () {
    draw_table(actual_table);
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
    let table_html = generate_table_html(table);
    document.getElementById("table_container").innerHTML = table_html;
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
                    button_sym = "&#9664"
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

function generate_table_html(table) {
    let table_inner_html = ""; 
    if (level == 0) {
        level_name = "Intermediate";
    }
    else if (level == 1) {
        level_name = "Advanced";
    }
    else if (level == 2) {
        level_name = "Expert";
    }
    else if (level == 3) {
        level_name = "Grand Master";
    };

    if (game_won == false) { // If game is still ongoing, generates the html table with onclick buttons.
        table_inner_html += table_ongoing(table);
        return `<h1 class="actual_level">Playing <u>${level_name} Level</u></h1><table class="table">${table_inner_html}</table>`;
    }
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

        table_inner_html = `<h1 class="win">Congratulations! You won the <u>${level_name} level</u></h1>`
        table_inner_html += document.getElementById("table_container").innerHTML;
        document.getElementById("table_container").innerHTML = table_inner_html;
    }
}

function set_mode(mode) {
    if (mode == 0) {
        actual_table = deepcopy(intermediate_table);
        level = 0;
    }
    else if (mode == 1) {
        actual_table = deepcopy(advanced_table);
        level = 1;
    }
    else if (mode == 2) {
        actual_table = deepcopy(expert_table);
        level = 2;
    }
    else if (mode == 3) {
        actual_table = deepcopy(grandmaster_table);
        level = 3;
    }
    game_won = false;
    draw_table(actual_table);

}

function reset() {
    set_mode(level);
    game_won = false;
    draw_table(actual_table);
}
