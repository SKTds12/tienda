var cont=0;
var total=0;
var seleccionadas=[];
function actualizarTotal() {
    total = 0;
    $('#tabla tbody tr').each(function () {
        total += parseFloat($(this).find('td:last').text());
    });
    $('#total').text(total.toFixed(2));
}
function ordenarNumeros() {
    $('#tabla tbody tr').each(function (index) {
        $(this).find('td:first').text(index + 1);
    });
}
function seleccionar(id_fila) {
    var index = seleccionadas.indexOf(id_fila);
    if (index !== -1) {
        $("#" + id_fila).removeClass("seleccionada");
        seleccionadas.splice(index, 1);
    } else {
        $("#" + id_fila).addClass("seleccionada");
        seleccionadas.push(id_fila);
    }
}
function eliminar() {
    for (let i = 0; i < seleccionadas.length; i++) {
        $("#" + seleccionadas[i]).remove();
    }
    cont -= seleccionadas.length;
    seleccionadas = [];
    $("#span1").text(cont);
    ordenarNumeros();
    actualizarTotal();
}
function agregar(id,nombre,precio){
    cont++
    $("#span1").text(cont);
    var fila = '<tr id="fila'+cont+'" class="selected" onclick=seleccionar(this.id)  ><td>'+cont+"</td><td>"+nombre+"</td><td>"+precio+"</td></tr>"
    $("#tabla tbody").append(fila);

    total+=precio;
    actualizarTotal();
    limite(cont);
}
$("#btnpizza").click(function (e) { 
    var nombre= $("#nombre1").text();
    var precio= $("#precio1").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});
$("#btnbrgr").click(function (e) { 
    var nombre= $("#nombre2").text();
    var precio= $("#precio2").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});
$("#btncafe").click(function (e) { 
    var nombre= $("#nombre3").text();
    var precio= $("#precio3").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});
$("#btnice").click(function (e) { 
    var nombre= $("#nombre4").text();
    var precio= $("#precio4").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});
$("#btnElim").click(function (e) {
    eliminar(); 
});
$("#btnpizza2").click(function (e) { 
    var nombre= $("#nombre5").text();
    var precio= $("#precio1").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});
$("#btnbrgr2").click(function (e) { 
    var nombre= $("#nombre6").text();
    var precio= $("#precio2").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});
$("#btncafe2").click(function (e) { 
    var nombre= $("#nombre7").text();
    var precio= $("#precio3").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});
$("#btnice2").click(function (e) { 
    var nombre= $("#nombre8").text();
    var precio= $("#precio4").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});
