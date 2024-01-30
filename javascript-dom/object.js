var siswa = new Object();
siswa.namaDepan = "vany";
siswa.namaBelakang = "ariani";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang

};

alert("Nama :" + siswa.namaLengkap());

// function namaLengkap() {