$(document).ready(function(){

  var formHandler = function(event){
    if($("#desc").val() === ""){
      $("#desc-errors").text("Not OK!");
    } else {
      $("#desc-errors").text("All OK!");
    }

    //XXXX[.XX]
    // ^\d+(.\d{2})?$
    var validPrice = /(?:^\d{1,3}(?:\.?\d{3})*(?:,\d{2})?$)|(?:^\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$)/;
    var cardValid = /^\d+(.\d{2})?$/ ;
    var amount = $("#amount").val();
    if(cardValid.test(amount)){
      $("#price").text("All OK!");
    } else {
      $("#price").text("Not OK!");
    }

    //Needs regex to match cardnumber
    var cardNumber = $('#cardNumber').val();
    if(validPrice.test(cardNumber)){
      $("#cardValid").text("All OK!");
    } else {
      $("#cardValid").text("Not OK!");
    }

    //Needs regex to match ccv
    var ccvNumber = $("#ccv").val();
    if(validPrice.test(ccvNumber)){
      $("#ccvValid").text("All OK!")
    } else {
      $("#ccvValid").text("Not OK!")
    }

    //Needs regex to match exp
    var expiration = $("#exp").val();
    if(validPrice.test(expiration)){
      $("#expValid").text("All OK!")
    } else {
      $("#expValid").text("Not OK!")      
    }

    //Needs regex to match cardName
    var cardName = $("#name").val();
    if(validPrice.test(cardName)){
      $("#nameValid").text("All OK!")
    } else{
      $("#nameValid").text("Not OK!")
    }

    //Needs regex to match string
    var addressName = $("#address").val();
    if(validPrice.test(addressName)){
      $("#addressValid").text("All OK!")
    } else {
      $("#addressValid").text("Not OK!")
    }


    event.preventDefault(); // prevents the page from reloading
  };

  $("form").submit(formHandler); // register a callback

});