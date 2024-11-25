// Dom Selection

// 1. document.getElementById() -> Element

const judul = document.getElementById("judul");

judul.style.color = "red";
judul.style.backgroundColor = "blue";
judul.innerHTML = "Ahda Rizqi";

// 2. document.getElementsByTagName() -> HTMLColections

const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "Gray";
  // perlu index untuk memanipulasi karena itu khusus untuk elements sedangkan ini berbentuk array,ini harus pakai for
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "30px";

// 3. document.getElementsByClassName() -> HTMLCollection

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ahda Rizqi";

// 4. document.querySelector() -> element

const p4 = document.querySelector("#b p");
p4.style.color = "blue";
p4.style.fontSize = "100px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.color = "orange";

// 5. document.querySelectorAll()

const p2 = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "blue";
}

// kesimpulan

// document.getElementById = mengambil id dari html untuk dirubah(bersifat element karena id di html itu 1);
// document.getElementsByTagName = mengambil tag(p,h1,Ul,li) untuk dirubah (bersifat HTMLCollection(Kumpulan node dengan tag yang sama) dan akan jadikan Array,jadi jika ingin manipulasi maka memerlukan index[]);
// document.getElementsByClassName = mengambil class dari html untuk manipulasi (bersifat HTMLCollection jadi memerlukan index )
// querySelector = bersifat element tunggal ,contoh  kalau kita manggil p maka akan memilih p pertama walau p nya ada banyak
// querySelectorall = bersifat nodelist kenapa bersifat nodelist,karena bisa saja dalam 1 queryselectorall itu ada class,tag,id jadi lebih general

// Urutan pengunaan yang efesien 

// getElementById() — Paling Cepat & Spesifik. Pilih ID jika kamu tahu ID elemen yang ingin dipilih.
// querySelector() — Lebih Fleksibel dan dapat memilih berdasarkan kombinasi tag, kelas, atau ID.
// getElementsByClassName() / getElementsByTagName() — Baik untuk memilih banyak elemen berdasarkan tag atau class, tapi lebih terbatas.
// querySelectorAll() — Paling Fleksibel, tetapi hasilnya NodeList yang tidak terupdate otomatis dan lebih berat.

// Kenapa ?

// Element adalah yang paling spesifik (biasanya satu elemen).
// HTMLCollection adalah kumpulan elemen yang bersifat live.
// NodeList adalah kumpulan node yang lebih fleksibel, tapi tidak terupdate otomatis (static).
