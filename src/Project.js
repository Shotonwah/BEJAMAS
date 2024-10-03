import React from 'react';
import './Project.css';
import land from "../src/Land.jpg";
import ple from "../src/Amuse.jpg";
import pel from "../src/Light.jpg";
import lep from "../src/Tower.jpg";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { ArrowUpOutlined } from '@ant-design/icons/lib/icons';
import { ArrowDownOutlined } from '@ant-design/icons/lib/icons';
import { DownOutlined } from '@ant-design/icons/lib/icons';
import lon from "../src/Londoncity.jpg";
import foo from "../src/Foodwithwine.jpg";
import coo from "../src/Cookingpotatoe.jpg";
import fru from "../src/Fruits.jpg";
import { Pagination } from 'antd';
import { Image } from 'antd';
// import { EyeInvisibleOutlined } from '@ant-design/icons';

 function Bejamas () {
    return(
        <>
     <div className='container'>
        <div className='store'>
           <h4 className='beja'>BEJAMAS-</h4>
              <div className='Shopping'>
                <ShoppingCartOutlined />
              </div>
     </div>
      <div className='landmark'>
           <h1 className='land'>Landmark Bridge Imagess</h1>
              <button className='cart'>ADD TO CART</button>
     </div>
     <div>
       <img src={land} alt='land' className='bridge'/>
          <a href='#1' className='photo'>photo of the day</a>
     </div>
    <div className='control'>
        <div className='flex'>
           <h3 className='About'>About the Landmark Bridge Image<br/>
             </h3>
               <h3 className='people'>People also buy</h3>
        </div>
             <h2 className='blur'>landmark</h2>
  <div className='details'>
       <p className='paragraph'>So how did the classical latin become so incoherent? According to McClintock, a 15th century<br/> 
            typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to<br/>
            mockup various fonts for a type specimen book.So how did the classical Latin becomne so<br/>
            incoherent? According to McClintock, a 15th century typesetter likely scrambled part of<br/>
            Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type<br/>
            specimen book.So how did the classical  Latin becomne so incoherent? According to McClintock. </p>
    <div className='display'>
        <div class="contain">
            <Image src={ple} alt='ple' width={150} height={160} className='jpg' />
                <div class="overlay"></div>
                    <div class="button"><a href="#a"> CART <ShoppingCartOutlined /></a></div>
        </div>
        <div class="contain">
            <Image src={pel} alt='pel' width={150} height={160} className='jpg' />
                <div class="overlay"></div>
                   <div class="button"><a href="#a"> CART <ShoppingCartOutlined /></a></div>
        </div>
        <div class="contain">
            <Image src={lep} alt='lep' width={150} height={160} className='jpg' />
                <div class="overlay"></div>
                   <div class="button"><a href="#a"> CART <ShoppingCartOutlined /></a></div>
        </div>
    </div>
 </div> 
        <div className='left'>
            <h3 className='detail'>Details</h3>
              <p className='size'>
                    size: 1020 * 1020 pixel<br/>
                    size: 15mb
               </p>
        </div>
        </div>
        <hr/>
                <div className='arrow'>
                    <h2 className='photography'>Photography/<span className='premium'>Premium Photos</span></h2>
                      <div className='sortby'>
                        <div className='outline'>
                          <ArrowUpOutlined />
                            <ArrowDownOutlined />
                          </div>
                            <p>Sort by:</p>
                        <div className='price'>
                          <p>price</p>
                         <div className='outline'>
                             <DownOutlined />
                         </div>
                          </div>
                      </div>
                </div>
    <div className='Allborder'>
        <h4 className='category'>Category</h4>
           <div className='border'>
              <div className='source'>
                 <div className='bestprice'>
                    <div class="containe">
                       <Image src={lon} alt='lon' width={230} height={250} className='image' />
                          <button className='bestp'>Best price</button>
                              <div class="addtocart"><a href="#a">ADD TO CART</a></div>
                              <div className='nav'>
                                <p className='grey'>city</p>
                                  <h4  className='bold'>London City</h4>
                                    <p className='amount'>$10</p>
                              </div>
                     </div>
                              
                </div>
                <div className='bestprice'>
                     <div class="containe">
                         <Image src={foo} alt='foo' width={230} height={250} className='image' />
                            <div class="addtocart"><a href="#a">ADD TO CART</a></div>
                               <div className='nav'>
                                  <p className='grey'>food</p>
                                    <h4  className='bold'>Food With Wine</h4>
                                      <p className='amount'>$70</p>
                               </div>
                     </div>
                           
              </div>
              <div className='bestprice'>
                    <div className="containe">
                         <Image src={coo} alt='coo' width={230} height={250}  className='image' />
                              <div class="addtocart"><a href="#a">ADD TO CART</a></div>
                                 <div className='nav'>
                                   <p className='grey'>food</p>
                                     <h4  className='bold'>Cooking Potatoes</h4>
                                       <p className='amount'>$30.5</p>
                            </div>
                     </div>
                           
              </div>
            </div>
            <div className='source2'>
               <div className='bestprice'>
                    <div class="containe">
                         <Image src={fru} alt='fru' width={230} height={250} className='image' />
                            <div class="addtocart"><a href="#a">ADD TO CART</a></div>
                            <div className='nav'>
                                <p className='grey'>food</p>
                                  <h4  className='bold'>Citrus Slices</h4>
                                     <p className='amount'>$10</p>
                            </div>
                    </div>
                           
                </div>
                <div className='bestprice'>
                      <div className='containe'>
                        <Image src={land} alt='dan' width={230} height={250} className='image' />
                          <button className='bestp'>Best price</button>
                            <div class="addtocart"><a href="#a">ADD TO CART</a></div>
                              <div className='nav'>
                                <p className='grey'>landmark</p>
                                  <h4  className='bold'>Landmark Bridge Image</h4>
                                   <p className='amount'>$22.5</p>
                              </div>
                     </div>
                            
                </div>
              <div className='bestprice'>
                    <div class="containe">
                        <Image src={ple} alt='lks' width={230} height={250} className='image' />
                           <button className='bestp'>Best price</button>
                             <div class="addtocart"><a href="#a">ADD TO CART</a></div>
                             <div className='nav'>
                               <p className='grey'>landmark</p>
                                 <h4 className='bold'>Amusement Park</h4>
                                  <p className='amount'>$60</p>
                            </div>
                    </div> 
                              
              </div>
              </div>
            </div>
                 <div className='pagination'>
                   <Pagination defaultCurrent={1} total={100} />
                 </div>
        </div><br/>
               
        <div className='categories'>
          <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>People</span></p><br/>
           <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>Premium</span></p><br/>
            <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>Premium</span></p><br/>
             <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>Pet</span></p><br/>
              <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>Food</span></p><br/>
               <p className='letter'><input type='checkbox' className='checkbox'/><span className='beside'>Landmark</span></p><br/>
                <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>City</span></p><br/>
                  <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>nature</span></p><br/>
        </div>
                <h4 className='category1'>Price Range</h4>
        <div className='categories1'>
            <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>Less Than $20</span></p><br/>
              <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>$20-$100</span></p><br/>
                <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>$100-$200</span></p><br/>
                  <p className='letter'><input type='checkbox' className='checkbox' /><span className='beside'>More Than $200</span></p><br/>
        </div>  
    </div> 
           
        </>
    );
}

 export default Bejamas;


  
