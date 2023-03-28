// SNACK 1
// let a = prompt("inserisci il primo numero");
// let b = prompt("inserisci il secondo numero");

// if (a > b)
// {
//     document.writeln(`Il numero piu' grande e' ${a}`);
// }
// else if (b > a)
// {
//     document.writeln(`Il numero piu' grande e' ${b}`);
// }
// else
// document.writeln(`I due numeri sono uguali`);



// // SNACK 2

//  let p1 = prompt("prima parola");
//  let p2 = prompt("seconda parola");

//  if (p1.length > p2.length)
//  {
//     console.log(p2, " ", p1);
//  }

//  else
//  {
//     console.log(p1, " ", p2);
//  }


// SNACK 3


let somma = 0;

for (let i=1; i <= 10; i++)
{
    let n = prompt("inserisci un numero");
    somma += parseFloat(n);
}

console.log(somma);