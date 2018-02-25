var  button = document.getElementById('counter');
button.onclick = function() {
    var request =  new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var counter = httpRequest.responseText;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
      }
      }
        };
        requst.open('GET','http://ankeshphapale1234.imad.hasura-app.io/counter',true);
        request.send(null);
};