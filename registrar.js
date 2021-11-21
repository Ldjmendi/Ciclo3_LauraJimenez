var UPB_Tripulantes=[]
console.log(UPB_Tripulantes)

function agregarRegistro()
{
var nombre=document.getElementById('txt_nombre').value	
var Apellidos=document.getElementById('txt_Apellidos').value
var Cedula=document.getElementById('txt_Cedula').value 
var fnacimiento=document.getElementById('txt_fnacimiento').value
var persona={"nombre":nombre,"Apellidos":Apellidos,"Cedula":Cedula}
UPB_Tripulantes.push(persona)
console.log(UPB_Tripulantes)
document.getElementById('nombre').value=""	
document.getElementById('Apellidos').value=""
document.getElementById('Cedula').value=""
document.getElementById('fnacimiento')=""

}