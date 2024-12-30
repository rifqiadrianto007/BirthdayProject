$(document).ready(function () {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");
        var redirectButton = $("#redirectButton");

        flame.on({
            click: function () {
                // Matikan api lilin
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();

                // Tampilkan pesan "Aamiin..."
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

                // Setelah 3 detik, gantikan teks dengan "Lilin sudah mati" dan tombol
                setTimeout(function () {
                    txt.fadeOut(300, function () {
                        txt.html("Lilin sudah mati sayangg 😊");
                        txt.fadeIn(300);

                        // Setelah 2 detik lagi, gantikan dengan tombol
                        setTimeout(function () {
                            txt.fadeOut(300, function () {
                                txt.html(""); // Kosongkan teks
                                redirectButton.removeClass("hidden").fadeIn(300);
                            });
                        }, 2000);
                    });
                }, 3000);
            },
        });
    });
});
