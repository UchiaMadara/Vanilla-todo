const input = document.getElementById("input");
const btn = document.getElementById("btn");
const items  = document.getElementById("items")


btn.addEventListener("click", () => {
        
         const task = input.value.trim();

    if (task !== "") {
       const newItem = document.createElement("li"); // Create new li
        newItem.textContent = task;
        newItem.classList.add("list");
        items.appendChild(newItem); // Add new li to ul
        input.value = ""; // Clear inputer adding
        
    }

})