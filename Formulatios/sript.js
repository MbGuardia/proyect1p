var imprimir=document.querySelector("#imprimir");
const ver=()=>{

	var foto=document.querySelector("#foto").value;
		var folio=document.querySelector("#folio").value;
	var aciertos=document.querySelector("#aciertos").value;
	var carrera=document.querySelector("#carrera").value;
	var fecha=document.querySelector("#fecha").value;
	var na=document.querySelector("#na").value;
	var apa=document.querySelector("#apa").value;
	var ama=document.querySelector("#ama").value;
	var diaa=document.querySelector("#diaa").value;
	var mesa=document.querySelector("#mesa").value;
	var anoa=document.querySelector("#anoa").value;
		var lugardena=document.querySelector("#lugardena").value;
	var curpa=document.querySelector("#curpa").value;
	var sexoa=document.querySelector("#sexoa").value;
	var alergia=document.querySelector("#alergia").value;
	var tela=document.querySelector("#tela").value;
	var telm=document.querySelector("#telm").value;
	var emaila=document.querySelector("#emaila").value;
	var emailt=document.querySelector("#emailt").value;
	var calle=document.querySelector("#calle").calle;
	var numero=document.querySelector("#numero").value;
	var colonia=document.querySelector("#colonia").value;
	var localidad=document.querySelector("#localidad").value;
	var cp=document.querySelector("#cp").value;
	var municipio=document.querySelector("#municipio").value;
	var estado=document.querySelector("#estado").value;
	var nmescuela=document.querySelector("#nmescuela").value;
	var cct=document.querySelector("#cct").value;
var promedio=document.querySelector("#promedio").value;
var anoin=document.querySelector("#anoin").value;
var anoegre=document.querySelector("#anoegre").value;
var nomt=document.querySelector("#nomt").value;
var apt=document.querySelector("#apt").value;
var amt=document.querySelector("#amt").value;
var curpt=document.querySelector("#curpt").value;
var gra=document.querySelector("#gra").value;
		
		
		
	var tabla=`<table border id="perro">
		<tr>
		<td>    <img src="images (1).png " alt="" width="100 " height="50">
 </td> 
 <td> ___________________________</td>
			<td>     <img src="images (4).jpeg " alt="" width="100 " height="50"></td> 
	 </tr>
	 	<tr>
	 	<td>Foto ${foto} </td> 
	  </tr>
	<tr>
	<td>Folio: ${folio} </td> 
 </tr>
 	<tr>
 	<td>Aciertos: ${aciertos} </td> 
  </tr>
  	<tr>
  	<td>Carrera: ${carrera} </td> 
   </tr>
 	<tr>
 	<td>Fecha ${fecha} </td> 
  </tr>
	<tr>
	<td>Nombre del alumno: ${na} </td> 
 </tr>
 <tr>
 	<td>Apellido paterno: ${apa} </td> 
  </tr>
	<tr>
	<td>Apellido Materno: ${ama} </td> 
 </tr>
 	<tr>
 	<td>Dia de nacimiemto: ${diaa} </td> 
  </tr>
 	<tr>
 	<td>Mes de nacimiemto:${mesa} </td> 
  </tr>
 	<tr>
 	<td>Año de nacimiemto: ${anoa} </td> 
  </tr>
 	<tr>
 	<td>Lugar de Nacimiento: ${lugardena} </td> 
  </tr>
 	<tr>
 	<td>Curp: ${curpa} </td> 
  </tr>
 	<tr>
 	<td>Sexo: ${sexoa} </td> 
  </tr>
 	<tr>
 	<td>Alergia: ${alergia} </td> 
  </tr>
 	<tr>
 	<td>Telefono del alumno: ${tela} </td> 
  </tr>
 	<tr>
 	<td>Telefono del tutor: ${telm} </td> 
  </tr>
 	<tr>
 	<td>Email alumno: ${emaila} </td> 
  </tr>
 	<tr>
 	<td>Email tutor: ${emailt} </td> 
  </tr>
 	<tr>
 	<td>Calle: ${calle} </td> 
  </tr>
 	<tr>
 	<td>Numero: ${numero} </td> 
  </tr>
 	<tr>
 	<td>Colonia: ${colonia} </td> 
  </tr>
  	<tr>
  	<td>Localidad: ${localidad} </td> 
   </tr>
  	<tr>
  	<td>Codigo postal: ${cp} </td> 
   </tr>
  	<tr>
  	<td>Municipio: ${municipio} </td> 
   </tr>
 	<tr>
 	<td>Estado: ${estado} </td> 
  </tr>
	<tr>
	<td>Nombre de la escuela: ${nmescuela} </td> 
 </tr>
	<tr>
	<td>CCT: ${cct} </td> 
 </tr>
	<tr>
	<td>Promedio: ${promedio} </td> 
 </tr>
	<tr>
	<td>Año de ingreso: ${anoin} </td> 
 </tr>
	<tr>
	<td>Año de egreso: ${anoegre} </td> 
 </tr>
 	<tr>
<td>Nombre del tutor: ${nomt} </td> 
  </tr>
  	<tr>
  	<td>Apellido paterno del tutor: ${apt} </td> 
   </tr>
 	<tr>
 	<td>Apellido materno del tutor:${amt} </td> 
  </tr>
 	<tr>
 	<td>Curp del tutor:${curpt} </td> 
  </tr>
   	<tr>
   	<td>Ultimo grado de eatudios:${gra} </td> 
    </tr>
`;
imprimir.innerHTML=tabla;

}

const borrar=()=>{
imprimir.innerHTML="";

}
