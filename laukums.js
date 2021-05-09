var bin=[];
var bin1=[];
var dec=[];
var dec1=[];
var saraksts=[];
var saraksts1=[];
var id2;
var id1;
var skaitit=0;
var klik;
var beigt=0;
var n=0;
var totalSeconds = 0;
var laiks=setInterval(setTime, 1000);;
var laiks1;

function setTime() {
        ++totalSeconds ;
    }
    
//    function pad(val) {
//  var valString = val + "";
//  if (valString.length < 2) {
//    return "0" + valString;
//  } else {
//    return valString;
//  }
//}
            function sajukums(){
                clearInterval(laiks);
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
               if(n==3 || n<=1 ){
                   alert("Ievadiet normālu skaitli");
               }else if (n != 3){
               sajukums();
               skaitit=0;
               beigt=0;
               totalSeconds=0;
               document.getElementById("divs1").innerHTML = '';
               let jdivs=document.getElementById("divs1");
               document.body.removeChild(jdivs);
               let ldivs=document.createElement("div");
               ldivs.setAttribute("id", "divs1");
               for (let i=0; i<n; i++){
                   let d=document.createElement("div");
                   for (let j=0; j<n; j++){
                       let button=document.createElement("button");
                       button.setAttribute("class", "hidden");
                       button.setAttribute("id", i*n+j);
                       button.setAttribute("onclick", "mainit(this)");
                       button.innerHTML=saraksts[i*n+j];
                       d.appendChild(button);
                   }
                   ldivs.appendChild(d);
               }
               laiks1=document.createElement("p");
               laiks1.setAttribute("id", "cik");
               ldivs.appendChild(laiks1);
               document.body.appendChild(ldivs);
               laiks=setInterval(setTime, 1000);
            }}
            
            function zakis() {
                var img = new Image();
                img.src = 'https://lafeber.com/mammals/wp-content/uploads/rabbit-on-carpet-px-2500929-900-300x300.jpg';
                document.getElementById('divs1').appendChild(img);
            } 
            function gliemezis() {
                var img = new Image();
                img.src = 'https://i.pinimg.com/originals/49/6a/b0/496ab0b8c16025ecf98121cd3c17272b.png';
                document.getElementById('divs1').appendChild(img);
            } 
            
            function mainit(btn){
                if (skaitit%2 == 0){
                    if (skaitit > 1&&klik == false){
                        document.getElementById(id1).className="hidden";
                        document.getElementById(id2).className="hidden";
                    }
                    btn.className="visible";
                    klik = false;
                    id1=btn.id;
                    skaitit++;
                }
                else{
                    btn.className="visible";
                    id2=btn.id;
                    skaitit++;
                    if (Math.abs(saraksts1[id1])==Math.abs(saraksts1[id2])){
                        klik=true;
                        beigt=beigt+2;
                        if (beigt == n*n){
                            let time=document.getElementById("cik");
                            time.innerHTML="Apsveicu! Jūsu laiks bija: "+totalSeconds+" sekundes";
                            let teksts = document.createElement("p");
                            console.log(totalSeconds);
                            if(totalSeconds < 30){
                               teksts.innerHTML="Jūs esat zaķis";
                               zakis(); 
                            }else {
                               teksts.innerHTML="Jūs esat gliemezis";
                               gliemezis();
                           }
                           document.getElementById('divs1').appendChild(teksts);
                        }
                    }
                }
            }
