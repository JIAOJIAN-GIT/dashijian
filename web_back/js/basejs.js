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
    tui: function(aa) {
        $.post(url + "admin/logout", function(res) {
            aa(res);
        })
    },
    yonghu: function(aa) {
        $.get(url + "admin/getuser", function(res) {
            aa(res);
        })
    }
}