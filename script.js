var tabContent = document.querySelectorAll('.tab-content');
var imgGallery = document.querySelectorAll('.image-gallery');

// console.log(tabContent);
// console.log(imgGallery);
for (var i = 0; i < tabContent.length; i++) {
    console.log(tabContent[i]);
    tabContent.forEach(function (tab) {
        tab.addEventListener("click", function () {
            // removeActiveClass();
            // this.classList.add('active');
            for (var j = 0; j < tabContent.length; j++) {

                tabContent[j].classList.remove('active');
                console.log(tabContent[j]);
            }
            this.classList.add('active');
            console.log(this);
            var dataFilter = this.getAttribute('data-filter');
            for (var k = 0; k < imgGallery.length; k++) {
                imgGallery[k].classList.remove('active');
                imgGallery[k].classList.add('hide');
                if (imgGallery[k].getAttribute('data-img-filter') === dataFilter || dataFilter === "all") {
                    imgGallery[k].classList.remove('hide');
                    imgGallery[k].classList.add('active');
                }
            }
        })
    })
}
