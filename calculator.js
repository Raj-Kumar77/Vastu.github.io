
function goBack() {
    window.history.back();
}




let a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;
let arr=[{
    a:"1",
    b:"1",
    c:"8",
    d:"Enjoyes the good thing in life",
    e:"9",
    f:"Has good friends",
    g:"3",
    h:"Good for weaponry, automobiles, drama hall temples",
    i:"9",
    j:"Not favourable",
    k:"2",
    l:"Favourable",
    m:"8",
    n:"Good",
    o:"4",
    p:"Blessed",
    q:"27",
    r:"Your propety age is : 27"
    
},{
    a:"1",
    b:"2",
    c:"4",
    d:"Victotious",
    e:"8",
    f:"Is happy and conteneded always",
    g:"6",
    h:"Good for only prostitution business, bad for other work",
    i:"18",
    j:"Favourable",
    k:"4",
    l:"Favourable",
    m:"7",
    n:"Bad",
    o:"8",
    p:"Poor",
    q:"54",
    r:"Your propety age is : 54"
},{
    a:"1",
    b:"3",
    c:"0",
    d:"Considered good for religious merits",
    e:"7",
    f:"Acquire wealth",
    g:"1",
    h:"Fame, best for cloth shop aur dharmshala",
    i:"27",
    j:"Favourable",
    k:"6",
    l:"Favourable",
    m:"6",
    n:"Good",
    o:"3",
    p:"Power",
    q:"81",
    r:"Your propety age is : 81"
},{
    a:"1",
    b:"4",
    c:"8",
    d:"Enjoyes the good thing in life",
    e:"6",
    f:"Problems of the eye",
    g:"4",
    h:"Good for muslims (yavan), troubles from enemies",
    i:"6",
    j:"Moderate",
    k:"1",
    l:"Not Favourable",
    m:"5",
    n:"Bad",
    o:"7",
    p:"Fearlessness",
    q:"8",
    r:"Your propety age is : 8"
}];

function change(i){
    document.getElementById("1").innerHTML=arr[i].a
    document.getElementById("2").innerHTML=arr[i].b
    document.getElementById("3").innerHTML=arr[i].c
    document.getElementById("4").innerHTML=arr[i].d
    document.getElementById("5").innerHTML=arr[i].e
    document.getElementById("6").innerHTML=arr[i].f
    document.getElementById("7").innerHTML=arr[i].g
    document.getElementById("8").innerHTML=arr[i].h
    document.getElementById("9").innerHTML=arr[i].i
    document.getElementById("10").innerHTML=arr[i].j
    document.getElementById("11").innerHTML=arr[i].k
    document.getElementById("12").innerHTML=arr[i].l
    document.getElementById("13").innerHTML=arr[i].m
    document.getElementById("14").innerHTML=arr[i].n
    document.getElementById("15").innerHTML=arr[i].o
    document.getElementById("16").innerHTML=arr[i].p
    document.getElementById("17").innerHTML=arr[i].q
    document.getElementById("18").innerHTML=arr[i].r
}

function show(){
    let x=document.getElementById("inp").value;
    let z=document.getElementById("inp1").value;
    if( x=="1" && z=="1"){
        change(0);
    }
    if( x=="1" && z=="2"){
        change(1);
    }
    if( x=="1" && z=="3"){
        change(2);
    }
    if( x=="1" && z=="4"){
        change(3);
    }

}