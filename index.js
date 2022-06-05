const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (paramArr, fnSort) => {
    let sort = fnSort(paramArr)
    let arrSorter = []
    for (let i = 0; i < sort.length; i++) {
        arrSorter.push(i + 1 + ". " + sort[i]);        
    }
    return arrSorter;
}

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (paramArr) => {
    paramArr.sort()
    return paramArr;
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (paramArr) => {
    paramArr.sort().reverse()
    return paramArr;
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
