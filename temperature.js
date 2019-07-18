

var button= $("#click1");
var inputText= $("#superinput");
var output= $("#output");

button.on('click', function(){
  console.log("clicked");
  var cityName= inputText.val();
  var apiUrl= 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=f8687cf28c78e651500c99fd94acb344';
  $.ajax({url:apiUrl,success:function(result){
    console.log(result.main.temp);
    output.html(result.main.temp + "&#8451;");
  }});


});
