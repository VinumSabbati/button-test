const onBtnOneClick = () => {
    if (document.getElementById('dropTwo').classList.contains('show')) {
        document.getElementById('dropTwo').classList.remove('show');
    }
    document.getElementById("dropOne").classList.toggle("show");
};

const onBtnTwoClick = () => {
    if (document.getElementById('dropOne').classList.contains('show')) {
        document.getElementById('dropOne').classList.remove('show');
    }
    document.getElementById("dropTwo").classList.toggle("show");
};

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};