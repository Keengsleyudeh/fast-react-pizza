import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const username = useSelector(state=>state.user.username)
  return (
    <div className="text-xl text-center px-4 font-semibold mb-8 sm: my-16">
      <h1 className="mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500 text-center my-10">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === ''? <CreateUser/>: <Button to='/menu' type="primary">Continue ordering, {username}</Button>}
    </div>
  );
}

export default Home;
        
