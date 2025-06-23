//漢堡選單

const menuBtn = document.getElementById("menuBtn");
const hamburgerMenu = document.getElementById("hamburgerMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

const menuLinks = hamburgerMenu.querySelectorAll("a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  });
});

//選質地&顏色

$(function () {
  const $textureButtons = $(".texture_btn");
  const $swatches = $(".color-swatch");

  const $selectedSwatch = $(".display-swatch");
  const $selectedNum = $(".select_color_num");
  const $selectedName = $(".select_color_name_tc");

  function selectSwatch($swatch) {
    if (!$swatch || $swatch.length === 0) return;

    const color = $swatch.css("background-color");
    const num = $swatch.data("num") || "";
    const name = $swatch.data("name") || "";
    const imgFile = $swatch.data("img");
    const lipImgFile = $swatch.data("lipimg");

    $selectedSwatch.css("background-color", color);
    $selectedNum.text(num);
    $selectedName.text(name);


    $(".stick-img img").attr("src", `./img/lipsticks/${imgFile}`);
    $(".main-image img").attr("src", `./img/lipsticks/${imgFile}`);
    $(".lip-preview img").attr("src", `./img/lipsticks/${lipImgFile}`);



    $swatches.removeClass("selected");
    $swatch.addClass("selected");

    $swatch.css("display", "inline-block");
  }

  $textureButtons.on("click", function () {
    $textureButtons.removeClass("selected");
    $(this).addClass("selected");

    const selectedTexture = $(this).data("texture");

    $swatches.each(function () {
      const $swatch = $(this);
      const swatchTexture = $swatch.data("texture");

      if (selectedTexture === "all" || swatchTexture === selectedTexture) {
        $swatch.css("display", "inline-block");
      } else {
        $swatch.css("display", "none");
      }
    });
  });

  $swatches.on("click", function () {
    selectSwatch($(this));
  });
});

//卡片顏色對應
$(".lip-tone-card").each(function () {
  const color = $(this).data("color");
  $(this).find(".tonelist_text_group, .tags").css("color", color);
});

//選擇卡片

const toneDes = {
  "Classic Red": "不敗的紅唇傳奇，自信、優雅的象徵。這抹經典正紅色調飽和純粹，無論膚色深淺都能輕鬆駕馭，讓唇色成為整體造型的亮點。從日常妝容到正式場合，它都是最不會出錯、卻最令人印象深刻的選擇。推薦給想展現自信、氣場與女王風範的你。",

  "Brick Red": "深色調的磚紅色，復古氣息濃厚，營造沉穩又神祕的風格。適合小麥膚色與喜歡低調內斂氛圍的妳。它帶有一種老電影般的質感與質地，讓人聯想到紅磚牆間透出的暮色。無需過多修飾，這抹色澤本身就能成為妝容焦點，展現獨立、自持的態度。推薦給崇尚簡約品味、鍾情復古與文藝氣質的你。",

  "Wine Red": "沉靜濃郁的酒紅色，散發著微醺般的優雅與神秘。它低調中帶著深度，像夜晚紅酒映出的光影，撫平情緒又點燃慾望。特別適合白皙膚色與偏愛成熟妝感的妳，賦予雙唇更深層次的魅力。無論搭配溫柔捲髮還是俐落短髮，都能展現獨有風采。推薦給想展現內斂誘惑力、保有距離卻讓人著迷的你。",

  "Hot Pink": "鮮明亮眼的桃紅色，象徵著熱情、玩心與不被定義的自我。它跳脫甜美印象，以強烈飽和度打造出活潑卻不失女人味的妝感。特別適合白皙膚色與喜愛張揚個性的你，輕鬆成為眾人視線的焦點。推薦給想展現獨特魅力與青春氣場的妳，讓雙唇說話、讓自信發光。",

  "Rose Pink": "優雅溫柔的玫瑰粉色，介於粉嫩與沉靜之間，完美平衡了甜美與知性。低飽和度讓它在自然光下綻放柔霧質感，不挑膚色、不過於搶眼，卻始終令人難忘。推薦給氣質內斂、追求細節與品味的你，讓唇色成為溫柔力量的象徵。",

  "Baby Pink": "如初戀般純真的嫩粉紅，散發出天真無邪的青春氣息。這抹色彩清透柔和，能自然提亮膚色，打造溫暖親和的氛圍。不論是日常約會或少女感妝容，它都能帶來輕盈與甜美。推薦給喜愛可愛風格、渴望展現柔軟魅力的你。",

  "Peach Pink": "充滿朝氣與活力的粉橘色，如陽光般溫暖迷人。這抹色彩結合了粉的柔美與橘的鮮明，特別適合健康小麥肌膚，展現自然明亮的神采。無論通勤或外出約會，都能帶出親切又有元氣的印象。推薦給想展現陽光、開朗個性的你。",

  "Coral": "介於粉紅與橘色之間的珊瑚粉，如海洋中的寶石般清新明亮。這抹色彩不僅襯托膚色，更能喚醒整體妝容的活力與靈氣，特別適合自然或偏暖膚色的你。甜美卻不過於少女，是日常與假日妝容的絕佳選擇。推薦給想展現活潑、自信氣息的你。",

  "Terracotta": "溫暖厚實的橙褐色，帶有泥土與夕陽交織的沈穩氛圍，讓唇色散發渾然天成的魅力。它不僅能襯托小麥與自然膚色，還能為妝容增添一抹復古又高級的質感。不張揚卻極具風格，推薦給鍾愛低調沈穩、卻又不失態度的你。",

  "Nude Beige": "低調優雅的象牙裸色，是唇妝中的極簡代表。它貼近自然唇色，溫柔地修飾氣色，讓整體妝容更顯乾淨與高級。不挑膚色、百搭日常，是走氣質路線與極簡風格的理想選擇。推薦給喜歡低調有型、展現溫柔自信的你。"
};

$(".lip-tone-card").on("click", function () {
  const $card = $(this);
  const color = $card.data("color");
  const imgSrc = $card.find("img").attr("src");
  const altText = $card.find("img").attr("alt");
  const enName = $card.find(".tonelist_en").text().trim();
  const tcName = $card.find(".tonelist_tc").text().trim();
  const num = $card.find(".tonelist_num").text().trim();

  $(".lip-tone-card").removeClass("active");
  $card.addClass("active");

  $(".tones_intro_img img").attr("src", imgSrc).attr("alt", altText);
  $(".tone_name_en").text(enName).css("color", color);
  $(".tone_name_tc").text(tcName).css("color", color);
  $(".tone_num").text(num).css("color", color);
  $(".tones_text").text(toneDes[enName] || "");

  $("html, body").animate({
    scrollTop: $(".tone-section").offset().top
  }, 500);
});

//預設選取
setTimeout(function () {
  $(".lip-tone-card").each(function () {
    if ($(this).find(".tonelist_en").text().trim() === "Classic Red") {
      $(this).trigger("click");
    }
  });
}, 100);

//搜索按鈕

$(function () {
  $("#filterToggle").on("click", function () {
    $("#filterPanel").slideToggle(200);
//見頭按鈕
    const $icon = $(this).find("i");
    if ($icon.hasClass("fa-caret-down")) {
      $icon.removeClass("fa-caret-down").addClass("fa-caret-up");
    } else {
      $icon.removeClass("fa-caret-up").addClass("fa-caret-down");
    }
  });
});

//篩選機制

$(function () {
  $("#filterPanel input, #filterPanel select").on("input change", function () {
    filterCards();
  });

  function filterCards() {
    const brandKeyword = $("#filterPanel input").val().trim().toLowerCase();
    const selectedColor = $("#filterPanel select").val().trim();

    $(".archive-card").each(function () {
      const cardBrand = $(this).data("brand").toLowerCase();
      const cardColor = $(this).data("color");

      const brandMatch = cardBrand.includes(brandKeyword);
      const colorMatch = selectedColor === "" || selectedColor === cardColor;

      if (brandMatch && colorMatch) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    const visibleSearch = $(".archive-card:visible").length;
    if (visibleSearch === 0) {
      $("#noResult").show();
    } else {
      $("#noResult").hide();
    }
  }
});

//卡片點擊跳轉
$(".archive-card").on("click", function () {
  const url = $(this).data("href");
  if (url) {
    window.location.href = url;
  }
});

//新聞跳轉
$(function () {
  $(".news-card").on("click", function () {
    const url = $(this).data("url");

    if (url) {
      const confirmLeave = confirm("您即將離開本網站，前往外部新聞連結，是否繼續？");
      if (confirmLeave) {
        window.open(url, "_blank");
      }
    }
  });
});

//點top回到最上方
$(function () {
  $(".scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
});

//試色
$(function () {
  const canvas = document.getElementById("overlay");
  const ctx = canvas?.getContext("2d");

  // 嘴唇相對位置（百分比）
  const lips = [
  { x: 0.445, y: 0.675 }, // ~
  { x: 0.42, y: 0.657 }, // 左上
  { x: 0.46, y: 0.635 }, // ~
  { x: 0.51, y: 0.615 }, // 中左
  { x: 0.53, y: 0.625 }, // 中下
  { x: 0.558, y: 0.615 }, // 中右
  { x: 0.6, y: 0.635 }, // ~
  { x: 0.646, y: 0.655 }, // 右上
  { x: 0.62, y: 0.675 }, // ~
  { x: 0.6, y: 0.69 }, // ~
  { x: 0.558, y: 0.7 }, // 右下
  { x: 0.494, y: 0.7 }  // 左下
  ];

  function syncCanvasToModelFace() {
    const model = document.getElementById("modelFace");
    const rect = model.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
  }

  function drawLips(color) {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scaled = lips.map(pt => ({
      x: pt.x * canvas.width,
      y: pt.y * canvas.height
    }));

    ctx.beginPath();
    ctx.moveTo(scaled[0].x, scaled[0].y);
    scaled.forEach(pt => ctx.lineTo(pt.x, pt.y));
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.globalAlpha = 0.7;
    ctx.fill();
    ctx.globalAlpha = 1.0;
  }

  //模特兒模式
  $(".try-btn[data-mode='model']").on("click", function () {
    const modelPath = $(this).data("model");
    if (modelPath) {
      $("#modelFace").css("background-image", `url('./img/model/${modelPath}')`);
      $(".btn-group, .cta_title").hide();
      syncCanvasToModelFace();
      drawLips("#B25A51");
    }
  });

  // 色票切換唇色
  $(document).on("click", ".color-swatch", function () {
    const color = $(this).css("background-color");
    drawLips(color);

    $(".color-swatch").removeClass("selected");
    $(this).addClass("selected");

    const colorNum = $(this).data("num");
    const colorName = $(this).data("name");

    $(".select_color_num").text(colorNum);
    $(".select_color_name_tc").text(colorName);

    const newImg = $(this).data("img");
    $(".stick-img img").attr("src", `./img/lipsticks/${newImg}`);

    window.addEventListener("resize", () => {
    syncCanvasToModelFace();
    drawLips(currentColor); // 重新畫目前顏色
  });
  });
});

//郵件
$(function () {
  $("span:contains('choilips@gmail.com')").on("click", function () {
    window.location.href = "mailto:choilips@gmail.com";
  });
});