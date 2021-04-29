const updateImageWidth = (val) => {
  const imageWrapper = document.querySelector(".after");
  val = 100 - val;
  imageWrapper.style.width = String(val) + "%";
}
