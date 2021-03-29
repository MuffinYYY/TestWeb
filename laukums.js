var bin1=[];
var bin=["100", "200","300", "400","500", "600","700", "800"]; 
var dec=["100", "200","300", "400","500", "600","700", "800"];
var dec1=[];
var saraksts=[];
var saraksts1=[];
var id1;
var id2;
var skaitit=0;
var klik=false;
var n=0;
            function sajukums(){
                for(let i=0; i<bin.length; i++){
                    saraksts.push(bin[i]);
                    saraksts.push(dec[i])
                    bin1[i]=i+1;
                    dec1[i]=-i-1;
                }
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
                saraksts1=[];
                for(let i=0;i<n*n/2;i++){
                    saraksts.push(bin[i]);
                    saraksts.push(dec[i]);
                    saraksts1.push(bin1[i]);
                    saraksts1.push(dec1[i]);
                }
                for(let i=0;i<saraksts.length;i++){
                    let rand=Math.floor(Math.random()*saraksts.length);
                    let tmp=saraksts[rand];
                    saraksts[rand]=saraksts[i];
                    saraksts[i]=tmp;
                    let tmph=saraksts1[rand];
                    saraksts1[rand]=saraksts1[i];
                    saraksts1[i]=tmph;
                }
            }
            function taisitLaukumu(){        
               n=document.getElementById("skaitlis").value;   
               document.getElementById("divs1").innerHTML = '';
               sajukums();
               let jdivs=document.getElementById("divs1");
               for (let i=0; i<n; i++){
                   let d=document.createElement("div");
                   document.getElementById("divs1").appendChild(d);
                   for (let j=0; j<n; j++){
                       let buttons=document.createElement("button");
                       buttons.setAttribute("class", "hidden");
                       buttons.setAttribute("id", i*n+j);
                       buttons.setAttribute("onclick", "mainit(this)");
                       buttons.innerHTML=saraksts[i*n+j];
                       d.appendChild(buttons);
                   }
                   jdivs.appendChild(d);
               }
               document.body.appendChild(jdivs);
               
            }
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
                    if (Math.abs(saraksts1[id1])==Math.abs(saraksts1[id2])){
                        klik=true;
                        document.getElementById(id1).className="visible";
                        document.getElementById(id2).className="visible";
                        beigt=beigt+2;     
                    }
                }
            }