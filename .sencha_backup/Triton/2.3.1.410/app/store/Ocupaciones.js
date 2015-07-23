/**
 * @class Triton.store.Ocupaciones
 * @extends Ext.data.store
 * El store para listar las Ocupaciones
 */
Ext.define('Triton.store.Ocupaciones', {
    extend: 'Ext.data.Store',
    requires: ['Triton.model.Ocupacion'],
    config: {
        model: 'Triton.model.Ocupacion',
        autoLoad: true,
        pageSize: 50,
        sorters: [{
            property: 'descripcion',
            direction: 'ASC'
        }],
        clearOnPageLoad : false
    }
});