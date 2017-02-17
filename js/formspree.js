$("#formspree-form").on("submit", function(e){
  e.preventDefault();

  var emailParams = {
    name:         $("#sender-name-input").val(),
    _reply_to:    $("#sender-email-input").val(),
    _subject:     $("#subject-input").val(),
    message:      $("#message-input").val(),
    _gotcha:      $("#gotcha").val()
  };

  $.ajax({
    url:        "https://www.formspree.io/andy.zheng249@gmail.com",
    method:     "POST",
    data:       emailParams,
    dataType:   "json",
    success:    function(data){
      $("#formspree-form").fadeOut();
      $("#email-success-dialog").fadeIn();
    },
    error:      function(data){
      $("#email-failure-dialog").fadeIn();
    }
  });
});
