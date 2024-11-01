function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;

window.addEventListener('load', async () => {

    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let Matriculas = document.getElementById('Matriculas').value;
        let Actividad = document.getElementById('Actividad').value;
        let Descripcion = document.getElementById('Descripcion').value;
        let accion_tomada=document.getElementById('accion_tomada').value;
        let O_T = document.getElementById('O_T').value;
        let discrepancia = document.getElementById('discrepancia').value;
        let fecha_apertura=document.getElementById('fecha_apertura').value;
        let folio=document.getElementById('folio').value;
        let horas_fuselaje=document.getElementById('horas_fuselaje').value;
        let aterrizajes=document.getElementById('aterrizajes').value;
        let ref_manual=document.getElementById('ref_manual').value;
        let capitulo=document.getElementById('capitulo').value;
        let formato_parrafo=document.getElementById('formato_parrafo').value;
        let inspecciones=document.getElementById('inspecciones').value;
        let efectuar=document.getElementById('efectuar').value;
        let DM=document.getElementById('DM').value;
        let Removido=document.getElementById('Removido').value;
        let instaladop=document.getElementById('instaladop').value;
        let originadop=document.getElementById('originadop').value;
        /*elemento de tablas */
        let columnaComponentes1=document.getElementById('columnaComponentes1').value;
        let columnapartes1=document.getElementById('columnapartes1').value;
        let unidadtabla1=document.getElementById('unidadtabla1').value;
        let creqtabla1=document.getElementById('creqtabla1').value;
        let nsremovidot1=document.getElementById('nsremovidot1').value;
        let nsinstaladot1=document.getElementById('nsinstaladot1').value;
         /*elemento de tablas 2*/
         let columnaComponentes2=document.getElementById('columnaComponentes2').value;
         let columnapartes2=document.getElementById('columnapartes2').value;
         let unidadtabla2=document.getElementById('unidadtabla2').value;
         let creqtabla2=document.getElementById('creqtabla2').value;
         let nsremovidot2=document.getElementById('nsremovidot2').value;
         let nsinstaladot2=document.getElementById('nsinstaladot2').value;
         /*elemento de tablas 3*/
         let columnaComponentes3=document.getElementById('columnaComponentes3').value;
         let columnapartes3=document.getElementById('columnapartes3').value;
         let unidadtabla3=document.getElementById('unidadtabla3').value;
         let creqtabla3=document.getElementById('creqtabla3').value;
         let nsremovidot3=document.getElementById('nsremovidot3').value;
         let nsinstaladot3=document.getElementById('nsinstaladot3').value;
         /*elemento de tablas 4*/
         let columnaComponentes4=document.getElementById('columnaComponentes4').value;
         let columnapartes4=document.getElementById('columnapartes4').value;
         let unidadtabla4=document.getElementById('unidadtabla4').value;
         let creqtabla4=document.getElementById('creqtabla4').value;
         let nsremovidot4=document.getElementById('nsremovidot4').value;
         let nsinstaladot4=document.getElementById('nsinstaladot4').value;
         /*elemento de tablas 5*/
         let columnaComponentes5=document.getElementById('columnaComponentes5').value;
         let columnapartes5=document.getElementById('columnapartes5').value;
         let unidadtabla5=document.getElementById('unidadtabla5').value;
         let creqtabla5=document.getElementById('creqtabla5').value;
         let nsremovidot5=document.getElementById('nsremovidot5').value;
         let nsinstaladot5=document.getElementById('nsinstaladot5').value;
         /*elemento de tablas 6*/
         let columnaComponentes6=document.getElementById('columnaComponentes6').value;
         let columnapartes6=document.getElementById('columnapartes6').value;
         let unidadtabla6=document.getElementById('unidadtabla6').value;
         let creqtabla6=document.getElementById('creqtabla6').value;
         let nsremovidot6=document.getElementById('nsremovidot6').value;
         let nsinstaladot6=document.getElementById('nsinstaladot6').value;
           /*elemento de tablas 7*/
         let columnaComponentes7=document.getElementById('columnaComponentes7').value;
         let columnapartes7=document.getElementById('columnapartes7').value;
         let unidadtabla7=document.getElementById('unidadtabla7').value;
         let creqtabla7=document.getElementById('creqtabla7').value;
         let nsremovidot7=document.getElementById('nsremovidot7').value;
         let nsinstaladot7=document.getElementById('nsinstaladot7').value;
         //REMOVIDO
         let LIC_REM=document.getElementById('LIC_REM').value;
         let FECHA_REM=document.getElementById('FECHA_REM').value;
         //instalado
         let LIC_REM2=document.getElementById('LIC_REM2').value;
         let FECHA_REM2=document.getElementById('FECHA_REM2').value;
         //tecnico
         let LIC_REM3=document.getElementById('LIC_REM3').value;
         let FECHA_REM3=document.getElementById('FECHA_REM3').value;
         let Tecnico=document.getElementById('Tecnico').value;
         //supervisor
         let Supervisor=document.getElementById('Supervisor').value;
         let LIC_REM4=document.getElementById('LIC_REM4').value;
         let FECHA_REM4=document.getElementById('FECHA_REM4').value;
         //Inspector
         let Inspector=document.getElementById('Inspector').value;
         let LIC_REM5=document.getElementById('LIC_REM5').value;
         let FECHA_REM5=document.getElementById('FECHA_REM5').value;



        generatePDF(Matriculas, Actividad, Descripcion, accion_tomada, O_T, discrepancia, fecha_apertura, folio, horas_fuselaje, aterrizajes, ref_manual, capitulo, formato_parrafo,
            inspecciones, efectuar, DM, Removido, instaladop, originadop, Tecnico, Supervisor, Inspector, FECHA_REM, LIC_REM,FECHA_REM2, LIC_REM2, FECHA_REM3, LIC_REM3, FECHA_REM4, LIC_REM4, FECHA_REM5, LIC_REM5,
            /*seccion de tablas */
            columnaComponentes1,
            columnapartes1,
            unidadtabla1,
            creqtabla1,
            nsremovidot1,
            nsinstaladot1,
            //
            columnaComponentes2,
            columnapartes2,
            unidadtabla2,
            creqtabla2,
            nsremovidot2,
            nsinstaladot2,
            //
            columnaComponentes3,
            columnapartes3,
            unidadtabla3,
            creqtabla3,
            nsremovidot3,
            nsinstaladot3,
            //
            columnaComponentes4,
            columnapartes4,
            unidadtabla4,
            creqtabla4,
            nsremovidot4,
            nsinstaladot4,
            //
            columnaComponentes5,
            columnapartes5,
            unidadtabla5,
            creqtabla5,
            nsremovidot5,
            nsinstaladot5,
            //
            columnaComponentes6,
            columnapartes6,
            unidadtabla6,
            creqtabla6,
            nsremovidot6,
            nsinstaladot6,
            //
            columnaComponentes7,
            columnapartes7,
            unidadtabla7,
            creqtabla7,
            nsremovidot7,
            nsinstaladot7,
            );
    })

});

async function generatePDF(Matriculas, Actividad, Descripcion, accion_tomada, O_T, discrepancia, fecha_apertura, folio, horas_fuselaje, aterrizajes, ref_manual, capitulo, formato_parrafo,
    inspecciones, efectuar, DM, Removido, instaladop, originadop, Tecnico, Supervisor, Inspector, FECHA_REM, LIC_REM, FECHA_REM2, LIC_REM2, FECHA_REM3, LIC_REM3, FECHA_REM4, LIC_REM4, FECHA_REM5, LIC_REM5,
    /*seccion de tablas */
    columnaComponentes1,
    columnapartes1,
    unidadtabla1,
    creqtabla1,
    nsremovidot1,
    nsinstaladot1,
    //
    columnaComponentes2,
    columnapartes2,
    unidadtabla2,
    creqtabla2,
    nsremovidot2,
    nsinstaladot2,
    //
    columnaComponentes3,
    columnapartes3,
    unidadtabla3,
    creqtabla3,
    nsremovidot3,
    nsinstaladot3,
    //
    columnaComponentes4,
    columnapartes4,
    unidadtabla4,
    creqtabla4,
    nsremovidot4,
    nsinstaladot4,
    //
    columnaComponentes5,
    columnapartes5,
    unidadtabla5,
    creqtabla5,
    nsremovidot5,
    nsinstaladot5,
    //
    columnaComponentes6,
    columnapartes6,
    unidadtabla6,
    creqtabla6,
    nsremovidot6,
    nsinstaladot6,
    //
    columnaComponentes7,
    columnapartes7,
    unidadtabla7,
    creqtabla7,
    nsremovidot7,
    nsinstaladot7,
    ) {
    const image = await loadImage("./img/formulario.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage, 'PNG', 450, 755, 300, 60);//firma

    /*
    const date = new Date();
    pdf.text(date.getUTCDate().toString(), 235, 150);
    pdf.text((date.getUTCMonth() + 1).toString(), 275, 150);
    pdf.text(date.getUTCFullYear().toString(), 320, 150);
    */

    pdf.setFontSize(11);
    pdf.text(Matriculas, 140, 190);
    pdf.text(Actividad, 303, 190);
    pdf.text(Descripcion, 145, 217.5);
    pdf.text(accion_tomada, 163, 308);
    pdf.text(O_T, 336, 217.5);
    pdf.text(discrepancia, 385, 240);
    pdf.text(fecha_apertura, 411, 281);
    pdf.text(folio, 408, 309);
    pdf.text(horas_fuselaje, 393, 349);
    pdf.text(aterrizajes, 377, 390);

    //
    pdf.setFontSize(10);
    pdf.text(ref_manual, 159, 403);
    pdf.text(capitulo, 130 ,416.5);
    pdf.text(formato_parrafo, 172, 430);
    //
    pdf.setFontSize(10);
    pdf.text(inspecciones, 241, 559);
    pdf.text(efectuar, 156, 573);
    pdf.text(DM, 378, 559);
    //
    pdf.setFontSize(10);
    pdf.text(Removido, 155, 587);
    pdf.text(instaladop, 299, 587);
    pdf.text(originadop, 427, 587);

    pdf.setFillColor(0,0,0);
    
    //seccion de tablas
    pdf.setFontSize(10);
    //componentes
    pdf.text(columnaComponentes1,79,459);
    pdf.text(columnaComponentes2,79,474);
    pdf.text(columnaComponentes3,79,487);
    pdf.text(columnaComponentes4,79,502);
    pdf.text(columnaComponentes5,79,517);
    pdf.text(columnaComponentes6,79,532);
    pdf.text(columnaComponentes7,79,547);
    //partes
        pdf.text(columnapartes1,171,459);
        pdf.text(columnapartes2,171,474);
        pdf.text(columnapartes3,171,487);
        pdf.text(columnapartes4,171,502);
        pdf.text(columnapartes5,171,517);
        pdf.text(columnapartes6,171,532);
        pdf.text(columnapartes7,171,547);
    //unidad
        pdf.text(unidadtabla1,237,459);
        pdf.text(unidadtabla2,237,474);
        pdf.text(unidadtabla3,237,487);
        pdf.text(unidadtabla4,237,502);
        pdf.text(unidadtabla5,237,517);
        pdf.text(unidadtabla6,237,532);
        pdf.text(unidadtabla7,237,547);
    //creq
        pdf.text(creqtabla1,280,459);
        pdf.text(creqtabla2,280,474);
        pdf.text(creqtabla3,280,487);
        pdf.text(creqtabla4,280,502);
        pdf.text(creqtabla5,280,517);
        pdf.text(creqtabla6,280,532);
        pdf.text(creqtabla7,280,547);
    //removido
        pdf.text(nsremovidot1,318,459);
        pdf.text(nsremovidot2,318,474);
        pdf.text(nsremovidot3,318,487);
        pdf.text(nsremovidot4,318,502);
        pdf.text(nsremovidot5,318,517);
        pdf.text(nsremovidot6,318,532);
        pdf.text(nsremovidot7,318,547);
    //instalado
        pdf.text(nsinstaladot1,397,459);
        pdf.text(nsinstaladot2,397,474);
        pdf.text(nsinstaladot3,397,487);
        pdf.text(nsinstaladot4,397,502);
        pdf.text(nsinstaladot5,397,517);
        pdf.text(nsinstaladot6,397,532);
        pdf.text(nsinstaladot7,397,547);
   //tabla2
   pdf.setFontSize(10);
   pdf.text(LIC_REM,101,613.2);
   pdf.text(FECHA_REM,116,627);
   pdf.text(LIC_REM2,244,613.2);
   pdf.text(FECHA_REM2,259,627);
   //
   pdf.text(LIC_REM3,101,668);
   pdf.text(FECHA_REM3,116,682);
   pdf.text(LIC_REM4,244,668);
   pdf.text(FECHA_REM4,259,682);
   pdf.text(LIC_REM5,372,668);
   pdf.text(FECHA_REM5,388,682);
   pdf.text(Tecnico,124,641);
   pdf.text(Supervisor,283,641);
   pdf.text(Inspector,405,641);

    pdf.save("example.pdf");

}