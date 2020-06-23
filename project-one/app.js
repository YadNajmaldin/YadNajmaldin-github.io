// The FoodData Central API provides access to FoodData Central (FDC)
const baseURL = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=wyCbR5lOQSmtnWopRJweC3FIHDJbnH1NrjFKZaas'



const queryURL = baseURL +"&query=" + name; 

const getData = () => {
    $.ajax({
      method: 'GET' ,
      url: queryURL,
    }).done((data)=>{
        for (let i=0 ; i <data.foods.length; i++){
           
           for(let j=0 ; j < data.foods[i].foodNutrients.length ; j++){
             let divI = $(`<div> -  ${data.foods[i].foodNutrients[j].nutrientName} : ${data.foods[i].foodNutrients[j].nutrientNumber}</div> `)
             $('.info').append(divI);
               
           }
        
        }
        
    }) 
}
       



  // getting data after submitiing input by EventListener
  $(()=> {
    $('form').on('submit', (event) => {
        event.preventDefault()
        name = $('input[type="text"]').val()
        getData()
// clearing input after submit
        $('input[type="text"]').val('')
    })
  });
