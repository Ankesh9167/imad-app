//counter code
var  button = document.getElementById('counter');

button.onclick = function () {
    
    //creat a request object
      var request =  new XMLHttpRequest ();
      
      //capture a requst and save it to variable
      request.onreadystatechange = function() {
          if (request.readyState === XMLHttpRequest.DONE) {
              //take some action
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('counter');
            span.innerHTML = counter.toString();
            
        }
        }
        
          };
          
          // make request
        request.open('GET','http://ankeshphapale1234.imad.hasura-app.io/counter',true);
          request.send(null);
  };
  
  //submit name
  
  var submit = document.getElementById('submit_btn');
  submit.onclick = function() {
      
   //creat a request object
      var request =  new XMLHttpRequest ();
      
      //capture a requst and save it to variable
      request.onreadystatechange = function() {
          if (request.readyState === XMLHttpRequest.DONE) {
              //take some action
        if (request.status === 200) {
           var names = request.responseText;
           names == JSON.parse(names);
        var list = '';
         var i;
        for(i =0;i<names.length;i++)
           {
       list +='<li>'+names[i]+'</li>';
     
            }
        var ul = document.getElementById('namelist');
        ul.innerHTML =list; 
            
        }
        }
        
          };
          
          // make request
          var nameInput = document.getElementById('name');
  var name = nameInput.value;
        request.open('GET','http://ankeshphapale1234.imad.hasura-app.io/submit-name?name=' +name ,true);
          request.send(null);   
 
  
  };
 /* var submit1 = document.getElementById('submit1_btn');
  submit1.onclick = function() {
      
   //creat a request object
      var request =  new XMLHttpRequest ();
      
      //capture a requst and save it to variable
      request.onreadystatechange = function() {
          if (request.readyState === XMLHttpRequest.DONE) {
              //take some action
        if (request.status === 200) {
           var comments = request.responseText;
           comment == JSON.parse(comments);
        var list1 = '';
         var i;
        for(i =0;i<comments.length;i++)
           {
       list1 +='<li>'+comments[i]+'</li>';
     
            }
        var ul = document.getElementById('namelist1');
        ul.innerHTML =list1; 
            
        }
        }
        
          };
          
          // make request
          var nameInput = document.getElementById('comment');
  var comment= commentInput.value;
        request.open('GET','http://ankeshphapale1234.imad.hasura-app.io/submit-comment?comment=' +comment ,true);
          request.send(null);   
 */
  
  
  