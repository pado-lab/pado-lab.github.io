// project total num

$(function () {
  var count = $(".slideshow__gallery .slideshow__item").length;
  var sliderCounterTotal = $(".counter--total");
  $(sliderCounterTotal).html("/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + count);
});
// localstorage popup
var toggleMainPopup = function () {
  /* ────────────────
     스토리지 제어 함수
  ──────────────── */
  var handleStorage = {
    setStorage: function (name, exp) {
      var date = new Date();
      date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
      localStorage.setItem(name, date);
    },
    getStorage: function (name) {
      var now = new Date();
      now = now.setTime(now.getTime());
      return parseInt(localStorage.getItem(name)) > now;
    },
  };

  /* ────────────────
     기존 .project__loading 팝업
  ──────────────── */
  if (handleStorage.getStorage("pado-popup")) {
    $(".project__loading").removeClass("on");
  } else {
    $(".project__loading").addClass("on");
  }

  $(".load__info").on("click", "button", function () {
    handleStorage.setStorage("pado-popup", 1);
    $(this).parents(".project__loading.on").removeClass("on");
  });

  $(".load__info")
    .find("button")
    .click(function () {
      $(".project__loading").css("display", "none");
    });

  /* ────────────────
     새로운 <dialog id="mainPopup">
  ──────────────── */
  const dialog = document.getElementById("mainPopup");
  const closeBtn = document.getElementById("closeDialog");
  const fadeClass = "fade";

  if (dialog) {
    dialog.classList.add(fadeClass); // 초기 클래스 등록

    setTimeout(() => {
      if (!handleStorage.getStorage("dialog-popup")) {
        // 유효기간 끝 → 부드럽게 표시
        dialog.classList.add("show");
      } else {
        dialog.classList.remove("show");
      }
    }, 50);

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        dialog.classList.remove("show");
        handleStorage.setStorage("dialog-popup", 1); // 하루동안 안보이게
      });
    }
  }
};

$(function () {
  toggleMainPopup();
});
