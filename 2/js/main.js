var app = new Vue({
    el: '#app',
    data: {
        foodList: [
                {
                name: 'apple',
                price: 15,
                discount: .8
            },
            {
                name: 'curry',
                price: 20,
                discount: .7
            },
            {
                name: 'potato',
                price: 10,
            }
        ] 
    }
});