import { useSelector, useDispatch } from "react-redux";
import { setHomeData, setName, setAge, incrementCount } from "../../context/reducers/homeSlice";
import { useState } from "react";
import {Button} from "antd";

const HomePage = () => {
  const dispatch = useDispatch();
  const { homeData, count, name, age } = useSelector((state) => state.home);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  return (
    <div>
      <h1>Home Page</h1>
      <p>Data: {homeData || "No data yet"}</p>
      <button onClick={() => dispatch(setHomeData("New Home Data"))}>
        Set Home Data
      </button>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(incrementCount())}>Increment Count</button>
      {/* Displaying and Updating Name */}
      <p>Name: {name}</p>
      <input
        type="text"
        placeholder="Enter new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <Button onClick={() => dispatch(setName(newName))}>Set Name</Button>

      {/* Displaying and Updating Age */}
      <p>Age: {age}</p>
      <input
        type="number"
        placeholder="Enter new age"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button onClick={() => dispatch(setAge(Number(newAge)))}>Set Age</button>
    </div>
  );
};

export default HomePage;
