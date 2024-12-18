const increaseButtons = document.querySelectorAll('.increase');
        const decreaseButtons = document.querySelectorAll('.decrease');
        const deleteButtons = document.querySelectorAll('.delete');
        const heartButtons = document.querySelectorAll('.heart');
            const totalPriceElement = document.querySelector('.total-price');

        increaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const quantityElement = button.parentElement.querySelector('.quantity');
                let quantity = parseInt(quantityElement.textContent);
                quantity++;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            });
        });

        decreaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const quantityElement = button.parentElement.querySelector('.quantity');
                let quantity = parseInt(quantityElement.textContent);
                if (quantity > 0) {
                    quantity--;
                    quantityElement.textContent = quantity;
                        updateTotalPrice();
                }
                
            });
        });

        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                item.remove();
                updateTotalPrice();
            });
        });

        heartButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('liked');
            });
        });

        function updateTotalPrice() {
            const items = document.querySelectorAll('.cart-item');
            let total = 0;

            items.forEach(item => {
                const quantity = parseInt(item.querySelector('.quantity').textContent);
                const price = parseFloat(item.querySelector('.price').textContent);
                total += quantity * price;
            });
            totalPriceElement.textContent = total.toFixed(2);
        }


