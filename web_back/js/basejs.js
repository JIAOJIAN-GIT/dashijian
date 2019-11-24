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
    },
    fabu: function(aa) {
        $.post(jidi.fabu, { formData }, function() {

        })
    },
    sousuo: function(aa) {
        $.git(jidi.sousuo, function() {})
    },
    bianjiwenzhang: function(aa) {
        $.post(jidi.bianjiwenzhang, function(res) {
            aa(res);
        })
    },
    leibei: function(aa) {
        $.get(jidi.leibei, function(res) {
            aa(res)
        })
    },
    wenzhangshanchu: function(id, aa) {
        $.post(jidi.wenzhangshanchu, { id: id }, function(res) {
            aa(res);
        })
    },
    bainjileibei: function(id, name, slug, aa) {
        $.post(jidi.bainjileibei, { id: id, name: name, slug: slug }, function(res) {
            aa(res)
        })
    },
    xinzengwenzhang: function() {
        $.post()
    }
}