const themeBtn = document.getElementById("themeBtn");
let i = 0;
themeBtn.addEventListener("click", (e) => {
    if (i === 0) {
        document.startViewTransition(() => {
            document.documentElement.style.setProperty("--theme", "light");
        });
        i++;
        console.log(i);
    } else {
        document.startViewTransition(() => {
            document.documentElement.style.setProperty("--theme", "dark");
        });
        i--;
        console.log(i);
    }
});
