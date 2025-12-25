function blowCandles() {
  const candles = document.querySelectorAll(".candle");

  candles.forEach((candle, index) => {
    setTimeout(() => {
      candle.classList.add("blown");
    }, index * 60);
  });

  setTimeout(() => {
    document.getElementById("wish").style.opacity = "1";
  }, candles.length * 60 + 500);
}
