// 로그인, 회원가입
function saveRegister() {
    $.ajax({
        type: "POST",
        url: "/register",
        data: {sample_give: "샘플데이터"},
        success: function (response) {
            alert(response["msg"]);
            window.location.reload();
        }
    })
}
