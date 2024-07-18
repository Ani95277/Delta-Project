let todo=[];

let request = prompt("Enter your request");
console.log(request);

while(true) {
    if(request=="Exit"){
        console.log("Exiting the To-Do App");
        break;
    }
    else if(request=="Add"){
        let task = prompt(" Enter you task to add in the list");
        todo.push(task);
        console.log("task added");
    }


    else if(request == "List"){
        console.log("-----------------")
       /* for(let i= 0; i<todo.length ; i++){
            console.log(i,todo[i]);


        }*/
       for(task of todo);
       console.log(task);
        console.log("-----------------")

    }
    request= prompt("Enter your request");

}