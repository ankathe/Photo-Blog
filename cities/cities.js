




function search (){
    var input = document.getElementById('searching');
    var answers = cities.filter(name => name.citie.toLowerCase().includes(input));
    
}