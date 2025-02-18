function Atribuir(Type)
{
    let XA = parseFloat(document.getElementById('Val1').value || 1);
    let XB = parseFloat(document.getElementById('Val2').value) || 1;
    let XC = parseFloat(document.getElementById('Val3').value || 0);

    switch (Type)
    {
        case 'NA':
            document.getElementById('XA').innerHTML = XA;
        break;

        case 'NB':
            document.getElementById('XB').innerHTML = XB;
        break;

        case 'NC':
            document.getElementById('XC').innerHTML = XC;
        break;
    }
}