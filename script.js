//your JS code here. If required.
 document.addEventListener("DOMContentLoaded", function () {
            const modal = document.getElementById("modal");
            const openModalBtn = document.getElementById("openModal");
            const closeModalBtn = document.querySelector(".close-modal");
            
            if (!openModalBtn) {
                console.error("#openModal button not found!");
            }

            openModalBtn?.addEventListener("click", () => {
                modal.style.display = "flex";
            });
            
            closeModalBtn?.addEventListener("click", () => {
                modal.style.display = "none";
            });
            
            window.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });
        });