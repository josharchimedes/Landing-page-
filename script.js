// 1. Find the button
const uploadBtn = document.getElementById("uploadBtn");

// 2. Listen for a click
uploadBtn.addEventListener("click", () => {

    // 3. Change button state
    uploadBtn.innerText = "Uploading...";
    uploadBtn.disabled = true;

    // 4. Fake upload delay
    setTimeout(() => {
        uploadBtn.innerText = "Upload Complete ✅";
    }, 2000);

});

