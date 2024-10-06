// fetch('https://dummyjson.com/products/1', {
//     method: 'PUT', //POST, PUT, DELETE
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Iphone 13',
//         price: '1500',
//         discountPercentage: 10.10,
//         ratings: '10/10',
//         category: 'bullshit'
//     })
// })
// .then (response => response.json())
// .then (data => console.log(data))
// .catch(error => console.log(error)) 

//ASYNC AWAIT

const getRandomChar = async () => {
  try {
      const response = await fetch('https://dragonball-api.com/api/characters');
      const json = await response.json();
      
      const rand1 = Math.floor(Math.random() * json.items.length)
      const rand2 = Math.floor(Math.random() * json.items.length)
      
      const character1 = json.items[rand1]
      const character2 = json.items[rand2]

      console.log(character1.name + " Power level: " + character1.maxKi);
      console.log(character2.name + " Power level: " + character2.maxKi);

      if(character1.maxKi < character2.maxKi){
        console.log(character2.name + " wins!");
      }
      else if(character1.maxKi == character2.maxKi){
        console.log("It's a tie");
      }
      else{
        console.log(character1.name + " wins!");
      }

      
  } catch (error) {
      console.log(error);
  }
};

getRandomChar()
  