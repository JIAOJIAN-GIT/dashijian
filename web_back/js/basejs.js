var url = "http://localhost:8000/";
var base = {
    login: function(myname, password1, aa) {
        $.post(url + "admin/login", {
            user_name: myname,
            password: password1,
        }, function(res) {
            aa(res);
        })
    },
}