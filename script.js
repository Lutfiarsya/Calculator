let outputScreen = document.getElementById("Output");


function display(number){
    outputScreen.value += number
};

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert('invalid number');
    };
};

function Clear(){
    outputScreen.value = " ";
};


function Del(){
    outputScreen.value = outputScreen.value.slice(0. -1);   
}