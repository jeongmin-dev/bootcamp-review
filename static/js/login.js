$(document).ready(function () {
    confirmedMsg();
});

function confirmedMsg() {
    $('#confirm_password').focusout(function() {
        let inputPassword = $('#register_password').val();
        let confirmedPassword = $('#confirm_password').val();
        if(inputPassword != confirmedPassword){
            $('#confirm_message').text('비밀번호가 일치하지 않습니다.').css('color', '#dc3545')
        } else {
            $('#confirm_message').text('비밀번호가 일치합니다.').css('color', '#28a745')
        }

    });
}

function toRegister() {
    let email = $('#register_email').val();
    let password = $('#register_password').val();
    let confirmed = $('#confirm_password').val();

    if(password == confirmed) {
        $.ajax({
            type: "POST",
            url: "/users",
            data: {
                email_give: email,
                password_give: password
            },
            success: function (response) { // 성공하면
                alert(response["msg"]);
            }
        })
    } else {
        alert('비밀번호를 다시 확인해주세요.')
    }


}

function showArticles() {
    $.ajax({
        type: "GET",
        url: "/users?sample_give=샘플데이터",
        data: {},
        success: function (response) {
            alert(response["msg"]);
        }
    })
}