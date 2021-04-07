let board = [
    [{type: "nobody"},{type: "nobody"},{type: "nobody"}],
    [{type: "nobody"},{type: "nobody"},{type: "nobody"}],
    [{type: "nobody"},{type: "nobody"},{type: "nobody"}]
];

const getClick = (col, row) => {
    const colum = "col" + col + row;
    const rowe = row - 1;
    const obj = col - 1;
    const clickt = document.getElementById(colum);

    if (board[rowe][obj]["type"] != "nobody") return;
    clickt.innerHTML = "<img src='cross.png' style='width: 100%; height: 100%;'>";
    clickt.classList.add("cross");
    board[rowe][obj]["type"] = "Cross";
    console.log(board[rowe]);
    if (isrowd(rowe)) {
        alert("youw winn")
        location.reload(true);
    }
    if (isrowv(obj)) {
        alert("youw winn")
        location.reload(true);
    }
    if (isdia()) {
        alert("youw winn")
        location.reload(true);
    }
    aizuhg()
}

const allechauls = (obj1, obj2, obj3) => {
    if (obj1 == obj2) {
        if (obj1 == obj3) {
            if (obj1 != "nobody") {
                return true;
            }
        }
    }
    return false;
}

const isrowd = (row) => {
    const reie = board[row]
    return allechauls(reie[0]["type"], reie[1]["type"], reie[2]["type"]);
}

const isrowv = (col) => {
    const reie = [board[0][col]["type"], board[1][col]["type"], board[2][col]["type"]];
    return allechauls(reie[0], reie[1], reie[2]);
}

const isdia = () => {
    if (allechauls(board[0][0]["type"], board[1][1]["type"], board[2][2]["type"])) {
        return true;
    }
    if (allechauls(board[0][2]["type"], board[1][1]["type"], board[2][0]["type"])) {
        return true;
    }

    return false;
}

const aizuhg = () => {
    if (stratdetect()) {
        console.log("ai finished")
    }else if (strat1()) {
        console.log("ai finished")
    }else if (strat2()) {
        console.log("ai finished")
    }else {
        const freihefelder = freefields();
        console.log(freihefelder);
        board[freihefelder[0]["row"]][freihefelder[0]["col"]]["type"] = "cycel"
        const grow = freihefelder[0]["row"] + 1;
        const gcol = freihefelder[0]["col"] + 1;
        const field = document.getElementById(`col${gcol}${grow}`)
        field.classList.add("cycel")
        field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
    }
}

const freefields = () => {
    let out = []
    for (i = 0; i<3; i++) {
        const row = i;
        const reihe = board[i];
        for (a = 0; a<3; a++) {
            if (reihe[a]["type"] == "nobody") {
                out.push({
                    "row": row,
                    "col": a
                })
            }
        }
    }
    return out;
}

const strat1 = () => {
    if (board[1][1]["type"] == "nobody") {
        board[1][1]["type"] = "cycel"
        const field = document.getElementById(`col22`)
        field.classList.add("cycel")
        field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
        return true;
    }
}

const strat2 = () => {
    if (board[0][0]["type"] == "nobody") {
        board[0][0]["type"] = "cycel"
        const field = document.getElementById(`col11`)
        field.classList.add("cycel")
        field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
        return true;
    }
    if (board[2][0]["type"] == "nobody") {
        board[2][0]["type"] = "cycel"
        const field = document.getElementById(`col13`)
        field.classList.add("cycel")
        field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
        return true;
    }
    if (board[0][2]["type"] == "nobody") {
        board[0][2]["type"] = "cycel"
        const field = document.getElementById(`col31`)
        field.classList.add("cycel")
        field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
        return true;
    }
    if (board[2][2]["type"] == "nobody") {
        board[2][2]["type"] = "cycel"
        const field = document.getElementById(`col33`)
        field.classList.add("cycel")
        field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
        return true;
    }
    return false;
}

const stratdetect = () => {
    if (board[0][0]["type"] == board[0][1]["type"]) {
        if (board[0][0]["type"] != "cycel") {
            if (board[0][0]["type"] != "cycel") {
                board[0][2]["type"] = "cycel"
                const field = document.getElementById(`col31`)
                field.classList.add("cycel")
                field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
                return true;
            }
        }
    }
    if (board[0][0]["type"] == board[0][2]["type"]) {
        if (board[0][0]["type"] != "cycel") {
            if (board[0][0]["type"] != "cycel") {
                board[0][1]["type"] = "cycel"
                const field = document.getElementById(`col21`)
                field.classList.add("cycel")
                field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
                return true;
            }
        }
    }
    if (board[0][1]["type"] == board[0][2]["type"]) {
        if (board[0][1]["type"] != "nobody") {
            if (board[0][1]["type"] != "cycel") {
                board[0][0]["type"] = "cycel"
                const field = document.getElementById(`col11`)
                field.classList.add("cycel")
                field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
                return true;
            }
        }
    }


    if (board[1][0]["type"] == board[1][1]["type"]) {
        if (board[1][0]["type"] != "nobody") {
            if (board[1][0]["type"] != "cycel") {
                board[1][2]["type"] = "cycel"
                const field = document.getElementById(`col32`)
                field.classList.add("cycel")
                field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
                return true;
            }
        }
    }
    if (board[1][0]["type"] == board[1][2]["type"]) {
        if (board[1][0]["type"] != "nobody") {
            if (board[1][0]["type"] != "cycel") {
                board[1][1]["type"] = "cycel"
                const field = document.getElementById(`col22`)
                field.classList.add("cycel")
                field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
                return true;
            }
        }
    }
    if (board[1][1]["type"] == board[1][2]["type"]) {
        if (board[1][1]["type"] != "nobody") {
            if (board[1][1]["type"] != "cycel") {
                board[1][0]["type"] = "cycel"
                const field = document.getElementById(`col12`)
                field.classList.add("cycel")
                field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
                return true;
            }
        }
    }


    if (board[2][0]["type"] == board[2][1]["type"]) {
        if (board[2][0]["type"] != "cycel") {
            if (board[2][0]["type"] != "cycel") {
                board[2][2]["type"] = "cycel"
                const field = document.getElementById(`col33`)
                field.classList.add("cycel")
                field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
                return true;
            }
        }
    }
    if (board[2][0]["type"] == board[2][2]["type"]) {
        if (board[2][0]["type"] != "nobody") {
            if (board[2][0]["type"] != "cycel") {
                board[2][2]["type"] = "cycel"
                const field = document.getElementById(`col33`)
                field.classList.add("cycel")
                field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
                return true;
            }
        }
    }
    if (board[2][1]["type"] == board[2][2]["type"]) {
        if (board[2][1]["type"] != "nobody") {
            if (board[2][1]["type"] != "cycel") {
                board[2][0]["type"] = "cycel"
                const field = document.getElementById(`col13`)
                field.classList.add("cycel")
                field.innerHTML = "<img src='circel.png' style='width: 100%; height: 100%;'>"
                return true;
            }
        }
    }
    return false;
}
