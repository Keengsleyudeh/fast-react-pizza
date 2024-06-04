import { useLoaderData } from "react-router-dom";
import {getMenu} from "../../services/apiRestaurant"
import MenuItem from "./MenuItem";

export async function loader() {
  const menu = await getMenu();
  return menu;
}

function Menu() {
  const menu = useLoaderData();
  console.log(menu)
  return (<ul className="divide-y divide-stone-200 px-4">
      {menu.map((pizza) => (<MenuItem pizza= {pizza} pizzaName= {pizza.name} key= {pizza.id} />))}
    </ul>
  )
}



export default Menu;
