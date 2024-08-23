function AreaT(l1,l2){
    let area = l1 * l2 / 2
    console.log(area);
}

AreaT(5,3);

function Perimetro(){
    let l1 = Number(prompt("Lado 1"));
    let perimetro = l1 * 4;
    console.log(perimetro);
}
Perimetro();

function Inpar(){
    let numero = Number(prompt("Dame el Numero"));
    let numero2 = numero%2

    if(numero2 == 0 ){
    console.log("par");
    }else{
    console.log("inpar")
    }
}
Inpar();

let verdadero = true;
