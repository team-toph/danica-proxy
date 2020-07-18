import http from 'k6/http';
import { sleep, check } from 'k6';


export default function() {
  var arr = [];
  for (var id = 0; id < 1000000; id++) {
    let req1 = {
      method: 'GET',
      url: `http://localhost:4000/?id=${id}`,
    };
    let req2 = {
      method: 'GET',
      url: `http://localhost:4000/api/products/?id=${id}`,
    };
    arr.push(req1, req2);
  }

  let responses = http.batch(arr);
}