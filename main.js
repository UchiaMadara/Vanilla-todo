const input = document.getElementById("input");
const btn = document.getElementById("btn");
const items  = document.getElementById("items")


btn.addEventListener("click", () => {
        
         const task = input.value.trim();

    if (task !== "") {
       const newItem = document.createElement("li"); // Create new li
        newItem.textContent = task;
        newItem.classList.add("list"); //To use for styling
        items.appendChild(newItem); // Add new li to ul

        const deleteBtn = document.createElement("button");
        deleteBtn.style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAbFBMVEX////8AAX8AAD/7O39W1z9fX39T1H+2tr+19f+wMD8JSb8Fxf+q6z9Skz/y8v8HyD/+Pj/8vL/4+P9YmP+pKT9V1j+0tL9b3D9REf9lpf+goL8QkL8LC39dXX8MzT9amv+t7j8Ozz+np79jI2AzmZLAAAEW0lEQVR4nO3b63qiQAwGYIhaRTwgWA/1hPT+73GBqXafXUimSRrt7ny/eeBtVSYkTBQxAxAzAsC9HjsB+h9DeTGH7uas7MyhISEhISH/RgbJvngxT7FPBl9iZus5dy2XZr7O/J35DnjFkTz1hXe5r3MSP4rpqPHEzzk4PJDZUg9+X9TRg521dOTjzB/5uX9Awedr+vZwZy1984A++hvaQg+0c3x8BuiR/uwXy2eALjc/BboI0AAN0AAN0O+Gpo96CPk9KQ3dFMMnSEEvodngKfKFJ7yQkJCQEGkmp5FtxkzowniBj+kFvjsb20IKzp5dvL8yPttCr9yPfny1hc69O7h/JJ/bQodf699/ZvBqC71wa7tVYQs9MZ1RdArQTqhP97Y7tt182LOh75ZQgDUbureFztjQteWABOKSDZ35QNtyQnhEe5RH06EvZUxeACC9bI8YBOC8vXhQIeXWJG17hzx7+wtI+ssXuLb/qD19qiV3Ba2rEurskJbuyE3ffwzij5JoRn06EmhOFaQwvB3adye73xwzqnCA6YoNHZDQ6nboovtfCnDvdlE3ZTiznVE2pU6e3A6ddH9LYHovhmfUua58aESNG1WhcwGUKvFVoYUAurOEer1N0BPyl6oJ5RdPdEGqCuXXJB63FE1oKYCuLaH8mqSuSiyh3Kf6JokllL+CNrXGD4HmdlAQQVeG0KlkBmYJfZFBibMrQtmdpyZUnacJPYmgRONRE8pv6DRQop+nCa26CZ7QrR1UUpOQ72hqQksRlOg+aUKTboFnvM8uhYIQSpRPilCP93KeA3rkd56aJPjSpAg9c6dhLgu8Y6QI9d/P0JkNvoYqQl/5LbL2+vg4VBEqqknIcagidCuDEuNQRSh/GtaGGIcqQkXFU12VXKyg70IoXj4pQkVVXkR1n9SgkrGdCz4OVYSWQijeJtODst/QuQUvSPWgqWypj6IKrUoUobKlnhqH6kEF0zCXBC2fFKHSl5o36JRRDzoVOqPcCHr8KVCP3YB48HGoHnTYfXn/ZEZQyTTMBX0W0YNKaxJibqsHlXWemqAbb/WgpRg6tIFKaxKiINWDSpd6onzSg0pmNy7oOPSZoGibTAsqm4a5oONQNehZDp2YQEXTMJeBCbSQQ9EpoxpU2HlyUOwCWlBhQ6eFYgWpGlRek0QZ1nhUg8prEvwtxaeCYuNQJai8oRMR/TwtaCybhrlg41AtqHAa5lIZQKf05m866I9ACcrexGYNPcjrZrzO++wT973jHPu84yydhrlg41C43I7qexD4/FOQ2xwU8ioP3zVw/7mu+pp+9zYdehrh2M4FHYfWd8D6Gtmk/+kfzuPmiBKtbbYKzmiDtyBgW1UntHBJR9X+gveD5Q2diN4dCtTmGvIA8TTMxWB3qOg97HtWaK9ExSmehrWh3ibTgCpUeeTcVgMqnoa5EK+9aUCl0zCXb98dKp+GuXz77lBINZZ6g92hkKo40cpZB7r0UPwCrblq0Mj6Kk0AAAAASUVORK5CYII=')"
        deleteBtn.classList.add("delbtn");

        deleteBtn.addEventListener("click", () => {
             newItem.remove()
        })//Delete button to remove item

        newItem.appendChild(deleteBtn);
        input.value = ""; // Clear inputer adding
        
    }

})