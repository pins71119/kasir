// Daftar produk
let produk = [
  //1.mie instan
  { id: 1, nama: "Indomie Goreng Spesial", harga: 3245, stok: 50 },
  { id: 2, nama: "Indomie Soto Mie", harga: 3072, stok: 54 },
  { id: 3, nama: "Pop Mie Indomie Goreng ", harga: 5500, stok: 45 },
  { id: 4, nama: " Mi Sedap kari spesial", harga: 3000, stok: 60 },
  { id: 5, nama: " Mi Sedap Goreng ", harga: 3100, stok: 63 },

  //2.minyak
  { id: 6, nama: " Sania Minyak Goreng Refill", harga: 40000, stok: 21 },
  { id: 7, nama: " FILMA Minyak Goreng Pouch 2L", harga: 43368, stok: 20 },
  { id: 8, nama: " Tropical Minyak Goreng Botol 2L", harga: 43500, stok: 28 },
  { id: 9, nama: " Indomaret Minyak Goreng 2L", harga: 35200, stok: 33 },
  { id: 10, nama: " FILMA Minyak Goreng Pouch 2L", harga: 39000, stok: 20 },

  //3.Susu & Minuman Kemasan
  { id: 11, nama: " Milo Susu UHT 180ml", harga: 5000, stok: 21 },
  {
    id: 12,
    nama: " Cimory Yogurt Drink All Variants 250m",
    harga: 7900,
    stok: 20,
  },
  {
    id: 13,
    nama: " Milo Susu UHT Choco Cereal Multigrain 180ml",
    harga: 4500,
    stok: 15,
  },
  {
    id: 14,
    nama: "Indomilk Susu UHT Full Cream Plain 950ml",
    harga: 14000,
    stok: 13,
  },
  {
    id: 15,
    nama: "Greenfields Yogurt Drink All Variants 250ml",
    harga: 8500,
    stok: 20,
  },
  //4makanan ringan
  {
    id: 16,
    nama: "Khong Guan Assorted Biscuit Red Persegi  ",
    harga: 50000,
    stok: 50,
  },

  {
    id: 17,
    nama: "  Cadbury Dairy Milk Cashew Nut 62g ",
    harga: 8000,
    stok: 300,
  },
  {
    id: 18,
    nama: " Campina Heart Strawberry Chocolate Vanilla 85m ",
    harga: 3500,
    stok: 200,
  },
  {
    id: 19,
    nama: " Yoforia Yogurt All Variants 200ml ",
    harga: 7500,
    stok: 211,
  },
  {
    id: 20,
    nama: "KIN Bulgarian Yogurt All Variants 200ml ",
    harga: 8000,
    stok: 300,
  },
  //minuman dingin
  {
    id: 21,
    nama: "Pocari Sweat 900ml ",
    harga: 1200,
    stok: 300,
  },

  {
    id: 22,
    nama: "Ultra Teh Kotak Jasmine 300ml  ",
    harga: 4500,
    stok: 300,
  },

  {
    id: 23,
    nama: "Heavenly Blush Yoguruto All Variants 200ml ",
    harga: 10000,
    stok: 300,
  },

  {
    id: 24,
    nama: "Sweety Bulgarian Yogurt  ",
    harga: 5000,
    stok: 300,
  },

  {
    id: 25,
    nama: "Nescafe Kopi Instant Ice   ",
    harga: 1000,
    stok: 300,
  },
  //kosmetik perawatan
  {
    id: 26,
    nama: "Garnier Bright    ",
    harga: 250000,
    stok: 300,
  },

  {
    id: 27,
    nama: "Garnier Micellar Water   ",
    harga: 27000,
    stok: 300,
  },

  {
    id: 28,
    nama: "Dettol Body Wash Cool   ",
    harga: 15000,
    stok: 300,
  },

  {
    id: 29,
    nama: "Dettol  ",
    harga: 15000,
    stok: 300,
  },

  {
    id: 30,
    nama: "Head & Shoulders  ",
    harga: 17000,
    stok: 300,
  },

  //pembersih rumah tangga
  {
    id: 31,
    nama: "Rinso Liquid Detergent ",
    harga: 29000,
    stok: 300,
  },

  {
    id: 32,
    nama: "Indomaret Pencuci Piring ",
    harga: 7500,
    stok: 300,
  },

  {
    id: 33,
    nama: "Mama Lemon  ",
    harga: 15000,
    stok: 300,
  },

  {
    id: 34,
    nama: "Jolly Facial  ",
    harga: 8000,
    stok: 300,
  },

  {
    id: 35,
    nama: "Hexos Mint Sachet ",
    harga: 2000,
    stok: 300,
  },

  //sembako
  {
    id: 36,
    nama: "Beras Ramos Super ",
    harga: 85000,
    stok: 300,
  },

  {
    id: 37,
    nama: "Sania Beras Premium 5kg ",
    harga: 77000,
    stok: 300,
  },

  {
    id: 38,
    nama: "Gulaku Gula Tebu Kuning  ",
    harga: 17000,
    stok: 300,
  },

  {
    id: 39,
    nama: "Quaker Oatmeal Instant ",
    harga: 10000,
    stok: 300,
  },

  {
    id: 40,
    nama: "Indomaret Meises Chocolate  ",
    harga: 11000,
    stok: 300,
  },

  //produkbayi
  {
    id: 41,
    nama: "Sweety Bronze Pants ",
    harga: 40000,
    stok: 300,
  },

  {
    id: 42,
    nama: "Cussons Baby Powder  ",
    harga: 10000,
    stok: 300,
  },

  {
    id: 43,
    nama: "MamyPoko Pants ",
    harga: 40000,
    stok: 300,
  },

  {
    id: 44,
    nama: "Johnson’s Baby Lotion  ",
    harga: 25000,
    stok: 300,
  },

  {
    id: 45,
    nama: "Zwitsal Baby Cologne  ",
    harga: 18000,
    stok: 300,
  },

  //sabun
  {
    id: 46,
    nama: "Lifebuoy Sabun Cair  ",
    harga: 27000,
    stok: 300,
  },

  {
    id: 47,
    nama: "Pepsodent Pasta Gigi  ",
    harga: 10000,
    stok: 300,
  },

  {
    id: 48,
    nama: "Sunsilk Shampoo ",
    harga: 23000,
    stok: 300,
  },

  {
    id: 48,
    nama: "Sunsilk Shampoo ",
    harga: 23000,
    stok: 300,
  },

  {
    id: 49,
    nama: "Pepsodent Sikat Gigi  ",
    harga: 7500,
    stok: 300,
  },

  {
    id: 50,
    nama: "Nivea Men Deodorant Roll  ",
    harga: 20000,
    stok: 300,
  },
];

let keranjang = [];
let totalHarga = 0;

// Menampilkan daftar produk
function tampilkanProduk() {
  let tabel = document.getElementById("produkList");
  tabel.innerHTML = "";

  produk.forEach((item, index) => {
    let row = tabel.insertRow();
    row.innerHTML = `
        <td>${item.nama}</td>
        <td>Rp${item.harga}</td>
        <td id="stok-${index}">${item.stok}</td>
        <td><input type="number" id="jumlah-${index}" min="1" max="${item.stok}" value="1"></td>
        <td><button class="tambah-btn" onclick="tambahKeKeranjang(${index}, this)">Tambah</button></td>
      `;
  });
}

// Menambahkan barang ke keranjang
function tambahKeKeranjang(index, button) {
  let jumlahInput = document.getElementById(`jumlah-${index}`);
  let jumlah = parseInt(jumlahInput.value);

  if (jumlah > produk[index].stok || jumlah < 1) {
    alert("Jumlah tidak valid!");
    return;
  }

  produk[index].stok -= jumlah;
  let subtotal = produk[index].harga * jumlah;
  totalHarga += subtotal;

  let existingItem = keranjang.find((item) => item.id === produk[index].id);
  if (existingItem) {
    existingItem.jumlah += jumlah;
    existingItem.subtotal += subtotal;
  } else {
    keranjang.push({
      id: produk[index].id,

      nama: produk[index].nama,
      harga: produk[index].harga,
      jumlah: jumlah,
      subtotal: subtotal,
    });
  }

  animateButton(button);
  updateKeranjang();
}

// Menampilkan daftar belanjaan
function updateKeranjang() {
  let tabelKeranjang = document.getElementById("keranjangList");
  tabelKeranjang.innerHTML = "";

  keranjang.forEach((item, index) => {
    let row = tabelKeranjang.insertRow();
    row.innerHTML = `
        <td>${item.nama}</td>
        <td>Rp${item.harga}</td>
        <td>
          <button class="aksi-btn" onclick="kurangiJumlah(${index}, this)">-</button>
          ${item.jumlah}
          <button class="aksi-btn" onclick="tambahJumlah(${index}, this)">+</button>
        </td>
        <td>Rp${item.subtotal}</td>
        <td><button class="hapus-btn" onclick="hapusItem(${index}, this)">Hapus</button></td>
      `;
  });

  document.getElementById("totalHarga").innerText = "Rp " + totalHarga;
  tampilkanProduk();
}

// Fungsi untuk menambah jumlah barang di keranjang
function tambahJumlah(index, button) {
  let produkIndex = produk.findIndex((p) => p.id === keranjang[index].id);
  if (produk[produkIndex].stok > 0) {
    keranjang[index].jumlah++;
    produk[produkIndex].stok--;
    keranjang[index].subtotal =
      keranjang[index].jumlah * keranjang[index].harga;
    totalHarga += keranjang[index].harga;
    animateButton(button);
    updateKeranjang();
  } else {
    alert("Stok habis!");
  }
}

// Fungsi untuk mengurangi jumlah barang di keranjang
function kurangiJumlah(index, button) {
  let produkIndex = produk.findIndex((p) => p.id === keranjang[index].id);
  if (keranjang[index].jumlah > 1) {
    keranjang[index].jumlah--;
    produk[produkIndex].stok++;
    keranjang[index].subtotal =
      keranjang[index].jumlah * keranjang[index].harga;
    totalHarga -= keranjang[index].harga;
    animateButton(button);
    updateKeranjang();
  }
}

// Menghapus item dari keranjang
function hapusItem(index, button) {
  let produkIndex = produk.findIndex((p) => p.id === keranjang[index].id);
  totalHarga -= keranjang[index].subtotal;
  produk[produkIndex].stok += keranjang[index].jumlah;
  keranjang.splice(index, 1);
  animateButton(button);
  updateKeranjang();
}

// Menyelesaikan transaksi
function selesaikanTransaksi(button) {
  alert("Pembayaran berhasil! Total: Rp" + totalHarga);
  keranjang = [];
  totalHarga = 0;
  animateButton(button);
  updateKeranjang();
}

// Menampilkan produk saat halaman dimuat
tampilkanProduk();

// Menampilkan daftar barang di dropdown Restok
function updateDropdownRestok() {
  let dropdown = document.getElementById("pilihBarang");
  dropdown.innerHTML = '<option value="">Pilih Barang</option>';

  produk.forEach((item, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.textContent = `${item.nama} (Stok: ${item.stok})`;
    dropdown.appendChild(option);
  });
}

// Fungsi untuk restok barang
function restokBarang() {
  let index = document.getElementById("pilihBarang").value;
  let jumlah = parseInt(document.getElementById("jumlahRestok").value);

  if (index === "" || isNaN(jumlah) || jumlah <= 0) {
    alert("Pilih barang dan masukkan jumlah restok yang benar!");
    return;
  }

  produk[index].stok += jumlah;
  alert(`Berhasil menambahkan ${jumlah} stok untuk ${produk[index].nama}`);

  updateDropdownRestok();
  tampilkanProduk();
  document.getElementById("jumlahRestok").value = "";
}

// Panggil fungsi untuk menampilkan dropdown saat halaman dimuat
updateDropdownRestok();

// Animasi tombol saat diklik
function animateButton(button) {
  button.classList.add("clicked");
  setTimeout(() => button.classList.remove("clicked"), 200);
}
