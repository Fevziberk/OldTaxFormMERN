import { useState,useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { Link } from "react-router-dom"
import axios from "axios"
import "../styles/page1.css";

function Page1Table() {
  const location = useLocation();
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  const [formData, setFormData] = useState({
    username: location.state.id ,
    date1: "",
  no1: "",
  whoFrom1: "",
  type1: "",
  price1: "",
date2: "",
  no2: "",
  whoFrom2: "",
  type2: "",
  price2: "",
date3: "",
  no3: "",
  whoFrom3: "",
  type3: "",
  price3: "",
date4: "",
  no4: "",
  whoFrom4: "",
  type4: "",
  price4: "",
date5: "",
  no5: "",
  whoFrom5: "",
  type5: "",
  price5: "",
date6: "",
  no6: "",
  whoFrom6: "",
  type6: "",
  price6: "",
date7: "",
  no7: "",
  whoFrom7: "",
  type7: "",
  price7: "",
date8: "",
  no8: "",
  whoFrom8: "",
  type8: "",
  price8: "",
date9: "",
  no9: "",
  whoFrom9: "",
  type9: "",
  price9: "",
date10: "",
  no10: "",
  whoFrom10: "",
  type10: "",
  price10: "",
date11: "",
  no11: "",
  whoFrom11: "",
  type11: "",
  price11: ""

  });

  function calculate() {
    const typeSums = {
      Egitim: { price: 0, amount: 0 },
      Saglik: { price: 0, amount: 0 },
      Gida: { price: 0, amount: 0 },
      Giyim: { price: 0, amount: 0 },
      Kira: { price: 0, amount: 0 },
      
    };
  
    let finalPriceLeft = 0; 
  
    for (let i = 1; i <= 11; i++) {
      const currentType = formData['type' + i];
      const currentPrice = parseFloat(formData['price' + i]);
  
      if (currentType === "Egitim") {
        typeSums.Egitim.amount++;
        if (!isNaN(currentPrice)) {
          typeSums.Egitim.price += currentPrice;
        }
        if (i === 1 || i % 2 === 0) {
          finalPriceLeft += currentPrice; 
        }
      } else if (currentType === "Saglik") {
        typeSums.Saglik.amount++;
        if (!isNaN(currentPrice)) {
          typeSums.Saglik.price += currentPrice;
        }
        if (i === 1 || i % 2 === 0) {
          finalPriceLeft += currentPrice; 
        }
      } else if (currentType === "Gida") {
        typeSums.Gida.amount++;
        if (!isNaN(currentPrice)) {
          typeSums.Gida.price += currentPrice;
        }
        if (i === 1 || i % 2 === 0) {
          finalPriceLeft += currentPrice;
        }
      } else if (currentType === "Giyim") {
        typeSums.Giyim.amount++;
        if (!isNaN(currentPrice)) {
          typeSums.Giyim.price += currentPrice;
        }
        if (i === 1 || i % 2 === 0) {
          finalPriceLeft += currentPrice;
        }
      } else if (currentType === "Kira") {
        typeSums.Kira.amount++;
        if (!isNaN(currentPrice)) {
          typeSums.Kira.price += currentPrice;
        }
        if (i === 1 || i % 2 === 0) {
          finalPriceLeft += currentPrice; 
        }
      }
      
    }
  
   
    localStorage.setItem('typeSums', JSON.stringify(typeSums));
  
    
    const storedTypeSums = JSON.parse(localStorage.getItem('typeSums'));
  
    const totalAmount = Object.values(storedTypeSums).reduce((sum, typeSum) => sum + typeSum.amount, 0);
    const totalPrice = Object.values(storedTypeSums).reduce((sum, typeSum) => sum + typeSum.price, 0);
  
    
    localStorage.setItem('totalAmount', totalAmount);
    localStorage.setItem('totalPrice', totalPrice);
  
    const retrievedTotalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
  
    document.getElementById('finalPriceLeft').textContent = finalPriceLeft; 
    document.getElementById('transferredPriceRight').textContent = finalPriceLeft;
    document.getElementById('finalPriceRight').textContent = retrievedTotalPrice;
    
  }
  useEffect(() => {
   
    const usernameToRetrieve = location.state.id;
    axios.get(`http://localhost:3000/page1?username=${usernameToRetrieve}`)
      .then((response) => {
        const userData = response.data.user;
        setFormData({
          username: usernameToRetrieve,
          date1: userData.row1.date1,
          no1: userData.row1.no1,
          whoFrom1: userData.row1.whoFrom1,
          type1: userData.row1.type1,
          price1: userData.row1.price1,
          date2: userData.row2.date2,
          no2: userData.row2.no2,
          whoFrom2: userData.row2.whoFrom2,
          type2: userData.row2.type2,
          price2: userData.row2.price2,
          date3: userData.row3.date3,
          no3: userData.row3.no3,
          whoFrom3: userData.row3.whoFrom3,
          type3: userData.row3.type3,
          price3: userData.row3.price3,
          date4: userData.row4.date4,
          no4: userData.row4.no4,
          whoFrom4: userData.row4.whoFrom4,
          type4: userData.row4.type4,
          price4: userData.row4.price4,
          date5: userData.row5.date5,
          no5: userData.row5.no5,
          whoFrom5: userData.row5.whoFrom5,
          type5: userData.row5.type5,
          price5: userData.row5.price5,
          date6: userData.row6.date6,
          no6: userData.row6.no6,
          whoFrom6: userData.row6.whoFrom6,
          type6: userData.row6.type6,
          price6: userData.row6.price6,
          date7: userData.row7.date7,
          no7: userData.row7.no7,
          whoFrom7: userData.row7.whoFrom7,
          type7: userData.row7.type7,
          price7: userData.row7.price7,
          date8: userData.row8.date8,
          no8: userData.row8.no8,
          whoFrom8: userData.row8.whoFrom8,
          type8: userData.row8.type8,
          price8: userData.row8.price8,
          date9: userData.row9.date9,
          no9: userData.row9.no9,
          whoFrom9: userData.row9.whoFrom9,
          type9: userData.row9.type9,
          price9: userData.row9.price9,
          date10: userData.row10.date10,
          no10: userData.row10.no10,
          whoFrom10: userData.row10.whoFrom10,
          type10: userData.row10.type10,
          price10: userData.row10.price10,
          date11: userData.row11.date11,
          no11: userData.row11.no11,
          whoFrom11: userData.row11.whoFrom11,
          type11: userData.row11.type11,
          price11: userData.row11.price11,

        });

      
      })
      .catch((error) => {
        console.error(error);

      });
      calculate();}, []); 
  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  

  
  

  

async function handleSubmit(e) {
  calculate();
  e.preventDefault();

  try {
    await axios.post("http://localhost:3000/page1", formData)
    .then(res=>{
      if(res.data ==="exist"){
        alert("Saved successfully");
  
      }
     else if(res.data ==="notexist"){
        alert("Failed to save");
      }
    }).catch(e=>{
      console.log(e);
      alert("Unknown error")
      
    })
  } catch (event) {
    console.log(e);
  }
  setIsSaveClicked(true);
}



  return (
    <form method="POST">
      <div className="container">
        <div className="taxTable">
          <div className="TableHead-Page1">
            <div className="queueNoFirst">
              Sıra <br />
              No
            </div>
            <div className="headTextFirst">VERGİ İNDİRİMİNE ESAS BELGENİN</div>
            <div className="queueNoSecond">
              Sıra <br />
              No
            </div>
            <div className="headTextSecond">VERGİ İNDİRİMİNE ESAS BELGENİN</div>
            <div className="dateHead">Tarih</div>
            <div className="noHead">Nosu</div>
            <div className="whoFromHead">Kimden Aldığı</div>
            <div className="typeHead">Cinsi</div>
            <div className="priceHead">Tutar TL</div>
            <div className="dateHeadSecond">Tarih</div>
            <div className="noHeadSecond">Nosu</div>
            <div className="whoFromHeadSecond">Kimden Aldığı</div>
            <div className="typeHeadSecond">Cinsi</div>
            <div className="priceHeadSecond">Tutar TL</div>
            <div className="rowNumberOne">1</div>
            <div className="dateInput1">
              <input
                type="text"
                name="date1"
                className="dateInputField"
                value={formData.date1}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInput1">
              <input
                type="text"
                name="no1"
                className="noInputField"
                value={formData.no1}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInput1">
              <input
                type="text"
                name="whoFrom1"
                className="whoFromInputField"
                value={formData.whoFrom1}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type1"
                className="typeInputField"
                value={formData.type1}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInput1">
              <input
                type="text"
                name="price1"
                className="priceInputField"
                value={formData.price1}
                onChange={handleFormChange}
              />
            </div>
            <div className="transferredPriceText">NAKLEDİLEN TOPLAM</div>
            <div className="transferredPrice" id="transferredPriceRight">0</div>
          </div>

          <div className="tableInputArea">
            <div className="rowNum">2</div>
            <div className="dateInputs">
              <input
                type="text"
                name="date2"
                className="dateInputField"
                value={formData.date2}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInputs">
              <input
                type="text"
                name="no2"
                className="noInputField"
                value={formData.no2}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInputs">
              <input
                type="text"
                name="whoFrom2"
                className="whoFromInputField"
                value={formData.whoFrom2}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type2"
                className="typeInputField"
                value={formData.type2}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInputs">
              <input
                type="text"
                name="price2"
                className="priceInputField"
                value={formData.price2}
                onChange={handleFormChange}
              />
            </div>
            <div className="rowNum">3</div>
            <div className="dateInputs">
              <input
                type="text"
                name="date3"
                className="dateInputField"
                value={formData.date3}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInputs">
              <input
                type="text"
                name="no3"
                className="noInputField"
                value={formData.no3}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInputs">
              <input
                type="text"
                name="whoFrom3"
                className="whoFromInputField"
                value={formData.whoFrom3}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type3"
                className="typeInputField"
                value={formData.type3}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInputs">
              <input
                type="text"
                name="price3"
                className="priceInputField"
                value={formData.price3}
                onChange={handleFormChange}
              />
            </div>
            <div className="rowNum">4</div>
            <div className="dateInputs">
              <input
                type="text"
                name="date4"
                className="dateInputField"
                value={formData.date4}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInputs">
              <input
                type="text"
                name="no4"
                className="noInputField"
                value={formData.no4}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInputs">
              <input
                type="text"
                name="whoFrom4"
                className="whoFromInputField"
                value={formData.whoFrom4}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type4"
                className="typeInputField"
                value={formData.type4}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInputs">
              <input
                type="text"
                name="price4"
                className="priceInputField"
                value={formData.price4}
                onChange={handleFormChange}
              />
            </div>
            <div className="rowNum">5</div>
            <div className="dateInputs">
              <input
                type="text"
                name="date5"
                className="dateInputField"
                value={formData.date5}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInputs">
              <input
                type="text"
                name="no5"
                className="noInputField"
                value={formData.no5}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInputs">
              <input
                type="text"
                name="whoFrom5"
                className="whoFromInputField"
                value={formData.whoFrom5}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type5"
                className="typeInputField"
                value={formData.type5}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInputs">
              <input
                type="text"
                name="price5"
                className="priceInputField"
                value={formData.price5}
                onChange={handleFormChange}
              />
            </div>
            <div className="rowNum">6</div>
            <div className="dateInputs">
              <input
                type="text"
                name="date6"
                className="dateInputField"
                value={formData.date6}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInputs">
              <input
                type="text"
                name="no6"
                className="noInputField"
                value={formData.no6}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInputs">
              <input
                type="text"
                name="whoFrom6"
                className="whoFromInputField"
                value={formData.whoFrom6}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type6"
                className="typeInputField"
                value={formData.type6}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInputs">
              <input
                type="text"
                name="price6"
                className="priceInputField"
                value={formData.price6}
                onChange={handleFormChange}
              />
            </div>
            <div className="rowNum">7</div>
            <div className="dateInputs">
              <input
                type="text"
                name="date7"
                className="dateInputField"
                value={formData.date7}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInputs">
              <input
                type="text"
                name="no7"
                className="noInputField"
                value={formData.no7}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInputs">
              <input
                type="text"
                name="whoFrom7"
                className="whoFromInputField"
                value={formData.whoFrom7}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type7"
                className="typeInputField"
                value={formData.type7}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInputs">
              <input
                type="text"
                name="price7"
                className="priceInputField"
                value={formData.price7}
                onChange={handleFormChange}
              />
            </div>
            <div className="rowNum">8</div>
            <div className="dateInputs">
              <input
                type="text"
                name="date8"
                className="dateInputField"
                value={formData.date8}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInputs">
              <input
                type="text"
                name="no8"
                className="noInputField"
                value={formData.no8}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInputs">
              <input
                type="text"
                name="whoFrom8"
                className="whoFromInputField"
                value={formData.whoFrom8}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type8"
                className="typeInputField"
                value={formData.type8}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInputs">
              <input
                type="text"
                name="price8"
                className="priceInputField"
                value={formData.price8}
                onChange={handleFormChange}
              />
            </div>
            <div className="rowNum">9</div>
            <div className="dateInputs">
              <input
                type="text"
                name="date9"
                className="dateInputField"
                value={formData.date9}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInputs">
              <input
                type="text"
                name="no9"
                className="noInputField"
                value={formData.no9}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInputs">
              <input
                type="text"
                name="whoFrom9"
                className="whoFromInputField"
                value={formData.whoFrom9}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type9"
                className="typeInputField"
                value={formData.type9}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInputs">
              <input
                type="text"
                name="price9"
                className="priceInputField"
                value={formData.price9}
                onChange={handleFormChange}
              />
            </div>
            <div className="rowNum">10</div>
            <div className="dateInputs">
              <input
                type="text"
                name="date10"
                className="dateInputField"
                value={formData.date10}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInputs">
              <input
                type="text"
                name="no10"
                className="noInputField"
                value={formData.no10}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInputs">
              <input
                type="text"
                name="whoFrom10"
                className="whoFromInputField"
                value={formData.whoFrom10}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type10"
                className="typeInputField"
                value={formData.type10}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInputs">
              <input
                type="text"
                name="price10"
                className="priceInputField"
                value={formData.price10}
                onChange={handleFormChange}
              />
            </div>
            <div className="rowNum">11</div>
            <div className="dateInputs">
              <input
                type="text"
                name="date11"
                className="dateInputField"
                value={formData.date11}
                onChange={handleFormChange}
              />
            </div>
            <div className="noInputs">
              <input
                type="text"
                name="no11"
                className="noInputField"
                value={formData.no11}
                onChange={handleFormChange}
              />
            </div>
            <div className="whoFromInputs">
              <input
                type="text"
                name="whoFrom11"
                className="whoFromInputField"
                value={formData.whoFrom11}
                onChange={handleFormChange}
              />
            </div>

            <div className="typeInputs">
              <select
                name="type11"
                className="typeInputField"
                value={formData.type11}
                onChange={handleFormChange}
              >
                <option value="Bos">Seç</option>
                <option value="Egitim">Eğitim</option>
                <option value="Saglik">Sağlık</option>
                <option value="Gida">Gıda</option>
                <option value="Giyim">Giyim</option>
                <option value="Kira">Kira</option>
              </select>
            </div>
            <div className="priceInputs">
              <input
                type="text"
                name="price11"
                className="priceInputField"
                value={formData.price11}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="tableFoot-Page1">
            <div className="finalPriceText">TOPLAM..:</div>
            <div className="finalPrice" id="finalPriceLeft">0</div>
            <div className="finalPriceText">TOPLAM..:</div>
            <div className="finalPrice" id="finalPriceRight">0</div>
          </div>
        </div>
      </div>
      <button className="kaydet" onClick={handleSubmit}>
        Kaydet
      </button>
      <Link to="/page2"><button className="bitir" disabled={!isSaveClicked}> Bitir</button></Link>
    </form>
  );
}

export default Page1Table;
