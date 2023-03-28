let a = prompt("inserisci il primo numero");
let b = prompt("inserisci il secondo numero");

if (a > b)
{
    document.writeln(`Il numero piu' grande e' ${a}`);
}
else if (b > a)
{
    document.writeln(`Il numero piu' grande e' ${b}`);
}
else
document.writeln(`I due numeri sono uguali`);
