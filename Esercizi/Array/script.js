function findElement (index, array = [23,45,65,78,90,12,32,54,67]) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]==index) {
            window.alert("l'elemento selezionato è indicizzato a:" + i + " con il seguente valore: " + array[i])
            
        } else {
            window.alert("l'elemento selezionato è inesistente")
            break;
        }
        
    }
}