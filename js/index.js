$(document).ready(function () {

    const YELLOW = "#FBAF39";
    const SMOKE = "#F5F5F5";

    // Animated spots
    // setTimeout(() => {
    //     $(".orange-spot").fadeIn(600);
    // }, 200)
    // setTimeout(() => {
    //     $(".blue-spot").fadeIn(600);
    // }, 600)
    // setTimeout(() => {
    //     $(".red-spot").fadeIn(600);
    // }, 850)
    // setTimeout(() => {
    //     $(".skyblue-spot").fadeIn(600);
    // }, 1000)
    // setTimeout(() => {
    //     $(".pink-spot").fadeIn(600);
    // }, 1200)


    // Scenarios slider
    $('.scenarios__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    });

    // Scenarios description

    const enableScroll = () => {
        $("body").css("overflow", "auto");
    };
    const disableScroll = () => {
        $("body").css("overflow", "hidden");
    }

    $(".scenario").click(function (event) {
        let selector = ".description__modal" + "#" + this.id;
        $(selector).fadeIn();
        $(selector).css("display", "flex");

        disableScroll();
    })
    $(".description__modal-content img").click(function () {
        $(".description__modal").fadeOut();
        enableScroll();
    })
    $(".description__modal").click(function (event) {
        if (event.target.className === "description__modal") {
            $(".description__modal").fadeOut();
            enableScroll();
        }

    })

    // Points block
    const fillCurrentAndPreviousLines = function (id, COLOR) {
        let points = $(".point");
        for (let key in points) {
            if (key === "length") break;
            isNumberKey = Number(key) === 0 || Number(key);
            if (isNumberKey) {
                $("#" + points[key].id).children(".point__img").children(".point__line").css("background-color", COLOR);
                if (points[key].id === id) {
                    return;
                }
            }
        }
    }
    // On hover
    $(".point").mouseenter(
        function () {
            fillCurrentAndPreviousLines(this.id, YELLOW);
            if ($(this), $(".point").last()) {

                // Cylinder animation
                $(this).children(".point__img").children(".congrats-cylinder").fadeIn(300);
                $(this).children(".point__img").children(".congrats-cylinder").animate(
                    {
                        right: "-20",
                    },
                    300
                );
                // Star animation
                setTimeout(() => {
                    $(this).children(".point__img").children(".congrats-star").fadeIn(300);
                    $(this).children(".point__img").children(".congrats-star").animate(
                        {
                            top: "55"
                        },
                        300
                    );
                }, 700)
                // Square animation
                setTimeout(() => {
                    $(this).children(".point__img").children(".congrats-square").fadeIn(300);
                    $(this).children(".point__img").children(".congrats-square").animate(
                        {
                            right: "-20",
                            top: "55"
                        },
                        300
                    );
                }, 700)
                // Circle animation
                setTimeout(() => {
                    $(this).children(".point__img").children(".congrats-circle").fadeIn(300);
                    $(this).children(".point__img").children(".congrats-circle").animate(
                        {
                            right: "-40",
                            top: "60"
                        },
                        300
                    );
                }, 700)

            }
        }
    )

    // End of hover
    $(".point").mouseleave(
        function () {
            fillCurrentAndPreviousLines(this.id, SMOKE);
            if ($(this), $(".point").last()) {

                // Cylinder animation
                $(this).children(".point__img").children(".congrats-cylinder").fadeOut(300);
                $(this).children(".point__img").children(".congrats-cylinder").animate(
                    {
                        right: "0",
                    },
                    500
                );
                // Star animation
                $(this).children(".point__img").children(".congrats-star").fadeOut(300);
                $(this).children(".point__img").children(".congrats-star").animate(
                    {
                        top: "65",
                    },
                    500
                );
                // Square animation
                $(this).children(".point__img").children(".congrats-square").fadeOut(300);
                $(this).children(".point__img").children(".congrats-square").animate(
                    {
                        right: "-30",
                        top: "65"
                    },
                    500
                );
                // Circle animation
                $(this).children(".point__img").children(".congrats-circle").fadeOut(300);
                $(this).children(".point__img").children(".congrats-circle").animate(
                    {
                        right: "-30",
                        top: "65"
                    },
                    500
                );
            }
        }
    )


    // FAQ accordeon
    let rotate = true;
    let rotation;
    $(".question").click(function () {
        $(this).children(".question__answer").slideToggle();
        if (rotate) {
            rotation = "rotate(-90deg)";
            rotate = false;
        } else {
            rotation = "rotate(90deg)";
            rotate = true;
        }
        $(this).children(".question__img").css("transform", rotation);
    })
});