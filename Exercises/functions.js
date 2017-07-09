// Ejemplo de funciones - Semana 2 Bootcamp

function imprimirBalance(balance) {
  // Imprimir balance
  console.log(`Su dinero actual en la Cuenta 1 es: ${balance}`)
}


function retirarDinero(valorRetiro, balance) {
    // Solo puede retirar dinero si es menor que el balance
    if(valorRetiro >= balance){
    	balance -= valorRetiro
    	console.log(`Acabas de retirar ${valorRetiro} de tu cuenta. Quedas con ${balance}`)
    }
    else{
    	console.log(`Usted tiene en su cuenta ${balance} y no puede retirar ${valorRetiro}`)
    }
}


function transferir (valorTransferir, balance, balance2) {
    // transferir balance a otro balance2
    balance -= valorTransferir
    balance2 += valorTransferir

    console.log(`Tu saldo actual es de: Cuenta 1 -> ${balance}, Cuenta 2 -> ${balance2}`)
}


function imprimirBalance2 (balance2) {
 // Imprimir el balance2
 	console.log(`Su dinero actual en la Cuenta 2 es: ${balance2}`)
}


function retirarTodoMiDinero(balance) { // Retirar de 100 en 100

	let acum = 0

	while(balance > 0){
		acum += 1
		balance -= 100
		console.log(`Retiro #${acum}. El saldo de tu Cuenta 1 es de: ${balance}`)
	}

	console.log(`- Has quedado sin dinero en ${acum} retiros de a 100`)

	if(balance<0){
		console.log(`- Le quedas debiendo al banco ${balance*(-1)}`)
	}
}
