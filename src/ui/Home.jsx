import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="text-xl text-center px-4 font-semibold mb-8 sm: my-16">
      <h1 className="mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500 text-center my-10">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser/>
    </div>
  );
}

export default Home;
        
