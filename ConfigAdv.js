function Fatorar(Resolution) {
    let A = parseFloat(document.getElementById('Val1').value || 1);
    let B = parseFloat(document.getElementById('Val2').value || 1);
    let C = parseFloat(document.getElementById('Val3').value) || 0;

    let X1;
    let X2;
    let Delta
    let RD
    let XP
    let XN




    switch (Resolution)
    {
        case 'Resolva':
            let B2 = Math.pow((B), 2);

            Delta = B2 - 4 * (A) * (C);


            RD = Math.sqrt(Delta);

            let Divisor = 2 * (A);

            XP = -(B) + RD
            X1 = XP / Divisor

            XN = -(B) - RD
            X2 = XN / Divisor

        break;

        case 'deletar':
        let Del = "";
        X1 = "";
        X2 = "";
        document.getElementById('XA').innerHTML = Del;
        document.getElementById('XB').innerHTML = Del;
        document.getElementById('XC').innerHTML = Del;
        break;
    }

    document.getElementById('SobraA1').innerHTML = X1;
    document.getElementById('SobraA2').innerHTML = X2;
}