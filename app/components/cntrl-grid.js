import Component from '@ember/component';

export default Component.extend({
  init:function(){
    this._super(...arguments);

    if(!this.showGlobalFilter){
      this.showGlobalFilter=true;
    }

    if(!this.multipleExpand){
        this.multipleExpand=false;
    }

    //define si tendra agrupacion
    if(!this.useDataGrouping){
        this.useDataGrouping=false;
    }

    //define el elemento por defecto de agrupacion
    if(!this.currentGroupingPropertyName){
        this.currentGroupingPropertyName=null;
    }

    //define el objeto que se filtrara
    if(!this.dataGroupProperties){
        this.dataGroupProperties=[];
    }

    if(!this.groupedValue){
        this.groupedValue=false;
    }

    //si mostrar el footer
    if(!this.showComponentFooter){
        this.showComponentFooter=true;
    }

    if(!this.showColumnsDropdown){
        this.showColumnsDropdown=false;
    }

    //usa filtro por columna
    if(!this.useFilteringByColumns){
        this.useFilteringByColumns=false;
    }

    if(!this.useNumericPagination){
      this.useNumericPagination=true;
    }

    if(!this.ModelsTablePaginationSimple){
        this.ModelsTablePaginationSimple=true;
    }

    if(!this.showPageSize){
        this.showPageSize=true;
    }

    if(!this.filteringIgnoreCase){
        this.filteringIgnoreCase=true;
    }

    if(!this.pageSize){
        this.pageSize=10;
    }
  },
  actions:{
		openmodal(actionName, record, event) {
			this.set('mdlComponentCrear', true);
		},
    closeModal(){
        this.set('mdlComponentCrear', false);
    }
	}
});
