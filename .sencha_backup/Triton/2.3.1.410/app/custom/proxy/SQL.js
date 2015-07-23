/**
 * @class Triton.store.Agentes
 * @extends Ext.data.store
 * El store para listar los agentes
 */

Ext.define('Triton.custom.proxy.SQL', {
    alias: 'proxy.customsql',
    extend: 'Ext.data.proxy.Sql',
    selectRecords: function(transaction, params, callback, scope) {
        var me = this,
            table = me.getTable(),
            idProperty = me.getModel().getIdProperty(),
            sql = 'SELECT * FROM ' + table,
            records = [],
            filterStatement = ' WHERE ',
            sortStatement = ' ORDER BY ',
            i, ln, data, result, count, rows, filter, sorter, property, value;

        result = new Ext.data.ResultSet({
            records: records,
            success: true
        });

        if (!Ext.isObject(params)) {
            sql += filterStatement + idProperty + ' = ' + params;
        } else {
            ln = params.filters && params.filters.length;
            if (ln) {
                for (i = 0; i < ln; i++) {
                    filter = params.filters[i];
                    property = filter.getProperty();
                    value = filter.getValue();
                    if (property !== null) {
                        sql += filterStatement + property + ' ' + (filter.getAnyMatch() ? ('LIKE \'%' + value + '%\'') : ('= \'' + value + '\''));
                        filterStatement = ' OR ';
                    }
                }
            }

            ln = params.sorters && params.sorters.length;
            if (ln) {
                for (i = 0; i < ln; i++) {
                    sorter = params.sorters[i];
                    property = sorter.getProperty();
                    if (property !== null) {
                        sql += sortStatement + property + ' ' + sorter.getDirection();
                        sortStatement = ', ';
                    }
                }
            }

            // handle start, limit, sort, filter and group params
            if (params.page !== undefined) {
                sql += ' LIMIT ' + parseInt(params.start, 10) + ', ' + parseInt(params.limit, 10);
            }
        }
        transaction.executeSql(sql, null,
            function(transaction, resultSet) {
                rows = resultSet.rows;
                count = rows.length;

                for (i = 0, ln = count; i < ln; i++) {
                    data = rows.item(i);
                    records.push({
                        clientId: null,
                        id: data[idProperty],
                        data: data,
                        node: data
                    });
                }

                result.setSuccess(true);
                result.setTotal(count);
                result.setCount(count);

                if (typeof callback == 'function') {
                    callback.call(scope || me, result);
                }
            },
            function(transaction, error) {
                result.setSuccess(false);
                result.setTotal(0);
                result.setCount(0);

                if (typeof callback == 'function') {
                    callback.call(scope || me, result, error);
                }
            }
        );
    },
});
