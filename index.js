let collectData = false;

const modal = document.getElementById("modal");
setTimeout(function () {
    modal.style.display = "block";
    modalCloseBtn.disabled = false;
}, 1200);

const modalCloseBtn = document.getElementById("modal-close-btn");
const modalCloseText = document.querySelector(".modalCloseText");
const body = document.body
modalCloseBtn.addEventListener("click", function () {
    if (collectData === false) {
        modalCloseText.style.animation = "";
        void modalCloseText.offsetWidth;

        modalCloseText.style.animation = "appear 1.5s ease-out forwards";
    } else {
        modal.style.display = "none"
        body.innerHTML = `
        <div class="last-msg">
            <h1>RIP YOUR DATA LMAO</h1>
        </div>
        `
    }
});

const form = document.getElementById("form");
const acceptBtn = document.getElementById("accept-btn");
const modalInner = document.getElementById("modal-inner");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let fullname = formData.get("fullname");

    renderModalAfter(fullname)
});

function renderModalAfter(fullname){
    modalInner.innerHTML = `
    <h2>We ❤️ Your Data!</h2>
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`;

    const uploadText = document.getElementById("uploadText");
    setTimeout(() => {
        uploadText.textContent = "Making the sale...";
    }, 1500);

    setTimeout(() => {
        modalInner.innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullname}</span>, you fucking Idiot! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="laugh-gif">
            <img src="images/pirate.gif">
        </div>
        `;
        collectData = true
    }, 3000);
}


const declineBtn = document.getElementById("decline-btn");
const modalBtnContainer = document.querySelector(".modal-choice-btns");
declineBtn.addEventListener("mouseenter", ()=>{
    modalBtnContainer.classList.toggle("modal-choice-btns-reverse")
})

declineBtn.addEventListener("click", ()=>{
    modalBtnContainer.classList.toggle("modal-choice-btns-reverse")
})
