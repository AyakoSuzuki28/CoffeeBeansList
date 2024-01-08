document.addEventListener("DOMContentLoaded", function () {
  // ローカルストレージからデータを取得してcoffeeBeansListを設定
  let coffeeBeansList =
    JSON.parse(localStorage.getItem("coffeeBeanList")) || [];

  // 保存ボタンをクリックした時
  document.getElementById("save").addEventListener("click", function () {
    const beanName = document.getElementById("bean").value;
    const taste = document.getElementById("taste-select").value;
    const shopName = document.getElementById("shop").value;
    const price = document.getElementById("price").value;

    const coffeeBean = {
      beanName: beanName,
      taste: taste,
      shopName: shopName,
      price: price,
    };

    // 新しいデータの追加
    coffeeBeansList.push(coffeeBean);

    // ローカルストレージにリストを保存
    localStorage.setItem("coffeeBeanList", JSON.stringify(coffeeBeansList));

    // リストを表示する関数を呼び出す
    displayCoffeeBeans();
  });

  // コーヒー豆のリストを表示する関数
  function displayCoffeeBeans() {
    const listElement = document.getElementById("list");
    listElement.innerHTML = "";

    // ローカルストレージからリストの取得
    coffeeBeansList = JSON.parse(localStorage.getItem("coffeeBeanList")) || [];

    // 各コーヒー豆のリスト表示
    coffeeBeansList.forEach(function (bean, index) {
      const listItem = document.createElement("li");
      listItem.className = "sec02__list__item";

      const beanDiv = document.createElement("div");
      beanDiv.textContent = bean.beanName;
      listItem.appendChild(beanDiv);

      const tasteDiv = document.createElement("div");
      tasteDiv.textContent = bean.taste;
      listItem.appendChild(tasteDiv);

      const shopDiv = document.createElement("div");
      shopDiv.textContent = bean.shopName;
      listItem.appendChild(shopDiv);

      const priceDiv = document.createElement("div");
      priceDiv.textContent = bean.price + "円";
      listItem.appendChild(priceDiv);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "削除";
      deleteButton.addEventListener("click", function () {
        // データ削除
        coffeeBeansList.splice(index, 1);
        // ローカルストレージに更新したリストを保存
        localStorage.setItem("coffeeBeanList", JSON.stringify(coffeeBeansList));
        // リストを再表示
        displayCoffeeBeans();
      });
      listItem.appendChild(deleteButton);

      listElement.appendChild(listItem);
    });
  }

  // 初期表示
  displayCoffeeBeans();
});
