/* Add your custom JavaScript code */

function loadUser() {
    var template = $('#template').html();
    //Mustache.parse(template);   // optional, speeds up future uses
    var rendered = Mustache.render(template, {name: "Luke"});
    $('#target').html(rendered);
}

//LOAD TEMP
loadTemplate = function (lang) {

    //console.log(lang);

    /*header*/
    //var lang = en;

    $.each(lang, function(key,value) {

        //console.log(key);

       /*header*/
        $("header").find("a:contains("+key+")").each(function() {

            var obj = $(this);
            obj.text(value);
        });

        /*header*/
        var tags = ["a","p","span","i","h2","h3","sup","li"];
        var tags_str = tags.join(":contains("+key+"),");
        tags_str += ":contains("+key+")";


        //console.log(key);

        $("section").find(tags_str).each(function() {

            var obj = $(this);

            console.log(obj.text());

            if ($.trim(obj.text()) == "{"+key+"}")
                obj.text(value);
            //else
              //  console.log(key+"."+value);

            /*if (key.indexOf("pricing") != -1) {
                console.log("contains(" + key + ")");
                console.log(value);*/
        });
        //console.log(value);

        /*FOOTER*/
        $("footer").find("a:contains("+key+")").each(function() {

            var obj = $(this);
            obj.text(value);
        });

    });
}

$(function() {

    loadTemplate(en);

    $("#dropdownMenu1").change(function() {

        console.log($(this).va());
    })

})