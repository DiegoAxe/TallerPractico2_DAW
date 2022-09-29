var selecComboElegido = document.getElementById("comboElegido");
var nudcantiCombito = document.getElementById("cantiCombito");
var tdReciboCombo_Nombre = document.getElementById("descCombo");
var tdReciboCombo_Cantidad = document.getElementById("cantCombo");
var tdReciboCombo_Precio = document.getElementById("precCombo");
var tdReciboCombo_Subtotal = document.getElementById("subCombo");
var tdTotalFinal = document.getElementById("TotalFinal");
var btnAgregarExtras = document.getElementById("AgregarExtras");
var btnFacturaFinal = document.getElementById("FacturaFinal");
var divfacturaVisible = document.getElementById("facturaVisible");
var spanSubActual = document.getElementById("SubActual");
var divinfo_combo = document.getElementById("info_combo");
var tableListar_Extras = document.getElementById("listar_acompañantes");

var Check = [10];
var Cantidad = [10];
//Crear Variables de los checkbox
for (var i=1; i<11; i++){
    Check[i] = document.getElementById("check"+i);
    Cantidad[i] = document.getElementById("canti"+i);
}

//Creacion del objeto
var Orden = {
    //Informacion de los combos 
    comboInfantil: 3.50,
    comboPersonal: 5.75,
    comboSuper: 7.25,
    cantidadCombo: 1,
    //Informacion de cada uno de los posibles extras que pueden seleccionar
    //Precio de cada uno de los extras
    precEnsalada: 1.50,
    precPapa: 1.25,
    precPGrande: 1.75,
    precPMediana: 1.50,
    precPPequena: 1.25,
    precBGrande: 1.50,
    precBMediana: 1.25,
    precBPequena: 1,
    precCafe: 0.50,
    precPostre: 1.25,
    //Cantidad de los posibles extras
    cantEnsalada: 0,
    cantPapa: 0,
    cantPGrande: 0,
    cantPMediana: 0,
    cantPPequena: 0,
    cantBGrande: 0,
    cantBMediana: 0,
    cantBPequena: 0,
    cantCafe: 0,
    cantPostre: 0,
    //Sumatoria total de la orden
    //Subtotal y total
    SubtotalCombo: 0,
    SubtotalExtras: 0,
    Total: 0,


    //Metodos
    //Metodo que lee la seleccion del cliente del tipo de combo que 
    //ha pedido para asi tambien hacer un recuento de la cantidad de combos a comprar
    GenerarSubtotalCombo: function(){
        if (selecComboElegido.value == "combo_infantil"){
            divinfo_combo.innerHTML = "El combo infantil le trae: <br> - 1 Pieza de Pollo <br> - 1 Papas Fritas <br> - 1 Bebida Pequeña";
            tdReciboCombo_Nombre.innerHTML = "Combo Infantil";
            tdReciboCombo_Cantidad.innerHTML = `x${this.cantidadCombo}`;
            tdReciboCombo_Precio.innerHTML = `$${this.comboInfantil}`;
            this.SubtotalCombo = this.cantidadCombo * this.comboInfantil;
            tdReciboCombo_Subtotal.innerHTML = "$" + this.SubtotalCombo;
        } else if(selecComboElegido.value == "combo_personal"){
            divinfo_combo.innerHTML = "El combo personal le trae: <br> - 2 Piezas de Pollo <br> - 1 Papas Fritas <br> - 1 Bebida Mediana";
            tdReciboCombo_Nombre.innerHTML = "Combo Personal";
            tdReciboCombo_Cantidad.innerHTML = `x${this.cantidadCombo}`;
            tdReciboCombo_Precio.innerHTML = `$${this.comboPersonal}`;
            this.SubtotalCombo = this.cantidadCombo * this.comboPersonal;
            tdReciboCombo_Subtotal.innerHTML = "$" + this.SubtotalCombo;
        }else if(selecComboElegido.value == "super_combo"){
            divinfo_combo.innerHTML = "El super combo le trae: <br> - 3 Piezas de Pollo <br> - 1 Ensalada <br> - 1 Papas Fritas <br> - 1 Bebida Grande";
            tdReciboCombo_Nombre.innerHTML = "Super Combo";
            tdReciboCombo_Cantidad.innerHTML = `x${this.cantidadCombo}`;
            tdReciboCombo_Precio.innerHTML = `$${this.comboSuper}`;
            this.SubtotalCombo = this.cantidadCombo * this.comboSuper;
            tdReciboCombo_Subtotal.innerHTML = "$" + this.SubtotalCombo;
        }
        this.Total = this.SubtotalCombo + this.SubtotalExtras;
        tdTotalFinal.innerHTML = "$" + this.Total;
        spanSubActual.innerHTML = "Subtotal actual: $" + this.Total;
    },

    GenerarSubtotalExtras: function(){
        var AcumuladorDeHTML = "";
        var Contador = 2;
        var AcumuladorDineros = 0;
        if(Check[1].checked == true){
            this.cantEnsalada = Cantidad[1].value;
            AcumuladorDeHTML += "<tr>"+
            "<td>#"+Contador+" </td><td> Ensalada </td> <td> x"+this.cantEnsalada+
            "</td> <td> $"+this.precEnsalada+" </td> <td> $"+this.cantEnsalada * this.precEnsalada+"</td></tr>";
            Contador++;
            AcumuladorDineros += this.cantEnsalada * this.precEnsalada;
        }
        if(Check[2].checked == true){
            this.cantPapa = Cantidad[2].value;
            AcumuladorDeHTML += "<tr>"+
            "<td>#"+Contador+" </td><td> Papas Fritas </td> <td> x"+this.cantPapa+
            "</td> <td> $"+this.precPapa+" </td> <td> $"+this.cantPapa * this.precPapa+"</td></tr>";
            Contador++;
            AcumuladorDineros += this.cantPapa * this.precPapa;
        }
        if(Check[3].checked == true){
            this.cantPGrande = Cantidad[3].value;
            AcumuladorDeHTML += "<tr>"+
            "<td>#"+Contador+" </td><td> Pieza de Pollo Grande </td> <td> x"+this.cantPGrande+
            "</td> <td> $"+this.precPGrande+" </td> <td> $"+this.cantPGrande * this.precPGrande+"</td></tr>";
            Contador++;
            AcumuladorDineros += this.cantPGrande * this.precPGrande;
        }
        if(Check[4].checked == true){
            this.cantPMediana = Cantidad[4].value;
            AcumuladorDeHTML += "<tr>"+
            "<td>#"+Contador+" </td><td> Pieza de Pollo Mediana </td> <td> x"+this.cantPMediana+
            "</td> <td> $"+this.precPMediana+" </td> <td> $"+this.cantPMediana * this.precPMediana+"</td></tr>";
            Contador++;
            AcumuladorDineros += this.cantPMediana * this.precPMediana;
        }
        if(Check[5].checked == true){
            this.cantPPequena = Cantidad[5].value;
            AcumuladorDeHTML += "<tr>"+
            "<td>#"+Contador+" </td><td> Pieza de Pollo Pequeña </td> <td> x"+this.cantPPequena+
            "</td> <td> $"+this.precPPequena+" </td> <td> $"+this.cantPPequena * this.precPPequena+"</td></tr>";
            Contador++;
            AcumuladorDineros += this.cantPPequena * this.precPPequena;
        }
        if(Check[6].checked == true){
            this.cantBGrande = Cantidad[6].value;
            AcumuladorDeHTML += "<tr>"+
            "<td>#"+Contador+" </td><td> Bebida Grande </td> <td> x"+this.cantBGrande+
            "</td> <td> $"+this.precBGrande+" </td> <td> $"+this.cantBGrande * this.precBGrande+"</td></tr>";
            Contador++;
            AcumuladorDineros += this.cantBGrande * this.precBGrande;
        }
        if(Check[7].checked == true){
            this.cantBMediana = Cantidad[7].value;
            AcumuladorDeHTML += "<tr>"+
            "<td>#"+Contador+" </td><td> Bebida Mediana </td> <td> x"+this.cantBMediana+
            "</td> <td> $"+this.precBMediana+" </td> <td> $"+this.cantBMediana * this.precBMediana+"</td></tr>";
            Contador++;
            AcumuladorDineros += this.cantBMediana * this.precBMediana;
        }
        if(Check[8].checked == true){
            this.cantBPequena = Cantidad[8].value;
            AcumuladorDeHTML += "<tr>"+
            "<td>#"+Contador+" </td><td> Bebida Pequeña </td> <td> x"+this.cantBPequena+
            "</td> <td> $"+this.precBPequena+" </td> <td> $"+this.cantBPequena * this.precBPequena+"</td></tr>";
            Contador++;
            AcumuladorDineros += this.cantBPequena * this.precBPequena;
        }
        if(Check[9].checked == true){
            this.cantCafe = Cantidad[9].value;
            AcumuladorDeHTML += "<tr>"+
            "<td>#"+Contador+" </td><td> Cafe </td> <td> x"+this.cantCafe+
            "</td> <td> $"+this.precCafe+" </td> <td> $"+this.cantCafe * this.precCafe+"</td></tr>";
            Contador++;
            AcumuladorDineros += this.cantCafe * this.precCafe;
        }
        if(Check[10].checked == true){
            this.cantPostre = Cantidad[10].value;
            AcumuladorDeHTML += "<tr>"+
            "<td>#"+Contador+" </td><td> Postre </td> <td> x"+this.cantPostre+
            "</td> <td> $"+this.precPostre+" </td> <td> $"+this.cantPostre * this.precPostre+"</td></tr>";
            Contador++;
            AcumuladorDineros += this.cantPostre * this.precPostre;
        }
        tableListar_Extras.innerHTML = AcumuladorDeHTML;
        this.SubtotalExtras = AcumuladorDineros;
        this.Total = this.SubtotalCombo + this.SubtotalExtras;
        tdTotalFinal.innerHTML = "$" + this.Total;
        spanSubActual.innerHTML = "Subtotal actual: $" + this.Total;
    },


    //Metodo que muestre el final total del recibo
    GenerarFacturaFinal: function(){
        divfacturaVisible.style.display = "block";
    },
     
    ActualizarSubTotal: function(){
        
    }
    

};

window.onload = Orden.GenerarSubtotalCombo();

btnAgregarExtras.onclick = GenerarExtras =>{
    Orden.GenerarSubtotalExtras();
}

selecComboElegido.onchange = CambioCombo => {
    Orden.GenerarSubtotalCombo();
};

nudcantiCombito.onchange = CambioCantiCombo =>{
    Orden.cantidadCombo = nudcantiCombito.value;
    Orden.GenerarSubtotalCombo();
}

btnFacturaFinal.onclick = FactuFinal =>{
    Orden.GenerarFacturaFinal();
    selecComboElegido.disabled ="true";
    nudcantiCombito.disabled ="true";
    btnAgregarExtras.disabled ="true";
    btnFacturaFinal.disabled ="true";
}


var text_com = document.getElementById("text_com");
//
document.getElementById('Comentar').onclick= AbrirTextbox=>{
    text_com.disabled =false;
}