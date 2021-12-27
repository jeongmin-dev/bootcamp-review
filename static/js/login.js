$(document).ready(function () {
    confirmedMsg();
});

function confirmedMsg() {
    let inputPassword = $('#register_password').val();
    let confirmedPassword = $('#confirm_password').val();
    console.log(inputPassword, confirmedPassword)
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