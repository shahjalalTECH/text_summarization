// A $( document ).ready() block.

$(document).ready(function () {

    // Percentage Circle
    $(".circle_percent").each(function () {
        var $this = $(this),
            $dataV = $this.data("percent"),
            $dataDeg = $dataV * 3.6,
            $round = $this.find(".round_per");
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
        $this.prop('Counter', 0).animate({
            Counter: $dataV
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $this.find(".percent_text").text(Math.ceil(now) + "%");
            }
        });
        if ($dataV >= 51) {
            $round.css("transform", "rotate(" + 360 + "deg)");
            setTimeout(function () {
                $this.addClass("percent_more");
            }, 1000);
            setTimeout(function () {
                $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
            }, 1000);
        }
    });

    //Testimonial
    $('.testimonial-parent').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    //Sample default text
    $(document).on("click", ".bb-sample-text", function () {
        $("#first-text-area").val("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores, officiis aut praesentium, aperiam quod odit quo veritatis corporis neque illo consequuntur quam. Modi non voluptate, nesciunt minima soluta repudiandae corrupti laboriosam. Molestias ea unde perspiciatis doloribus sed consequuntur, corrupti minima neque iste laudantium pariatur! Recusandae neque earum eum magnam!");
        $(".summarize-now-two-btn-middle").hide();
    })

    // Summarize Now
    $(document).on("click", ".bb_summarize_now_btn", function () {
        let summarizeText = $("#first-text-area").val().split(" ").splice(0, 20).join(" ");
        $("#second-text-area").val(summarizeText);
    })

    //Delete button
    $(document).on("click", ".deleteTextBtn", function () {
        $("#first-text-area").val("");
        $("#second-text-area").val("");
        $(".summarize-now-two-btn-middle").css("display", "flex");
    })

    //
    $(document).on("click", ".nav_list li a", function () {
        $(".nav_list li a").removeClass("dashboard-active");
        $(this).addClass("dashboard-active");  
    });



});

// Custom css
//Accordion
var shows = document.querySelectorAll(".bb-accordion-show");
var infos = document.querySelectorAll(".bb-accordion-info");
var accordions = document.querySelectorAll(".bb-accordion");

for (let i = 0; i < shows.length; i++) {
    shows[i].onclick = function () {
        for (let j = 0; j < shows.length; j++) {
            if (shows[j] != this) {
                infos[j].classList.remove("bb-accordion-reveal");
                shows[j].innerHTML = "+";
                accordions[j].classList.remove("bb-accordion-radius");
            }
        }
        accordions[i].classList.toggle("bb-accordion-radius");
        infos[i].classList.toggle("bb-accordion-reveal");
        if (infos[i].className.includes("bb-accordion-reveal")) shows[i].innerHTML = "-";
        else shows[i].innerHTML = "+";
    };
}

//Text copy
document.querySelector('.copyTextBtn').addEventListener('click', function () {
    var copyText = document.getElementById('second-text-area');
    copyText.select();
    document.execCommand('copy');
})


//Text paste
const pasteButton = document.querySelector('.bb-paste-text-btn');
pasteButton.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText()
        document.querySelector('textarea').value += text;
        console.log('Text pasted.');
        document.querySelector(".summarize-now-two-btn-middle").style.display = "none";
    } catch (error) {
        console.log('Failed to read clipboard. Using execCommand instead.');
        document.querySelector('textarea').focus();
        const result = document.execCommand('paste')
        console.log('document.execCommand result: ', result);
    }
});

//Text Download
function download(file, text) {
    var element = document.createElement("a");
    element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8, " + encodeURIComponent(text)
    );
    element.setAttribute("download", file);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.querySelector(".downloadTextBtn").addEventListener(
    "click",
    function () {
        var text = document.getElementById("second-text-area").value;
        var filename = ".txt";

        download(filename, text);
    },
    false
);

// --------------- Dashboard -----------------
