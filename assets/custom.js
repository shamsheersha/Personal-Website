$(document).ready(()=>{
    $('#gform').submit((e)=>{
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "https://script.google.com/macros/s/AKfycbzmV4eQRI_u1WvfV2qK1ewL5hPKZ0Svy0eRp6RTy8jN31vSgQL_XnEA83AqNLl6hFiS9A/exec",
            data: $("#gform").serialize(),
            
          }).done(function (data) {
           alert("form submitted successfully");
           window.location.reload()
          });
    })
})