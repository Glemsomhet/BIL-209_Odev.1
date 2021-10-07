function hesapla() {
	var sayi1 =Number( document.getElementById('txtSayi1').value)
	var sayi2 =Number( document.getElementById('txtSayi2').value)
	var islem = document.getElementById('islemler').value
	var sonuc = 0
	if(islem == '+'){
    	sonuc = sayi1+sayi2
	}else if(islem == '-'){
    	sonuc = sayi1-sayi2
	}else if(islem == '*'){
    	sonuc = sayi1*sayi2
	}else if(islem == '/'){
		if(sayi2 == 0){
			document.getElementById('lblIslemSonucu').innerHTML = 'Hatalı işlem! Sıfıra bölünemez.'
			return
		}
    	sonuc = sayi1/sayi2
	}else {
		document.getElementById('lblIslemSonucu').innerHTML = 'Tanımlanmamış işlem!'
		return
	}

        document.getElementById('lblIslemSonucu').innerHTML = 'SONUÇ: ' + sonuc;
}
