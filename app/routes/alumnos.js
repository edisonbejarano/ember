import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment';
import $ from 'jquery';
import DS from 'ember-data';
import RESTAdapter from '@ember-data/adapter/rest';





export default Route.extend({  
  model: function() {
    var formdata = new FormData();
   return $.getJSON({
     cache: false,
     contentType: false,
     processData: false,
     type: 'GET',
     data:formdata,
     url: config.apiURL+"/api/Alumnos",
     }).then(function (result){
     let obj={"alumnos":[]};
     var myModel = {"tpo_idntfccn":"","nmro_idntfccn":"","prmr_nmbre":"","sgndo_nmbre":"","prmr_aplldo":"","sgndo_aplldo":"","gnro":""};

     if(result.error){
			 obj["alumnos"]["Data"]=myModel;
		 }else {
			 obj["alumnos"]["Data"]=result.Data;
		 }
     var columns = [{"title": "Modificar","component": "editRow","editable": false},
     {"propertyName":"tpo_idntfccn","title" :"Tipo Identificacion"},
     {"propertyName":"nmro_idntfccn","title" :"Numero Identificacion"},
     {"propertyName":"prmr_nmbre","title" :"Primer Nombre"},
     {"propertyName":"sgndo_nmbre","title" :"Segundo Nombre"},
     {"propertyName":"prmr_aplldo","title" :"Primer Apellido"},
     {"propertyName":"sgndo_aplldo","title" :"Segundo Nombre"},
     {"propertyName":"gnro","title" :"Genero"},
     {"title": "Opciones","component": "addOpt","editable": false},
    ];
     obj["alumnos"]["columns"] = columns;
     obj["alumnos"]["modelCreator"]= myModel;
   console.log(obj);
     return obj;

     });
 }

});
