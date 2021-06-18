const axios = require('axios')

console.log('百度')
axios.get('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&tn=baiduhome_pg&wd=nvm%20%E4%B8%8B%E8%BD%BD%E4%B8%8D%E5%90%8C%E7%89%88%E6%9C%AC&rsv_spt=1&oq=nvm&rsv_pq=9e9813850005b655&rsv_t=dfafBLTnMuvVjV%2B6U1%2FOQv5a06W0%2BSe82CYb0NNHAxkkbhz7qBxqTTlrVODwO2wEWvNA&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_btype=t&inputT=3168&rsv_sug3=32&rsv_sug1=17&rsv_sug7=100&rsv_sug2=0&rsv_sug4=4545').then(res=>[
  console.log(res)
]).catch(err=>{

})