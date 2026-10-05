document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formPengaduan");
    const hasil = document.getElementById("hasil");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const namaPelapor =
            document.getElementById("namaPelapor").value.trim();

        const kelas =
            document.getElementById("kelas").value.trim();

        const namaSiswa =
            document.getElementById("namaSiswa").value.trim();

        const tanggal =
            document.getElementById("tanggal").value;

        const pelanggaran =
            document.getElementById("pelanggaran").value;

        const keterangan =
            document.getElementById("keterangan").value.trim();


        if (
            namaPelapor === "" ||
            kelas === "" ||
            namaSiswa === "" ||
            tanggal === "" ||
            pelanggaran === "" ||
            keterangan === ""
        ) {
            alert("Mohon lengkapi semua data terlebih dahulu.");
            return;
        }


        hasil.style.display = "block";

        hasil.innerHTML =
            "<strong>✓ Pengaduan berhasil dibuat!</strong><br><br>" +

            "Nama Pelapor: <b>" + namaPelapor + "</b><br>" +

            "Kelas: <b>" + kelas + "</b><br>" +

            "Siswa yang diadukan: <b>" + namaSiswa + "</b><br>" +

            "Tanggal: <b>" + tanggal + "</b><br>" +

            "Pelanggaran: <b>" + pelanggaran + "</b><br><br>" +

            "Terima kasih. Pengaduan telah dicatat.";


        form.reset();


        hasil.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});