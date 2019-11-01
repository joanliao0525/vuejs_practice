// Vue.component('alert' )

var alert_component = {
    template: '<button @click="on_click">Click</button>',
      methods: {
        on_click: function(){
            alert('yay.');
        }
    },
}

new Vue({
  el: '#seg1',
  components: {
    alert: alert_component
  }
})

new Vue({
    el: '#seg2',
    components: {
        alert: alert_component
    }
})