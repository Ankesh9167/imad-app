var  button = document.getElementById('counter');
button.onclick = function () {
      var request =  new XMLHttpRequest ();
      request.onreadystatechange = function() {
          if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('counter');
            span.innerHTML = counter.toString();
            
        }
        }
          };
        request.open('GET','http://ankeshphapale1234.imad.hasura-app.io/counter',true);
          request.send(null);
  };
  
  var nameInput = document.getElementById('name');
  var name = nameInput();
  var send = document.getElementById('send_btn');
  send.onclick = function() {
 var names = ["name1","name2","name3","name4"] ;
 var list = '';
 var i;
 for(i =0;i<names.length;i++)
 {
     list +=' <li>' + names[i] + '</li>';
     
 }
  var ul = document.getElementById('namelist');
  ul.innerHTML =list;
  
  };