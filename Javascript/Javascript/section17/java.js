/**
 * モーダルの開閉を制御する
 */
document.querySelectorAll('[data-modal-open]').forEach(elem => {
  // 開閉する対象の要素を取得する
  const targetModalId = elem.getAttribute("data-modal-open");
  const modal = document.getElementById("targetModelId");

  // 閉じる
  modal.querySelectorAll('[data-modal-close]').forEach(closeElem => {
    closeElem.addEventListener('click', function () {
        modal.classList.remove('is-open');
  });
});


  // 開く
  elem.addEventListener('click', function () {
    modal.classList.add('is-open')
  });
});

//modal.querySelectorAll('[data-modal-close]')でmodal内のdata-modal-close要素を取得する
//.forEachで探し出した要素すべてに順番に処理を出す
//それぞれの要素にcloseElemという名前を付ける
//closeElem.addEventListener('click', function(){～})でクリックしたときに起こる処理を～の中に書く
// modal.classList.remove('クラス名')でクラス名を削除する
//


/*
// クラスの追加
modal.classList.add('クラス名'); 
// クラスの削除
modal.classList.remove('クラス名'); 

// クラスの切り替え（なければ追加、あれば削除）
modal.classList.toggle('クラス名'); 

// クラスを持っているか確認
if (modal.classList.contains('クラス名')) {
  console.log('クラス名が付いてます！');
}
*/