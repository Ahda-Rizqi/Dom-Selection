// Dom Selection

// document.getElementById() -> Element

const judul = document.getElementById("judul");

judul.style.color = "red";
judul.style.backgroundColor = "blue";
judul.innerHTML = "Ahda Rizqi";

// document.getElementsByTagName() -> HTMLColections

const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "Gray";
  // perlu index untuk memanipulasi karena itu khusus untuk elements sedangkan ini berbentuk array,ini harus pakai for
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "30px";

// document.getElementsByClassName() -> HTMLCollection

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ahda Rizqi";


kesimpulan

// document.getElementById = mengambil id dari html untuk dirubah(bersifat element karena id di html itu 1);
// document.getElementsByTagName = mengambil tag(p,h1,Ul,li) untuk dirubah (bersifat HTMLCollection(Kumpulan node dengan tag yang sama) dan akan jadikan Array,jadi jika ingin manipulasi maka memerlukan index[]);
// document.getElementsByClassName = mengambil class dari html untuk manipulasi (bersifat HTMLCollection jadi memerlukan index )
