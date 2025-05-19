const input = document.getElementById("input");
const btn = document.getElementById("btn");
const items  = document.querySelector(".items")


btn.addEventListener("click", () => {
        
         const task = input.value.trim();

    if (task !== "") {
       const newItem = document.createElement("li"); // Create new li
        newItem.textContent = task;
        newItem.classList.add("list"); //To use for styling
        items.appendChild(newItem); // Add new li to ul

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delbtn");

        deleteBtn.addEventListener("click", () => {
             newItem.remove()
        })//Delete button to remove item

        newItem.appendChild(deleteBtn);
        input.value = ""; // Clear inputer adding
        
    }

})