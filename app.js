document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id:1, name: 'robusta brazil', img: '1.jpg', price:20000 },

            { id:2, name: 'arabian coffe', img: '2.jpg', price:25000 },

            { id:3, name: 'luwak coffe', img: '3.jpg', price:30000 },

            { id:4, name: 'fire ship coffe', img: '4.jpg', price:15000 },
        
            { id:5, name: 'tank coffe', img: '5.jpg', price:25000 },
        ],
}));
});
