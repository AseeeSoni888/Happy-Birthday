


function blowCandles() {
  const flames = document.querySelectorAll(".candle");

  flames.forEach((candle, index) => {
    setTimeout(() => {
      candle.classList.add("blown");
    }, index * 60); // staggered blow effect
  });
}
