function showAlert() {
            alert("Ini adalah pesan alert!");
        }

        function showPrompt() {
            var userInput = prompt("Masukkan nama Anda:");
            alert("Halo, " + userInput + "!");
        }

        function showPromptWithDefault() {
            var favoriteColor = prompt("Apa warna favorit Anda?", "Biru");
            alert("Warna favorit Anda adalah " + favoriteColor + "!");
        }

        function showPromptWithValidation() {
            var userAge = prompt("Berapa usia Anda?");
            if (isNaN(userAge)) {
                alert("Harap masukkan angka yang valid.");
            } else {
                alert("Usia Anda adalah " + userAge + " tahun.");
            }
        }

        function showConfirm() {
            var confirmAction = confirm("Apakah Anda yakin ingin melanjutkan?");
            if (confirmAction) {
                alert("Anda memilih untuk melanjutkan.");
            } else {
                alert("Anda memilih untuk membatalkan.");
            }
        }

// SAYA MENAMBAHKAN BEBERAPA KODING JS UNTUK MEMBUAT WEBSITE MENJADI LEBIH MENARIK
