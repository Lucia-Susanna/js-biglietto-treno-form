Form biglietto treno
===
Repo: js-biglietto-treno-form

# Istruzioni :
- Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

## Svolgimento:
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console

- creo file html con due iput e un bottone
- collego html a js e inizio a creare la logica applicando i vari sconti utilizzado if e stampando in pagina il prezzo finale

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

 - solo quando tuta la logica funziona procedo con la creazione di un form vero e proprio con relativa stampa di biglietto.
 - avrò nella versione finale due bottoni, uno per la stampa dl biglietto uno per il reset