var base = {
    login: function(myname, password1, aa) {
        $.post(jidi.login, {
            user_name: myname,
            password: password1,
        }, function(res) {
            aa(res);
        })
    },
    tui: function(aa) {
        $.post(jidi.tui, function(res) {
            aa(res);
        })
    },
    yonghu: function(aa) {
        $.get(jidi.yonghu, function(res) {
            aa(res);
        })
    }
}