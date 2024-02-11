import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor() { }

  getRandomMock() {
    return axios.get('http://localhost:4000/getCustomers');
  }

  deleteCustomer(email:string){
    return axios.post('http://localhost:4000/deleteCustomer', { email: email })
  }

  addCustomer(formData: any){
    return axios.post('http://localhost:4000/addCustomer', { formData: formData })
  }

}
