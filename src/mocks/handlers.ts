import {  http,HttpResponse } from 'msw'


const allCustomers = [
  {
      id:1,
      name: "ahmet",
      surname: "yılmaz",
      email:"ahmetyilmaz@gmail.com",
      phone: "023 568 4556",
      age: "28",
      post: "UX Research",
      joiningDate: "June 20, 2015",
      salary: "$26837.0",
      address:"Istanbul"
  },
  {
      id:2,
      name: "kemal",
      surname: "yiğitbay",
      email:"kemalygtbay@gmail.com",
      phone: "023 568 4556",
      age: "23",
      post: "UX Research",
      joiningDate: "October 20, 2015",
      salary: "$22000.0",
      address:"Istanbul"
  },
  {
      id:3,
      name: "selim",
      surname: "cebeci",
      email:"selimcebeci@gmail.com",
      phone: "023 323 4556",
      age: "18",
      post: "UX Research",
      joiningDate: "March 20, 2015",
      salary: "$2837.0",
      address:"Istanbul"
  },
  {
      id:4,
      name: "firdevs",
      surname: "yıldırım",
      email:"firdevsyldrm@gmail.com",
      phone: "023 568 4556",
      age: "35",
      post: "UX Research",
      joiningDate: "November 20, 2015",
      salary: "$40000.0",
      address:"Istanbul"
  },
  {
      id:5,
      name: "çiçek",
      surname: "demir",
      email:"cicekdmr",
      phone: "023 568 4556",
      age: "29",
      post: "UX Research",
      joiningDate: "December 20, 2015",
      salary: "$32000.0",
      address:"Istanbul"
  },
  {
      id:6,
      name: "ayşe",
      surname: "ışık",
      email:"ayseisik@gmail.com",
      phone: "023 568 4556",
      age: "20",
      post: "UX Research",
      joiningDate: "January 20, 2015",
      salary: "$26000.0",
      address:"Istanbul"
  },
  {
      id:7,
      name: "hüseyin",
      surname: "aydın",
      email:"huseyinaydin@gmail.com",
      phone: "023 568 4556",
      age: "40",
      post: "UX Research",
      joiningDate: "June 20, 2015",
      salary: "$50000.0",
      address:"Istanbul"
  },
  {
      id:8,
      name: "arif",
      surname: "ışık",
      email:"arifisik@gmail.com",
      phone: "023 568 4556",
      age: "36",
      post: "UX Research",
      joiningDate: "April 20, 2015",
      salary: "$30000.0",
      address:"Istanbul"
  },

];

export const handlers = [

http.get('/getCustomers',()=>{
  console.log("post islemi calıstı")

  const customerData = allCustomers.map(customer => ({
    id:customer.id,
    name: customer.name,
    surname:customer.surname,
    email:customer.email,
    phone:customer.phone,
    age: customer.age,
    post:customer.post,
    joiningDate:customer.joiningDate,
    salary:customer.salary,
    address:customer.address

}));
return HttpResponse.json(Array.from(customerData))

})

]
