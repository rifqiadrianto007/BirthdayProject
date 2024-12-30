$(document).ready(function () {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");
        var redirectButton = $("#redirectButton");

        flame.on({
            click: function () {
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();
                txt.hide()
                    .html("Aamiin... Semoga semua doa dan harapan adek terwujud ya cantikk 😘")
                    .delay(750)
                    .fadeIn(300);

                $("#candle").animate(
                    {
                        opacity: "0.5",
                    },
                    100
                );

                setTimeout(function () {
                    txt.fadeOut(300, function () {
                        txt.html("Lilin sudah mati sayangg 😊");
                        txt.fadeIn(300);
                        setTimeout(function () {
                            txt.fadeOut(300, function () {
                                txt.html("");
                                redirectButton.removeClass("hidden").fadeIn(300);
                            });
                        }, 2000);
                    });
                }, 3000);
            },
        });
    });
});

function redirectPage() {
    window.location.href = "bunga.html";
}