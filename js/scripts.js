function romanize(num){
  var result = "";
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var numerals = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i=0; i < decimals.length; i++){
    while (num % decimals[i] < num){
      result += numerals[i]

      num -= decimals[i];
    }
  }
  return result;
};

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());

    var romanizedNumber = romanize(userInput);

    $("#result").text(romanizedNumber);
    $("#result").show();

  });
});
