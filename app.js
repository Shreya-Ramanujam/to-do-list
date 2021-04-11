var listOfActivites=[];

var input =document.getElementById("input");

var toDoList =document.getElementById("todolist");

document.getElementById("button").onclick=click;

function click(){
    listOfActivites.push(input.value);

    console.log(listOfActivites);


    input.value="";

    showList();
}

function showList(){
    toDoList.innerHTML="";

    listOfActivites.forEach(function(current_value, index){
        // todolist.innerHTML += ("li" + n +"<a onclick='editItem(" + i + ")'Edit</a>" +"<a onclick ='deleteItem(" + i + ")'>&times | </a></li>")
   
        todolist.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'>Edit</a>"+
        "<a onclick='deleteItem("+index+")'>&times |</a></li>")
    })
}

function editItem(index){
    var newValue=prompt("Please insert your value");

    listOfActivites.splice(index,1,newValue);

    showList();
}

function deleteItem(index){
    listOfActivites.splice(index,1);

    showList();
}