// const baseURL = 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=wyCbR5lOQSmtnWopRJweC3FIHDJbnH1NrjFKZaas'

const baseURL = 'https://api.nal.usda.gov/fdc/v1/foods/list?api_key=wyCbR5lOQSmtnWopRJweC3FIHDJbnH1NrjFKZaas'

const getData = () => {
    $.ajax({
      method: 'GET' ,
      url: baseURL

    }).then((data) => {
      console.log(data);
        
    }), (error) => {
      console.error(error)
    }
} 
  
  
  $(()=> {
    getData()
  })