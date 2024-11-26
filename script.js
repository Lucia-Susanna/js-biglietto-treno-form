// riporto i dati iniziali
const priceKm= 0.21;
const juniorDiscount = 20;
const seniorDiscount = 40;

//richiamo gli elementi che mi servono per far funzionare la logica dall'html
const btnPrint = document.getElementById('print');
const btnReset =document.getElementById('delete');
const price = document.getElementById('prezzo-finale');


//creo la funzione che mi calcola i prezzi finali

btnPrint.addEventListener('click', printPrice)

function printPrice(){
  const distance = document.getElementById('km').value
  const age = document.getElementById('fascia-eta').value

  finalPrice= priceKm*distance

  if (age==='senior'){
    finalPrice *= 1-seniorDiscount/100
  } else if (age==='junior'){
    finalPrice *= 1-juniorDiscount/100
  }
  
  price.innerHTML += finalPrice;
  
   console.log(finalPrice)

  return finalPrice
}