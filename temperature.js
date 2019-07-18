

var button= $("#click1");
button.on('click', function(){
  console.log("clicked");
})

var inputText= $("#superinput");
var output= $("#output");
//console.log(output);
inputText.on('keyup',function(){
  var value= $(this).val();
  output.html(value);
})
