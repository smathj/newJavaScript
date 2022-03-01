const sayLater = (text, when) => {
  let task = () => console.log(text);

  /**
   * 1. 함수
   * 2. 시간
   */
  setTimeout(task, when);
};

sayLater("Hello", 1000);
sayLater("GoodBye", 10000);
