import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './router'

// ルートコンポーネントをインポートする
import App from './App.vue'

// 認証情報を保持する(vuex)
import store from './store' // ★　追加

import './bootstrap' // CSRF 対策組み込み済 


new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
  store, // 認証情報の保持(vuex)
  components: { App }, // ルートコンポーネントの使用を宣言する
  template: '<App />' // ルートコンポーネントを描画する
})

createApp()