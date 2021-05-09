var bin=[];
var bin1=[];
var dec=[];
var dec1=[];
var saraksts=[];
var sarakstsh=[];
var id2;
var id1;
var skaitit=0;
var klik;
var beigt=0;
var n=0;
var totalSeconds = 0;
var atskaite=setInterval(setTime, 1000);;
var radis;

function setTime() {
        totalSeconds ++;
    }
            function sajukums(){
                clearInterval(atskaite);
                for(let i=0; i<16; i++){
                    bin1[i]=i+1;
                    dec1[i]=-i-1;
                }
                bin=["100", "200","300", "400","500", "600","700", "800", "900","1000","1100","1200","1300","1400","1500","1600"];
                dec=["lg(x)=2", "400:2","100+200", "20<sup>2</sup>","&#8730 250000", "0.5x=300","100*7", "1000-200","30<sup>2</sup>","20<sup>2</sup> * &#8730 100","3300:3","40*30","(x:10)=130","1399+1","&#8730 2250000","x+100=1700"];
                for(let i=0;i<bin.length;i++){
                    let rand=Math.floor(Math.random()*bin.length);
                    let tmp=bin[rand];
                    bin[rand]=bin[i];
                    bin[i]=tmp;
                    let tmph=bin1[rand];
                    bin1[rand]=bin1[i];
                    bin1[i]=tmph;
                    let tmp1=dec[rand];
                    dec[rand]=dec[i];
                    dec[i]=tmp1;
                    let tmp2=dec1[rand];
                    dec1[rand]=dec1[i];
                    dec1[i]=tmp2;
                }
                saraksts=[];
                sarakstsh=[];
                for(let i=0;i<n*n/2;i++){
                    saraksts.push(bin[i]);
                    saraksts.push(dec[i]);
                    sarakstsh.push(bin1[i]);
                    sarakstsh.push(dec1[i]);
                }
                for(let i=0;i<saraksts.length;i++){
                    let rand=Math.floor(Math.random()*saraksts.length);
                    let tmp=saraksts[rand];
                    saraksts[rand]=saraksts[i];
                    saraksts[i]=tmp;
                    let tmph=sarakstsh[rand];
                    sarakstsh[rand]=sarakstsh[i];
                    sarakstsh[i]=tmph;
                }
            }
            function taisitLaukumu(){
               n=document.getElementById("skaitlis").value;
               if(n==3 || n<=1 ){
                   alert("Ievadiet normālu skaitli");
               }else if (n != 3){
               count=0;
               beigt=0;
               t=0;
               document.getElementById("divs1").innerHTML = '';
               sajukums();
               let jdivs=document.getElementById("divs1");
               document.body.removeChild(jdivs);
               let ldivs=document.createElement("div");
               ldivs.setAttribute("id", "divs1");
               for (let i=0; i<n; i++){
                   let mdivs=document.createElement("div");
                   for (let j=0; j<n; j++){
                       let button=document.createElement("button");
                       button.setAttribute("class", "hidden");
                       button.setAttribute("id", i*n+j);
                       button.setAttribute("onclick", "mainit(this)");
                       button.innerHTML=saraksts[i*n+j];
                       mdivs.appendChild(button);
                   }
                   ldivs.appendChild(mdivs);
               }
               radis=document.createElement("p");
               radis.setAttribute("id", "cik");
               ldivs.appendChild(radis);
               document.body.appendChild(ldivs);
               atskaite=setInterval(setTime, 1000);
            }}
            
            function mainit(btn){
                if (skaitit%2 == 0){
                    if (skaitit > 1&&klik == false){
                        document.getElementById(id1).className="hidden";
                        document.getElementById(id2).className="hidden";
                    }
                    btn.className="visible";
                    id1=btn.id;
                    skaitit++;
                    klik = false;
                }
                else{
                    btn.className="visible";
                    id2=btn.id;
                    skaitit++;
                    if (Math.abs(sarakstsh[id1])==Math.abs(sarakstsh[id2])){
                        klik=true;
                        beigt=beigt+2;
                        if (beigt == n*n){
                            clearInterval(atskaite);
                            let u=document.getElementById("cik");
                            u.innerHTML="Apsveicu! Jūsu laiks bija: "+totalSeconds+" sekundes";
                        }
                    }
                }
            }
    