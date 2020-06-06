function GenerateHex() {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let hexCode = "#";

    while (hexCode.length < 7) {
        hexCode += digits[Math.round(Math.random() * digits.length)];
    }

    return hexCode;

}

function startGame() {
    document.getElementById("inputBox").style.display = "block";

}

function addHyphen(object) {
    let obj = document.getElementById(object.id);

    obj = obj.value.split('-').join('');
    console.log(obj.value);
    let finObj = obj.match(/.{1,2}/g).join('-');
    document.getElementById(object.id).value = finObj;
}