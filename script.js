let btn1 = document.getElementsByTagName("button")[0];
let inp_count = 0;
btn1.onclick = function() {
    inp_count = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("div")[0].style.display = "none";
    Inp(inp_count);
}

function Inp(count) {
    let inpt = "";

    for (let i = 0; i < count; i++) {
        inpt += `<input type="number" placeholder="${i+1} yarışçını daxil edin.." /><br />`;
    }
    inpt += `<button onclick="Yoxla()">Ok</button>`;
    document.getElementsByTagName("div")[1].innerHTML = inpt;
}

function Yoxla() {
    let arr = [];
    let say = 0;
    for (let i = 0; i < inp_count; i++) {
        arr.push(document.getElementsByTagName("input")[i + 1].value);
    }
    arr.sort((a, b) => b - a);
    let cvb = ``;
    for (let i = 0; i < arr.length; i++) {
        if (say == 3) { break; }
        if (arr[i] != arr[i + 1]) {
            cvb += `<li>${arr[i]} ${say==0 ? " Qızıl Medal" : say==1 ? " Gümüş Medal" : " Bürünc Medal"}</li>`;
            say++;
        }
    }
    cvb = "<ul>" + cvb + "</ul>";
    document.getElementsByTagName("div")[2].innerHTML = cvb;
}