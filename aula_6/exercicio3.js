let lado1 = 10;
let lado2 = 8;
let lado3 = 15;

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    console.log(
        lado1 === lado2 && lado2 === lado3 
        ? "Triangulo equilatero"    
        : lado1 === lado2 || lado1 === lado3 || lado2 === lado3
        ?"Triangulo isosceles"
        :"Triangulo escaleno"
    );
} else {
    console.log("Não forma um triângulo");
}