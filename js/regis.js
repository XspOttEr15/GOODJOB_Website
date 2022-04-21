function check_pass() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
    document.getElementById('regist').disabled = false;
    } else {
    document.getElementById('regist').disabled = true;
    }
}