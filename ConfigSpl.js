//Conta Simples ---------------------------------------------------------------------------------------------------------------------//
function Conta(Operation) 
{
    let Num01 = parseFloat(document.getElementById('ValueS1').value);
    let Num02 = parseFloat(document.getElementById('ValueS2').value);

    let ResultS;



    switch (Operation)
    {

    case 'somar':
    ResultS = Num01+Num02;
    break;

    case 'subtrair':
    ResultS = Num01-Num02;
    break;

    case 'multiplicar':
    ResultS = Num01*Num02;
    break;

    case 'dividir':
    ResultS = Num01/Num02;
    break;

    case 'deletar':
    ResultS = "";
    break;

    default: 
    ResultS = 'Conta Incompatível';
    }


    document.getElementById('Sobra').innerHTML = ResultS;
    
}