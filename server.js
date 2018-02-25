var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    title : "Article-one !Ankesh!",
    heading : "Article one",
    date : "24 feb 2018",
    content:  `<p>
                 Sachin Tendulkar has been the most complete batsman of his time, the most prolific runmaker of all time, and arguably the biggest cricket icon the game has ever known. His batting was based on the purest principles: perfect balance, economy of movement, precision in stroke-making, and that intangible quality given only to geniuses - anticipation. If he didn't have a signature stroke - the upright, back-foot punch comes close - it's because he was equally proficient at each of the full range of orthodox shots (and plenty of improvised ones as well) and can pull them out at will.
                
            </p>
            <p>
                There were no apparent weaknesses in Tendulkar's game. He could score all around the wicket, off both front foot and back, jsoncould tune his technique to suit every condition, temper his game to suit every situation, and made runs in all parts of the world in all conditions
            </p>
            <p>
                Some of his finest performances came against Australia, the overwhelmingly dominant team of his era. His century as a 19-year-old on a lightning-fast pitch at the WACA is considered one of the best innings ever to have been played in Australia. A few years later he received the ultimate compliment from the ultimate batsman: Don Bradman confided to his wife that Tendulkar reminded him of himself.
            </p>`
};


function createTemplates(data) {
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var heading = data.heading;
var htmlTemplates = 
    `<html>
    <head>
        <title>
           ${title};
        </title>
           <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
        <div>
            <a href = '/'>Home</a>
        </div>
        <hr/>
        <h3>
            ${heading};
        </h3>
        <div>
            ${date};
        </div>
        <div>
         ${content};  
            
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplates;
}
var counter=0;
app.get('/counter',function(req,res){
    counter +=1;
    res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
   res.send(createTemplates(articleone));
});
/*app.get('/:articleName',function(req, res){
    var articleName = req.params.articleName;
  res.send(createTemplates(articles[articleName])); 
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names = [];
app.get('/send_name/:name',function(req,res) {
    var name = req.params.name;
    names.push(name);
    res.send(JSON.stringiyfy(names));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
