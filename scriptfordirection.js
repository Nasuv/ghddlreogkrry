window.onload = function() {
    var images = ["KakaoTalk_Photo_2023-06-04-13-30-29.jpeg", "KakaoTalk_Photo_2023-06-04-13-30-44.jpeg", "KakaoTalk_Photo_2023-06-04-13-31-14.jpeg"];
    var currentIndex = 0;
    var bannerImg = document.getElementById("bannerImg");

    function changeBanner() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        bannerImg.src = "images/" + images[currentIndex];
    }

    setInterval(changeBanner, 3000);
};