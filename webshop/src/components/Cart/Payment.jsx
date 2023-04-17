import React from 'react'

 


function Payment({sum}) {

  const pay = () => {
    const paymentUrl="https://igw-demo.every-pay.com/api/v4/payments/oneoff";
  
  const paymentData = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": sum,
      "order_reference": Math.random() * 9999999, //Math.random annab suvalise nr 
      "nonce": "a9b7f7e79" + Math.random() * 9999999 * new Date(),
      "timestamp": new Date(), // annab praeguse kuup2eva
      "customer_url": "https://webshop0101.web.app"
      };
  
    const paymentHeaders = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    };
  
    fetch(paymentUrl, {"method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders})
    .then(res => res.json()) 
    .then(json => window.location.href = json.payment_link) 
  }
  return (
    <button onClick={pay}>Pay</button>
  )
}

export default Payment