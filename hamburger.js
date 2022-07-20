const arr = document.getElementsByClassName("menu-item");
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    element.addEventListener("click", () => {
        document.getElementById("check").checked = false;
    });
}