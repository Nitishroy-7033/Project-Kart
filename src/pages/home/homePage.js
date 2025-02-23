import { useSelector, useDispatch } from "react-redux";
import { setHomeData, setName, setAge, incrementCount } from "../../context/reducers/homeSlice";
import { useState } from "react";
import {Button, Layout, Row} from "antd";

const HomePage = () => {
  const dispatch = useDispatch();
  const { homeData, count, name, age } = useSelector((state) => state.home);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  return   (
    <Layout style={{ padding: "0 24px 24px" , minHeight: "100vh"}}>
      <h1>Home Page</h1>
      <h2>Home Data: {homeData}</h2>
      <h2>Count: {count}</h2>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <Row>
        <Button
          type="primary"
          onClick={() => dispatch(setHomeData("New Home Data"))}
        >
          Set Home Data
        </Button>
        <Button type="primary" onClick={() => dispatch(incrementCount())}>
          Increment Count
        </Button>
        <Button type="primary" onClick={() => dispatch(setName(newName))}>
          Set Name
        </Button>
        <Button type="primary" onClick={() => dispatch(setAge(newAge))}>
          Set Age
        </Button>
      </Row>
      <Row>
        <input
          type="text"
          placeholder="Enter new name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter new age"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
        />
      </Row>
    </Layout>
  );
  
};

export default HomePage;
