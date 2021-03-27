
let img=["100","200","300","400","500","600","700","800"];
let txt=["100","200","300","400","500","600","700","800"];
let saraksts=[];
var x; 
var klik = false;

        function sajukums(){
             for(let i=0;i<img.length;i++){
                saraksts.push(img[i]);
                saraksts.push(txt[i]);
             }
             for(let i=0;i<saraksts.length;i++){
                let rand=Math.floor(Math.random()*saraksts.length);
                let tmp=saraksts[rand];
                saraksts[rand]=saraksts[i];
                saraksts[i]=tmp;
            }
        }
        function taisitLaukumu() {
            sajukums();      
            document.getElementById("divs1").innerHTML = '';
            x = document.getElementById("nskaitlis").value;
            
            for (let i = 0; i < x; i++) {
                let d = document.createElement("br");
                document.getElementById("divs1").appendChild(d);
                for (let j = 0; j < x; j++) {
                   let buttons = document.createElement("button");
                   buttons.style="height:50px;width:50px;background-color: #474e5d;";
                   buttons.setAttribute("id", i*x+j);
                   document.getElementById("divs1").appendChild(buttons);    
                   console.log(i*x+j);
                   buttons.onclick=function () {
                       buttons.innerHTML= saraksts[i*x+j];
                   }
                }
            }
        }