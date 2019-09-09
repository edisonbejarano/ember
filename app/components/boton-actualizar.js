/*Carga permisos al record de edicion y muestra el formulario de edicion en ventana modal.
*/
import Component from '@ember/component';
import {get} from '@ember/object';

export default Component.extend({
	init(){
		this._super(...arguments);
		//verifico la existensia del paso de permisos y los cargo al record
 	},
	didRender(){
			this._super(...arguments);
	},
	actions:{
		mostrar_ventana(actionName, record, event) {
			get(this, 'sendAction')(actionName, record);
			this.set('mdlComponent', true);
		}
	}
});
