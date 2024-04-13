const modalBtn = document.getElementById("modal_btn");

modalBtn.addEventListener("click", function () {
  if (modalBtn.classList.contains("clicked")) {
    document.getElementById("modal").style.display = "none";
    document.getElementById("triangle").style.display = "none";
    modalBtn.classList.remove("clicked"); // Hapus kelas clicked jika sudah ada
  } else {
    document.getElementById("modal").style.display = "block";
    document.getElementById("triangle").style.display = "block";
    modalBtn.classList.add("clicked"); // Tambahkan kelas clicked jika belum ada
  }
});
