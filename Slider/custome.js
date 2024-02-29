$(document).ready(function () {
    function detect_active() {
      // get active
      var get_active = $("#dp-slider .dp_item:first-child").data("class");
      $("#dp-dots li").removeClass("active");
      $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
    }
    $("#dp-next").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
      detect_active();
    });
  
    $("#dp-prev").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
  
      detect_active();
    });
  
    $("#dp-dots li").click(function () {
      $("#dp-dots li").removeClass("active");
      $(this).addClass("active");
      var get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
    });
  
    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
      var get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
  
      detect_active();
    });
  });

  let arr_img = [
    {
        id : 1,
        image :"https://i.postimg.cc/rpTXWBb0/MV5-BOTQ0-NDY0-Y2-Mt-MTdi-Yi00-Zjgz-LWJj-Nm-It-Nz-Yw-Y2-Nk-Zjll-Ym-I1-Xk-Ey-Xk-Fqc-Gde-QXVy-NDg4-Mjkz-NDk-V1.jpg",
        title :"Dirlis Ertugrul 1",
        description :"Lorem ipsum dolor sit, amet consectetur adipisicing elit.."
    },
    {
        id : 2,
        image :"https://i.postimg.cc/pVsWvLS0/ffbd73fd0e5e40a8443e11c9d2b29d5d.jpg",
        title :"Dirlis Ertugrul 2",
        description :"Hello Lorem ipsum dolor sit, amet consectetur adipisicing elit.."
    },
    {
        id : 3,
        image :"https://i.postimg.cc/tgFRGt0P/MV5-BMGM2-Zm-E4-Yz-Mt-OTBm-NS00-Nm-E4-LWI4-NTUt-Mjg3-ZTJj-ZDYw-ZTc5-Xk-Ey-Xk-Fqc-Gde-QXVy-NDg4-Mjkz-NDk-V1.jpg",
        title :"Dirlis Ertugrul 3",
        description :"Hello World Lorem ipsum dolor sit, amet consectetur adipisicing elit.."
    },
    {
        id : 4,
        image :"https://i.postimg.cc/wv6zKCQ8/MV5-BNj-I4-Yj-Jl-ZTct-Mj-U5-NS00-MGFh-LWFk-Zjgt-OTlj-N2-Y4-Nz-I1-Mj-A4-Xk-Ey-Xk-Fqc-Gde-QXVy-NDg4-Mjkz-NDk-V1.jpg",
        title :"Dirlis Ertugrul 4",
        description :"Lorem ipsum dolor sit, amet consectetur adipisicing elit.."
    },
    {
        id : 5,
        image :"https://i.postimg.cc/tgFRGt0P/MV5-BMGM2-Zm-E4-Yz-Mt-OTBm-NS00-Nm-E4-LWI4-NTUt-Mjg3-ZTJj-ZDYw-ZTc5-Xk-Ey-Xk-Fqc-Gde-QXVy-NDg4-Mjkz-NDk-V1.jpg",
        title :"Dirlis Ertugrul 5",
        description :"Lorem ipsum dolor sit, amet consectetur adipisicing elit.."
    },
    {
        id : 6,
        image :"https://i.postimg.cc/pVsWvLS0/ffbd73fd0e5e40a8443e11c9d2b29d5d.jpg",
        title :"Dirlis Ertugrul 6",
        description :"Lorem ipsum dolor sit, amet consectetur adipisicing elit.."
    }
  ]
  let tr='';
  arr_img.map((i)=>{
    tr+=`  <div class="dp_item" data-class="1" data-position="1">
    <div class="dp-content">
  
      <h2>${i.title}</h2>
      <p> ${i.description}</p>
      <a href="#" class="site-btn">Read More…</a>
    </div>
    <div class="dp-img">
      <img class="img-fluid" src=${i.image} alt="investing">
    </div>
  </div>`
  })
  


document.getElementById("dp-slider").innerHTML=tr;