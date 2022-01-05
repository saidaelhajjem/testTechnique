import { Select } from 'antd';
import 'antd/dist/antd.css';
import { useState } from "react";
import "./CountrieView.scss";
import { countriesService } from "../../_services/countrieService";
const { Option } = Select;
const provinceData = ['Africa', 'Americas','Asia','Europe', 'Oceania'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

export default function CountrieView (){
    const [cities, setCities] = useState(cityData[provinceData[0]]);
    const [countries, setCountries] = useState();
    const [update, setUpdated] = useState(false);
    const [pays, setPays] = useState(false);
    const [details,setDetails] = useState();


    const get_countries = (data) => {
        countriesService.get_countries(data).then((response) => {
          setCountries(response);
          setUpdated(true);
        });
      };



  
    const handleProvinceChange = value => {
      setCities(cityData[value]);
      get_countries(value);
    };
  
    const handlePaysChange = value => {
     setDetails(countries[value]);
     setPays(true)
    };
  return(
      <>
      <div className="global">
      <div className="continent">
      <label>Continent</label>
     <Select  placeholder="Entrer" style={{ width: 120 }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      </div>

      {update ? (  <div className="pays"> <label>Pays</label> <Select style={{ width: 120 }} placeholder="Entrer"  onChange={handlePaysChange} >
        {countries.map((city,index) => (
          <Option value={city.obj}  key={index}>{city.name}</Option>
        ))}
      </Select> </div>):null}



      </div>

      {pays?(
    <div className="blocdetails">
        <img className="image" src={details.flag} />
        <div className="blcInfo" >
            <div className="info"><h3>Capital :</h3><p>{details.capital}</p></div>
            <div className="info"><h3>Population :</h3><p>{details.population}</p></div>
            <div className="info"><h3>Devise :</h3><p>{details.currencies[0].name}</p></div>
            <div className="info"><h3>Langue :</h3><p>{details.languages[0].name}</p></div>
       
         
 
        </div>
    </div>
):null}

      </>
  )
}