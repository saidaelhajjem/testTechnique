export const countriesService = {
    get_countries
   };
   const { REACT_APP_API_URL } = process.env;
  
   
   function get_countries(continent) {
     const requestOptions = {
       method: "GET",
       headers: { "Content-Type": "application/json" },
     };
     return fetch(`${REACT_APP_API_URL}/region/${continent}`, requestOptions)
     .then(handleResponse)
       .then((countries) => {
         return countries;
       });
   }
 
   function handleResponse(response) {
     return response.text().then((text) => {
       const data = text && JSON.parse(text);
       if (!response.ok) {
         const error = (data && data.message) || response.statusText;
         return Promise.reject(error);
       }
       return data;
     });
   }
  
   