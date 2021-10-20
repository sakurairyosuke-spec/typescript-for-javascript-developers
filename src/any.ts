import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url)
  .then(function (response) {
    interface article{
        id: number;
        title: string;
        discription: string;
    }
    let data: article[];
    data = response.data;
    console.log(data);
})