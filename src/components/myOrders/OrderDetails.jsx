import React from "react";
import { Container } from "react-bootstrap";

function OrderDetails() {
 
      return( 
        <Container>
             <div className='container d-flex align-items-center justify-content-center' style={{ paddingTop:'80px'}}>
                <div className='row'>
                    <div className='text-center'>
                        <h1 className='mb-0 text-black fw-bold'>ORDER DETAILS</h1>
                        <div>
                        <h2 className="mt-5">SHIPPING</h2>
                        <p>Address 32adfs 12sa</p>
                        </div>
                        <div>
                        <h2 className="mt-5">CONTACT</h2>
                        <p>Name Stuart</p>
                        <p>Phone 32142134</p>
                        </div>
                        <div>                   
                        <h2 className="mt-5">STATUS</h2>
                        <p>Order Staus Processing</p>
                        <p>Placed at 10-12-2023</p>
                        <p>Delivered at 10-12-2023</p>
                        </div>
                        <div>
                        <h2 className="mt-5">PAYMENT</h2>
                        <p>Payment Method COD</p>
                        <p>Payment Reference #314321432</p>
                        <p>Paid At 10-12-2023</p>
                        </div>
                        <div>
                        <h2 className="mt-5">AMOUNT</h2>
                        <p>Items Total $2132</p>
                        <p>Shipping Charges $200</p>
                        <p>Tax $232</p>
                        <p>Total Amount $2364</p>
                        </div>
                        </div>
                         <h3 className="pt-5">Ordered Items</h3>
                        <table  className="table table-secondary">
                        <thead>
                            <tr>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
           
                        <tr>
                        <td>Cheese Burger</td>
                        <td>12x232</td>
                        </tr>
                        <tr>
                        <td>Veg Cheese Burger</td>
                        <td>10x500</td>
                        </tr>
                        <tr>
                        <td>Burger Fries</td>
                        <td>10x300</td>
                        </tr>
                        <tr>
                        <td>Sub Total</td>
                        <td>$2132</td>
                        </tr>
                        </tbody>
                        
                        </table>
                       
                        </div>
                        </div>
        </Container> 
      )
}
export default OrderDetails;
