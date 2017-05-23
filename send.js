var service_id = "gmail";
var template_id = "template_BjjWP3so";


$("button").click(function(){
  var inputName = $("#name").val();
  var inputPhone = $("#phone").val();
  var inputText = $("#text").val();


  emailjs.send(service_id, template_id, {
    name: "James",
    notes: "Имя: "+ inputName+ ". Телефон: " + inputPhone + ". Сообщение: " + inputText +"."
  });
});
