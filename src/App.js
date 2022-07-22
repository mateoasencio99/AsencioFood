import { useEffect, useState } from "react";
import './App.css';
import Header from './Components/Header'
import MenuContainer from './Components/MenuContainer'
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer'
import MenuCard from './Components/MenuCard'
import ItemCard from './Components/ItemCard'
import { display, flexbox, style } from "@mui/system";
import DebitCard from "./Components/DebitCard";
import CartItem from "./Components/CartItem";
import { actionType } from "./Components/reducer";
import { useStateValue } from "./Components/StateProvider";


function App() {
  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    function dishItemContainerActive(){

    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

      function setMenuCardActive() {
        menuCard.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
      }

      
    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, []);

  return (
    <div className="App">
    <Header/>

    <main>
        <div className="mainContainer">
        <div className='banner'>
            <BannerName name={"Jeremy"} discount={"20"} more={"#"}/>
        </div>
        <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"}/>
            </div>
            <div className='rowContainer'>
              <div style={{display: 'flex'}}>
                <MenuCard  imgSrc={'https://i.pinimg.com/736x/29/b6/ac/29b6aca5bfa31a1d4855fadf83b7b438.jpg'} name={'Burger'} />
                <MenuCard imgSrc={'https://us.123rf.com/450wm/helloweenn/helloweenn1607/helloweenn160700101/59971791-pizza-de-colorido-icono-ilustraci%C3%B3n-del-vector-en-estilo-de-dibujos-animados.jpg'} name={'Pizza'} />
                <MenuCard imgSrc={'https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-hot-dog-icon-cartoon-style-png-image_1922782.jpg'} name={'Hotdog'} />
                <MenuCard imgSrc={'https://i.pinimg.com/736x/80/26/81/802681cf42cde2acef95b0636ed75888.jpg'} name={'Taco'} />
              </div>
            </div>
            <div className='dishItemContainer  dishItemContainerBurguer'>
              <ItemCard
                imgSrc={'https://previews.123rf.com/images/koya79/koya791503/koya79150300435/37385593-hamburguesa-de-comida-r%C3%A1pida-papas-fritas-y-refresco-3d-ilustraci%C3%B3n.jpg'}
                name={'Burger Bistro'}
                ratings={5}
                price={'14'}
              />
              <ItemCard
                imgSrc={'https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Stacker-Triple.png'}
                name={'Sassy Burger'}
                ratings={5}
                price={'12'}
              />
              <ItemCard
                imgSrc={'https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Doble-Jamon-y-Queso-XL.png'}
                name={'Euphoria Burger'}
                ratings={4}
                price={'12'}
              />
              <ItemCard
                imgSrc={'https://s3.eu-central-1.amazonaws.com/www.burgerking.com.mx/wp-content/uploads/sites/3/2021/02/24092007/1200x800_11_BaconKing-1-1.png'}
                name={'Bacon Burger'}
                ratings={5}
                price={'11'}
              />
              <ItemCard
                imgSrc={'https://carta.menu/storage/media/dishes_main/1827378/image.jpeg'}
                name={'Simple Burger'}
                ratings={4}
                price={'9.5'}
              />
              <ItemCard
                imgSrc={'https://carta.menu/storage/media/dishes_main/1827378/image.jpeg'}
                name={'Simple Burger'}
                ratings={5}
                price={'9.5'}
              />
            </div>
        </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
        
        <div className="cartCheckOutContainer">
          <div className="cartContainer">
            <SubMenuContainer name={"Carts Item"}/>
            <div className="cartItems">
              <CartItem name={'Sassy Burger'}
                imgSrc={'https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Stacker-Triple.png'}
                qty={'1'}
                price={'14'}
              />
              <CartItem name={'Euphoria Burger'}
                imgSrc={'https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Doble-Jamon-y-Queso-XL.png'}
                qty={'2'}
                price={'24'}
              />
            
          <div className="totalSection">
            <h3>Total</h3>
            <p>
              <span>$ 36.00</span>
            </p>
          </div>
          <button className="checkOut">Check Out</button>
          </div>
          </div>
        </div>
        
        
        </div>
    </main>


    <div className="leftMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<HomeRounded />}  isHome/>
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Chat />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
        </ul>
      </div>
      
    </div>
  );
}

export default App;
