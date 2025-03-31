  document.addEventListener("DOMContentLoaded", function () {
            const modal = document.getElementById("modal");
            const openModalBtn = document.getElementById("openModal");
            const closeModalBtn = document.querySelector(".close-modal");
            
            if (!openModalBtn) {
                console.error("#openModal button not found!");
            }

            openModalBtn?.addEventListener("click", () => {
                modal.classList.add("show");
            });
            
            closeModalBtn?.addEventListener("click", () => {
                modal.classList.remove("show");
            });
            
            window.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.classList.remove("show");
                }
            });
        });