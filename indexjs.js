window.onload = () => {
    console.log("Hola Excusa");
    myFunction();
}

function myFunction() { 

    //Who
    var who=new Array(5);
    who=["My mom", "My dog", "My girlfriend", "A mime", "An alien","Two Robots"];
    var i=(Math.floor((Math.random() * who.length))); //mostraría números del 0 al 5
    //alert(i);
    //console.log(who[i]);
    //document.getElementById("excuse").innerHTML = who[i]+ " ";

    //Action
    var action=new Array(3);
    action=['ate','peed','crushed','broke'];
    var j=(Math.floor((Math.random() * action.length))); //mostraría números del 0 al 3
    //alert(i);
    //console.log(who[i]);
    //document.getElementById("excuse").innerHTML = who[i]+ " " + action[j];

    //What
    var what=new Array(2);
    what=['my homework', 'the keys', 'the car'];
    var k=(Math.floor((Math.random() * what.length))); //mostraría números del 0 al 2
    //alert(i);
    //console.log(who[i]);
    //document.getElementById("excuse").innerHTML = who[i]+ " " + action[j]+" "+what[k];

    //When
    var when=new Array(4);
    when=['before the class','right on time','when I finished','during my lunch','while I was praying'];
    var l=(Math.floor((Math.random() * when.length))); //mostraría números del 0 al 4
    //alert(i);
    //console.log(who[i]);
    document.getElementById("excuse").innerHTML = who[i]+ " " + action[j]+" "+what[k]+" "+when[l];
    alert("Para generar una nueva excusa, recargue la página");
}