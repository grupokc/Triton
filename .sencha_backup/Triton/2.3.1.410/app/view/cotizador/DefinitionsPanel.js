/**
 * @class Triton.view.cotizador.DefinitionsPanel
 * @extends Ext.Panel
 * El panel que tiene las definiciones de las coberturas
 */
Ext.define('Triton.view.cotizador.DefinitionsPanel', {
    extend: 'Ext.Panel',
    xtype: 'definitionspanel',
    config: {
        modal: true,
        width: '100%',
        height: '100%',
        margin: '-5',
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Definiciones',
            items: [{
                text: 'Atrás',
                ui: 'back',
                handler: function(btn) {
                    btn.up('definitionspanel').hide();
                }
            }]
        }],
        scrollable: true,
        tpl: [
            '<div class="triton-cotizador-resume-tpl">',
            '<tpl for=".">',
            '<div class="datos">',
            '<span>{nombre}</span>',
            '<ul>',
            '<li><b style="font-size:12px">{definicion}</b></li>',
            '<li>Beneficiario: <b style="font-size:12px">{beneficiario}</b></li>',
            '<li>Costo: <b style="font-size:12px">{costo}</b></li>',
            '<li>Caracteristicas:</li>',
            '<tpl for="caracteristicas">',
            '<li style="font-size:10px">* {.}</li>',
            '</tpl>',
            '</ul>',
            '</div>',
            '</tpl>',
            '</div>'
        ].join(''),
        data: [{
            nombre: 'BAS',
            definicion: 'Beneficio básico por fallecimiento (Fallecimiento)',
            beneficiario: 'Titular',
            costo: 'Paquete Básico',
            caracteristicas: [
                'Cobertura: Fallecimiento del titular',
                'Suma asegurada (SA): Contratada por Titular, Minima: $30,000 m.n. Máxima: sujeto a suscripción',
                'Edades de aceptación (EA): 15 a 70 años',
                'Descuento 2 años por no fumador, 3 años por ser mujer',
                'Cobertura vitalicia (Se cancela por fallecimiento o solución del asegurado)',
                'Cobertura si el titular fallece dentro de los primeros 5 años, se devuelven las primas de riesgo',
                'Puede incrementar la Suma Asegurada'
            ]
        }, {
            nombre: 'PV',
            definicion: 'Protección Vitalicia',
            beneficiario: 'Características generales',
            costo: 'Paquete Básico SIN COSTO',
            caracteristicas: [
                'Hasta los 99 años del asegurado titular se actualiza mensualmente primas excedentes / Retiros se pueden incluir o eliminar beneficios adicionales'
            ]
        }, {
            nombre: 'FR',
            definicion: 'Fondo de reserva',
            beneficiario: 'Características generales',
            costo: 'Paquete Básico SIN COSTO',
            caracteristicas: []
        }, {
            nombre: 'FA',
            definicion: 'Fondo de ahorro',
            beneficiario: 'Características generales',
            costo: 'Paquete Básico SIN COSTO',
            caracteristicas: []
        }, {
            nombre: 'CPFT',
            definicion: 'Constancia de protección por fallecimiento (Fallecimiento)',
            beneficiario: 'Titular',
            costo: 'Paquete Básico',
            caracteristicas: [
                'Cobertura: protección provisional por fallecimiento durante 90 dias a partir de la fecha de contratación',
                'Suma asegurada (SA): Hasta $ 500,000 m.n. o igual a la solicitada en BAS',
                '(SA) Mínima y máxima: suma de primas de riesgo pagadas',
                'Edades de aceptación (EA): 18 a 65 años',
                'Cancelación a)Fallecimiento titular b)Al finalizar 90 dias c)Al emitirse la póliza'
            ]
        }, {
            nombre: 'PFT',
            definicion: 'Protección por fallecimiento Temprano (Fallecimiento)',
            beneficiario: 'Titular',
            costo: 'Paquete Básico',
            caracteristicas: [
                'Cobertura: En caso de fallecimiento del Asegurado Titular dentro de los primeros 5 años de cobertura, se pagarán a los beneficiarios las primas de riesgo pagadas hasta el momento',
                'Suma asegurada (SA): Primas de riesgo pagadas al momento del fallecimiento',
                '(SA) Mínima y máxima: suma de primas de riesgo pagadas',
                'Edades de aceptación (EA): 15 a 70 años',
                'Cancelación a)Fallecimiento titular b) Al finalizar el 5to año de vigencia c) Cancelación de la póliza ',
            ]
        }, {
            nombre: 'ET',
            definicion: 'Beneficio adicional de pago anticipado por enfemedad en fase terminal (Enfermedad)',
            beneficiario: 'Titular',
            costo: 'Paquete Básico',
            caracteristicas: [
                'Cobertura: Cubrirá gastos de una enfermedad terminal',
                'Suma asegurada (SA): Anticipo del 30% de la (SA) Básica',
                'Nota: La SA se queda en un 70%',
                'Edades de aceptación (EA): 15 a 70 años',
                'Cancelación: a) Al hacer uso de este beneficio b)Cancelación de la póliza',
                'Período de espera: Se deberá tener por lo menos 180 días con la póliza para hacer uso de este beneficio',
            ]
        }, {
            nombre: 'BIT',
            definicion: 'Beneficio adicional de excención de pago de primas por invalidez total y permanente(Invalidez)',
            beneficiario: 'Titular',
            costo: 'Beneficios adicionales',
            caracteristicas: [
                'Cobertura: Extensión de pagos de primas por invalidez total y permanente',
                'Edades de aceptación (EA): 15 a 55 años',
                'Cancelación a) Cuando se cumplan 60 años b) Pago de esta cobertura c) A solicitud expresa d) Fallecimiento',
                'Período de espera: Se deberá tener por lo menos 4 meses en este estado a partir de que se le diagnostique para hacer uso de esta cobertura'
            ]
        }, {
            nombre: 'CII',
            definicion: 'Beneficio adicional de indemnización por invalidez total y permanente(Invalidez)',
            beneficiario: 'Titular',
            costo: 'Beneficios adicionales',
            caracteristicas: [
                'Cobertura: Pago de (SA) en caso de que el titular sufra estado de invalidez total y permanente',
                'Suma asegurada (SA): Igual o menos que la cobertura básica',
                'Edades de aceptación (EA): 15 a 55 años',
                'Cancelación a) Cuando se cumplan 60 años b) Pago de esta cobertura c) A solicitud expresa d) Fallecimiento',
                'Período de espera: Se deberá tener por lo menos 4 meses en este estado a partir de que se le diagnostique para hacer uso de esta cobertura'
            ]
        }, {
            nombre: 'CMA',
            definicion: 'Beneficio adicional por muerte accidental (Accidentes)',
            beneficiario: 'Titular',
            costo: 'Beneficios adicionales',
            caracteristicas: [
                'Cobertura: pago adicional de (SA) a beneficiarios si el titular fallece a consecuencia de un accidente',
                'Suma asegurada (SA): Igual o menor a la cobertura básica',
                'Edades de aceptación (EA): 15 a 65 años',
                'Cancelación a) Cuando se cumplan 70 años b) Solicitud del titular c) Pago de esta cobertura'
            ]
        }, {
            nombre: 'TIBA',
            definicion: 'Beneficio adicional de triple indemnización por muerte accidental y/o pérdidas orgánicas (Accidentes)',
            beneficiario: 'Titular',
            costo: 'Beneficios adicionales',
            caracteristicas: [
                'Cobertura de pago adicional de Suma Asegurada a beneficiarios si el titular fallece a consecuencia de un accidente o tiene pérdidas orgánicas y/o un pago adicional extra si existe un accidente colectivo',
                'Suma asegurada (SA): Igual o menor a la cobertura básica',
                'Nota: Después del accidente se considera un plazo para fallecer de 90 dias',
                'Edades de aceptación (EA): 15 a 65 años',
                'Cancelación a) Al cumplir 70 años b)Solicitud del titular c) Pago de esta cobertura d) Pago por invalidez',
                'Pérdidas orgánicas: Vida = 100% | Manos ó Pies ó vista en ojos = 100% | Una mano y un pie = 100% | Una mano ó un pie y vista de un ojo = 100% | Una mano o un pie = 50% | La vista de un ojo = 50%'
            ]
        }, {
            nombre: 'BCAT',
            definicion: 'Beneficio adicional cáncer (Cáncer)',
            beneficiario: 'Titular',
            costo: 'Beneficios adicionales',
            caracteristicas: [
                'Cobertura: Cubre gastos por cáncer (In situ / Metástasis)',
                'Suma asegurada (SA): Igual o menora la basica. Mínimo $ 300,000 m.n. Máxima: $1,000,000 m.n.',
                'Edades de aceptación (EA):  15 a 65 años',
                'Periodo de espera: 3 meses cáncer in situ 25% de la Suma Asegurada , si posteriormente se da metástasis 75% restante',
                'Cancelación a) Fallecimiento titular b) Solicitud titular c) Pago de esta cobertura d) Al cumplir 70 años'
            ]
        }, {
            nombre: 'GFA',
            definicion: 'Beneficio adicional Gastos funerarios del asegurado titular (Gastos funerarios)',
            beneficiario: 'Titular',
            costo: 'Beneficios adicionales',
            caracteristicas: [
                'Cobertura: cubre servicios funerarios al fallecer el asegurado',
                'Suma asegurada (SA): Mínimo 20 SMMGVDF. Máxima: 35% de la Suma Asegurada básica con tope hasta 100 SMMGVDF',
                'Edades de aceptación (EA): 15 a 70 años',
                'Cancelación a) Fallecimiento del titular b) Solicitud del titular c) No se cancela por edad',
                'Asesoría legal ante cualquier trámite, para obtener el certificado, el acta de defuncion y la liberación del cuerpo del asegurado. Exime la necropsia. Asignación de funeraria, de velación en capilla funeraria o en domicilio particular, de cremación o inhumanación',
                'Gestoría de funeral, traslado del cuerpo, arreglo estético del cuerpo, ataud metálico o urna, carroza al cementerio y autobús de acompañamiento',
                'Fosa en panteón civil o municipal'
            ]
        }, {
            nombre: 'GE',
            definicion: 'Beneficio adicional de garantia educacional (Educación)',
            beneficiario: 'Titular',
            costo: 'Beneficios adicionales',
            caracteristicas: [
                'Cobertura: Contribuye a los gastos educacionales de los beneficiarios designados en caso de fallecimiento del asegurado titular',
                'Suma asegurada (SA): Mínima $10,000 o Igual o menor a la cobertura básica',
                'Edades de aceptación (EA): 15 a 70 años',
                'Cancelación a)Solicitud del titular b) Pago de esta cobertura'
            ]
        }, {
            nombre: 'AP',
            definicion: 'Beneficio adicionales de accidentes personales del asegurado (Accidentes personales)',
            beneficiario: 'Titular',
            costo: 'Beneficios adicionales',
            caracteristicas: [
                'Cobertura: Contribuye con una protección adicional en caso de ocurrirle cualquier accidente',
                'Suma asegurada (SA): Mínima $2,000 M.N.y Máxima $10,000 M.N.',
                'Edades de aceptación (EA): 0 a 55 años',
                'Cancelación a)Solicitud del titular b) Al cumplir 55 años'
            ]
        }, {
            nombre: 'BACY',
            definicion: 'Beneficio adicional conyuge (Fallecimiento)',
            beneficiario: 'Conyuge del titular',
            costo: 'Beneficios adicionales conyuge',
            caracteristicas: [
                'Cobertura: Pago de Suma Asegurada a los beneficiarios del conyuge al fallecimiento del mismo',
                'No se necesita la firma del conyuge en beneficiarios recíprocos',
                'Suma asegurada (SA): Igual o menor de la Suma Asegurada básica del titular con tope hasta 200 SMMGVDF',
                'Edades de aceptación (EA): 15 a 70 años',
                'Cancelación a) Fallecimiento del titular b) Solicitud del titular'
            ]
        }, {
            nombre: 'GFC',
            definicion: 'Beneficio adicional de gastos funerarios conyuge (Fallecimiento)',
            beneficiario: 'Conyuge del titular',
            costo: 'Beneficios adicionales conyuge',
            caracteristicas: [
                'Cobertura: pago de Suma Asegurada al titular para solventar los gastos de servicios funerarios al fallecer el conyuge',
                'Suma asegurada (SA): Mínima 20 SMMGVDF. Máxima: 35% de la Suma Asegurada básica con tope hasta 100 SMMGVDF',
                'Edades de aceptación (EA): 15 a 70 años',
                'Cancelación a) Fallecimiento del titular b) Solicitud del titular c) No se cancela por edad',
                'Asesoría legal ante cualquier trámite, para obtener el certificado, el acta de defuncion y la liberación del cuerpo del conyugue. Exime la necropsia. Asignación de funeraria, de velación en capilla funeraria o en domicilio particular, de cremación o inhumanación',
                'Gestoría de funeral, traslado del cuerpo, arreglo estético del cuerpo, ataud metálico o urna, carroza al cementerio y autobús de acompañamiento',
                'Fosa en panteón civil o municipal'
            ]
        }, {
            nombre: 'BCAC',
            definicion: 'Beneficio adicional de cáncer hijos (Cáncer)',
            beneficiario: 'Hijos del titular',
            costo: 'Beneficios adicionales complementarios',
            caracteristicas: [
                'Cobertura: Cubre gastos por cáncer (In situ/metástasis)',
                'Suma asegurada (SA): Igual o menor SA basica. Mínimo $300,000 m.n., Máxima 1,000,000 m.n.',
                'Periodo de espera: 3 meses, cáncer in situ 25% SA, si posteriormente se desarolla metastasis es el 75% restante',
                'Edades de aceptación (EA): 15 a 65 años',
                'Cancelacion a) Fallecimiento del titular b) Pago cobertura c) Solicitud del titular d) 70 años'
            ]
        }, {
            nombre: 'GFH',
            definicion: 'Beneficio adicional de gastos funerarios hijos (Fallecimiento)',
            beneficiario: 'Hijos del titular',
            costo: '',
            caracteristicas: [
                'Cobertura: Pago Suma Asegurada al titular para solventar gastos de servicios funerarios al fallecer los hijos del titular designados en la póliza',
                'Prima: De acuerdo al número de hijos',
                'Suma Asegurada (SA): 35% de Suma Asegurada básica con tope hasta de 100 SMMGVDF',
                'La suma de las Sumas Aseguradas de todos los hijos no exceda a la básica',
                'Edades de aceptación (EA): Menores de 24 años',
                'Cancelación a) Fallecimiento del titular  b) Pago de la cobertura total por todos los hijos c) Solicitud del titular'
            ]
        }, {
            nombre: 'BAC',
            definicion: 'Beneficio adicional complementario (Fallecimiento)',
            beneficiario: 'Complementario',
            costo: 'Beneficios adicionales complementarios',
            caracteristicas: [
                'Cobertura: Pago de Suma Asegurada a los beneficiarios al fallecimiento del mismo',
                'Suma asegurada (SA): Igual o menor de la Suma Asegurada básica del titular',
                'Edades de aceptación (EA): 15 a 70 años',
                'Cancelación a) Fallecimiento del titular o complementario b) Pago cobertura c) solicitud del titular'
            ]
        }, {
            nombre: 'GFC',
            definicion: 'Beneficio adicional de gastos funerarios complementarios (Gastos funerarios)',
            beneficiario: 'Complementarios',
            costo: 'Beneficios adicionales complementarios',
            caracteristicas: [
                'Cobertura: pago de Suma Asegurada al titular para solventar los gastos de servicios funerarios al fallecer el complementario',
                'Suma asegurada (SA): Mínima 20 SMMGVDF. Máxima: 35% de la Suma Asegurada básica con tope hasta 100 SMMGVDF',
                'Edades de aceptación (EA): 15 a 80 años',
                'Cancelación a) Fallecimiento del titular b) Solicitud del titular'
            ]
        }, {
            nombre: 'APC',
            definicion: 'Beneficio adicional de accidentes personales complementarios (Accidentes personales)',
            beneficiario: 'Complementarios',
            costo: 'Beneficios adicionales complementarios',
            caracteristicas: [
                'Cobertura: Contribuye con una protección adicional en caso de ocurrirle cualquier accidente',
                'Suma asegurada (SA): Mínima $2,000 M.N.y Máxima $10,000 M.N.',
                'Edades de aceptación (EA): 0 a 55 años',
                'Cancelación a)Solicitud del titular b) Al cumplir 55 años'
            ]
        }]
    }
});
