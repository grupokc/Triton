/**
 * @class Triton.view.cartera.CarterasList
 * @extends Ext.dataview.List
 * Esta es la lista para listar clientes de la cartera
 */
Ext.define('Triton.view.cartera.CarterasList', {
    extend: 'Ext.dataview.List',
    xtype: 'carteraslist',
    requires: ['Ext.field.Search', 'Ext.plugin.ListPaging'],
    config: {
        pinHeaders: false,
        currentPage : 1,
        itemTpl: [
            '<tpl if="OportunidadVenta &gt; 0">',,
                '<div class="triton-cartera-client-tpl-green">',
            '<tpl else>',
                '<div class="triton-cartera-client-tpl">',
            '</tpl>', 
                '<p>{nombre}</p>',
                '<span>RFC : <b>{rfc}</b></span> </br>', 
                '<span>Poliza : <b>{poliza}</b></span> </br>',
                '<span>Retenedor : <b>{Nombre_Retenedor}</b></span>',
            '</div>'
        ].join(''),
        store: 'Carteras',
        useSimpleItems: true,
        //grouped: true,
        emptyText: '<div style="margin-top: 20px; text-align: center">No hay carteras con esos datos</div>',
        disableSelection: true,
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            ui: 'light',
            items: [{
                xtype: 'spacer'
            }, {
                xtype: 'searchfield',
                placeHolder: ' Buscar cartera...'
            }, {
                xtype: 'button',
                itemId:'buscarCartera',
                text:'Buscar'
            }]
        }],
        listeners: {
            initialize: function(list) {
                var scroller = list.getScrollable().getScroller();
                scroller.on({
                    scrollend: function(scroller, x, y) {
                        if (y >= scroller.maxPosition.y) {
                            var me = list,
                                currentScrollToTopOnRefresh;

                            if (!me.storeFullyLoaded()) {
                                currentScrollToTopOnRefresh = list.getScrollToTopOnRefresh();
                                list.setScrollToTopOnRefresh(false);
                                list.getStore().nextPage({
                                    addRecords: true,
                                    callback: function(records, operation, success) {
                                        list.setScrollToTopOnRefresh(currentScrollToTopOnRefresh);
                                    }
                                });
                            }
                        }
                    },
                    scope: this
                });
            }
        }
    },
    /**
     * @private
     * Returns true if the Store is detected as being fully loaded, or the server did not return a total count, which
     * means we're in 'infinite' mode
     * @return {Boolean}
     */
    storeFullyLoaded: function() {
        var store = this.getStore(),
            total;
        store.setTotalCount(localStorage.getItem('CarterasTotalRecords')),
        total = store.getTotalCount();
        return total !== null ? store.getTotalCount() <= (store.currentPage * store.getPageSize()) : false;
    }
});