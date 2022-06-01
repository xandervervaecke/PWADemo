<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <div> In store: <br>
            <button @click="subscribe()" v-for="(opdracht, index) in opdrachten" v-bind:key="index"> {{opdracht}} <br></button>        
    </div>
    
  </div>
</template>

<script>

addEventListener('push', function(e) {
    console.log(e+"push")
});
export default {
  name: 'HelloWorld',
  data(){
   return{
    projet:{},
    caches: [""] ,
    opdrachten: ['Opdracht 1','Opdracht 2','Opdracht 3','Opdracht 4','Opdracht 5']
   }},
  
  methods: {
  
  fficherProjet(){
       const request = window.indexedDB.open("pwaDbdemo",1);
          request.onupgradeneeded = function(){
            const objectStore = request.result.createObjectStore("users",{keyPath:"id"});            
              objectStore.add({
                id: 1,
                opdracht: "Opdracht1"  
                })
                 objectStore.add({
                id: 2,
                opdracht: "Opdracht2"  
                })
                objectStore.add({
                id: 3,
                opdracht: "Opdracht3"  
                })
                 objectStore.add({
                id: 4,
                opdracht: "Opdracht4"  
                })
                 objectStore.add({
                id: 5,
                opdracht: "Opdracht5"  
                })
                 objectStore.add({
                id: 6,
                opdracht: "Opdracht6"  
                })}
              
            request.onsuccess = function(){
            const transaction = request.result.transaction(['users'],'readonly');
            const objectStore2 = transaction.objectStore("users");
            for (let index = 1; index < 7; index++) {
              objectStore2.get(index).onsuccess = function(){
                console.log(this.result.opdracht)
              }
            }
          } 
 },
 
  async subscribe() {
    
      let sw = await navigator.serviceWorker.ready;
      let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BBpS5tp2_TojL4KyOkyfhWFffToTw-DjdTnpkCEDy-e3FdPI4jOS8maKRTThOW2jx_s3vMTxWvrkalGxxjnrIuA'
    })
    console.log(JSON.stringify(push))
    }
},
mounted() {
           console.log('Component mounted.')
           this.fficherProjet();
           
         
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
