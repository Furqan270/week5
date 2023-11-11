function validasi (){
  
    let nama = document.getElementById('nama').value
    let umur = document.getElementById('umur').value
    let uang = document.getElementById('uang').value
    
    if (nama.length < 10 || umur < 25 || uang < 100000 || uang > 1000000) {
            alert("Data yang di isi salah");
          } else {
            var dataTable= document.getElementById("pendaftar");
            var newRow = dataTable.insertRow();
            newRow.insertCell().textContent = nama
            newRow.insertCell().textContent = umur
            newRow.insertCell().textContent = uang
            //total
    
            var totaluang = 0;
            var totalUmur = 0;
            var rowCount = dataTable.rows.length - 1;
            for (var i = 1; i < dataTable.rows.length; i++) {
              totaluang += parseInt(dataTable.rows[i].cells[2].textContent);
              totalUmur += parseInt(dataTable.rows[i].cells[1].textContent);
            }
            var ratauang = totaluang/ rowCount;
            var rataumur = totalUmur / rowCount;
    
            document.getElementById("rata").textContent = "Rata-rata pendaftar memiliki uang sangu sebesar " + ratauang.toFixed(2) + " dengan rata-rata umur " + rataumur.toFixed(2);
          }
        }
    