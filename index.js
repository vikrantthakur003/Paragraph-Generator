const input  = document.getElementById("numberOfwords");
const container = document.querySelector(".container");

const generateWord = (n)=>{
    let text = "";
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0;i<n;i++)
    {
        const random  = (Math.random()*25).toFixed(0);
        text += letter[random];
    }
    return text;
}
let NumOfword;
const generatePara = ()=>{
    NumOfword = Number(input.value);

    const para = document.createElement("p");

    let data = "";
    for(let i=0;i<NumOfword;i++)
    {
        const randomWord = (Math.random()*15).toFixed(0); // 15 size word generate
        data += generateWord(randomWord);

        data += " ";
    }

    para.innerText = data;

    para.setAttribute("class","paras");

    container.append(para);
}