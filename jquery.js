$(document).ready(function() {
    var email_ver = true;
    //Email Verification
    $(".email").keyup(function(e) {
        $.ajax({
            type: "POST",
            url: "email-check.php",
            data: {
                email: $(".email").val()
            },
            success: function(data) {
                if (data == true) {
                    $(".error_msg").html("Email is already exist");
                    $(".email").css("border", "2px solid red");
                    email_ver = false;
                } else {
                    $(".error_msg").html("");
                    email_ver = true;
                }
            }
        });

    });
    //Submit Button
    $("#submit-btn").click(function(e) {
        $(".email").focus();
        return email_ver;
    });

    //Form Validation
    $("#form").validate();

});