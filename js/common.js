function adjustMainMargin() {
  const footerHeight = $('footer').outerHeight();
  $('main').css('margin-bottom', footerHeight);
}

$(document).ready(function () {
  let screenWidth = screen.width;
  if (screenWidth < 768) {
    alert(`建議使用電腦瀏覽網頁，以獲得最佳使用者體驗。`);
  }

  // 先執行 adjustMainMargin 函式
  adjustMainMargin();

  // 頁面載入完成後隱藏 loading 畫面，顯示主內容並調整 margin
  // setTimeout(function () {
  //   $("#loading-screen").fadeOut("slow", function () {
  //     $("#main-content").fadeIn("slow");
  //     adjustMainMargin(); // 確保在顯示主內容後再次調整
  //   });
  // }, 1000);

  // 視窗大小改變時重新調整 main 的 margin
  $(window).resize(adjustMainMargin);
})