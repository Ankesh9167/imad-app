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
        requst.open('GET','http://ankeshphapale1234.imad.hasura-app.io/counter',true);
          request.send(null);
  };