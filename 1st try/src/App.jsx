import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <Navbar />
      <div className="pt-20 px-6 w-full mt-6">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">
          Hello, Dost! 👋
        </h1>
        <p className="text-lg text-black ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quod
          repellendus maiores nisi possimus quis? Quae quas earum voluptate
          architecto, sunt vel rerum eligendi officiis possimus id similique
          doloribus delectus nam fugit quaerat odio atque, neque consequuntur
          tenetur sequi sint enim. Ratione facilis inventore pariatur, corporis
          consequuntur minima et odit laborum amet autem voluptatibus assumenda
          facere natus tenetur perferendis repellat laudantium architecto labore
          aut, magnam praesentium! Nam molestias temporibus illum ut libero
          deserunt sapiente quaerat velit et nostrum voluptate reprehenderit
          dignissimos aperiam, ipsa mollitia deleniti vitae, aliquam repellendus
          ullam, odio sed. Atque odit voluptas hic similique nam illum,
          distinctio recusandae.
        </p>
      </div>
    </div>
  );
};

export default App;
