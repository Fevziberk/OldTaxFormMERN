import React from "react";
import "../styles/page2.css";
function Page2Table() {

 
const storedTypeSums = JSON.parse(localStorage.getItem('typeSums'));


const egitimAmount = storedTypeSums.Egitim.amount;
const egitimPrice = storedTypeSums.Egitim.price;

const saglikAmount = storedTypeSums.Saglik.amount;
const saglikPrice = storedTypeSums.Saglik.price;

const gidaAmount = storedTypeSums.Gida.amount;
const gidaPrice = storedTypeSums.Gida.price;

const giyimAmount = storedTypeSums.Giyim.amount;
const giyimPrice = storedTypeSums.Giyim.price;

const kiraAmount = storedTypeSums.Kira.amount;
const kiraPrice = storedTypeSums.Kira.price;

var totalAmount = localStorage.getItem('totalAmount');
var totalPrice = localStorage.getItem('totalPrice');



  return (
    <div className="container">
      <div className="tableHead-Page2">
        <div className="tableTitle">ÖZEL GİDER İNDİRİMİNE AİT BİLDİRİM</div>
        <div className="textUnderTitle">
          (Ücretleri Gerçek Usülde Tespit Edilen ve Vergisi Tevkif Yolu İle
          Kesilen Ücretlilere Ait)
        </div>
        <div className="headDate">
          Ait Olduğu Dönem <br />
          <span>..../..../20..</span>
          <br /> <span>..../..../20...</span>
        </div>
        <div className="titleEmployer">İŞVERENİN</div>
        <div className="employerInfo">
          Adı, Soyadı <br />
          Veya Ünvanı
        </div>
        <div className="employerAdress">Adresi</div>
        <div className="employerInfoCell"> </div>
        <div className="employerAdressCell"> </div>
      </div>
      <div className="tableBody">
        <div className="tableBodyTitle">
          ÖZEL GİDER İNDİRİMİNDEN FAYDALANANIN
        </div>
        <div className="surname">Soyadı</div>
        <div className="surnameCell"> </div>
        <div className="regNum">Kurum Sicil No</div>
        <div className="regNumCell"> </div>
        <div className="name">Adı</div>
        <div className="nameCell1"></div>
        <div className="nameCell2"> </div>
        <div className="nameCell3"> </div>
        <div className="adressInfo">
          İkametgah Adresi <br />
          ve Telefon No.
        </div>
        <div className="adressInfoCell"> </div>
        <div className="secondTitle">
          ADINA BELGE ALINMIŞ İSE <br />
          Özel gider indiriminden faydalanan eşi ve 18 yaşını aşmamış
          çocukları(*)
        </div>
        <div className="nameSurname">Adı ve Soyadı</div>
        <div className="birthDate">Doğum Tarihi</div>
        <div className="relativeDegree">Yakınlık Derecesi</div>
        <div className="nameSurnameCell1"></div>
        <div className="birthDateCell1"></div>
        <div className="relativeDegreeCell1"></div>
        <div className="nameSurnameCell2"> </div>
        <div className="birthDateCell2"> </div>
        <div className="relativeDegreeCell2"> </div>
        <div className="nameSurnameCell3"> </div>
        <div className="birthDateCell3"> </div>
        <div className="relativeDegreeCell3"> </div>
        <div className="nameSurnameCell4"> </div>
        <div className="birthDateCell4"> </div>
        <div className="relativeDegreeCell4"> </div>
        <div className="nameSurnameCell5"> </div>
        <div className="birthDateCell5"> </div>
        <div className="relativeDegreeCell5"> </div>
      </div>
      <div className="tableFoot-Page2">
        <div className="tableFootTitle">
          ÖZEL GİDER İNDİRİMİ HESAPLAMA TABLOSU
        </div>
        <div className="expenseType">Harcamaların Cinsi</div>
        <div className="fileAmount">Belge Adedi</div>
        <div className="price">Tutarı</div>
        <div className="percentage">
          Toplam Harcamalara Özel Gider <br />
          İstisnalarına Esas Olacak Tutarı (%10)
        </div>
        <div className="percentageCell"> </div>
        <div className="typeEducation">1 Eğitim</div>
        <div className="typeEduFileCell" id="typeEduFileCell">
          {egitimAmount}
        </div>
        <div className="typeEduPriceCell" id="typeEduPriceCell">
        {egitimPrice}
        </div>
        <div className="typeMed">2 Sağlık</div>
        <div className="typeMedFileCell" id="typeMedFileCell">
          {saglikAmount}
        </div>
        <div className="typeMedPriceCell" id="typeMedPriceCell">
          {saglikPrice}
        </div>
        <div className="typeNutr">3 Gıda</div>
        <div className="typeNutrFileCell" id="typeNutrFileCell">
          {gidaAmount}
        </div>
        <div className="typeNutrPriceCell" id="typeNutrPriceCell">
          {gidaPrice}
        </div>
        <div className="typeClothing">4 Giyim</div>
        <div className="typeClothingFileCell" id="typeClothingFileCell">
          {giyimAmount}
        </div>
        <div className="typeClothingPriceCell" id="typeClothingPriceCell">
          {giyimPrice}
        </div>
        <div className="typeRent">5 Kira</div>
        <div className="typeRentFileCell" id="typeRentFileCell">
          {kiraAmount}
        </div>
        <div className="typeRentPriceCell" id="typeRentPriceCell">
          {kiraPrice}
        </div>
        <div className="total">6 TOPLAM</div>
        <div className="totalFile" id="totalFile">
          {totalAmount}
        </div>
        <div className="totalPrice" id="totalPrice">
          {totalPrice}
        </div>
        <div className="signature">
          ..../..../20.... <br />
          Özel Gider İndiriminden <br />
          Faydalanan İmzası
        </div>
      </div>
      <br />
      <p>
        İş bu bildirim ile beyan ettiğim eğitim, sağlık, gıda, giyim için ekli
        ....................................... adet belge karşılığı yapmış
        olduğum harcama ....................................... TL
        ....................................... KR'dır.(**) Bu belgelerin ve
        belgelerde yer alan harcamaların doğruluğunu beyan ile belgeler ve
        harcamaların gerçeği yansıtmaması nedeniyle doğacak vergi ve cezalardan
        sorumlu olduğumu taahhüt ve kabul ederim.
        <br />
        <br />
        NOT:(**) Bu boşluklar yazı ile doldurulacaktır.
      </p>
    </div>
  );
}

export default Page2Table;
