import { useSelector, useDispatch } from "react-redux";
import { setHomeData, setName, setAge, incrementCount } from "../../context/reducers/homeSlice";
import { useState } from "react";
import {Button, Layout, Row} from "antd";
import HomeHeroBanner from "./widgets/heroBanner";
import { useTheme } from "../../context/theme/ThemeContext";

const HomePage = () => {
  const dispatch = useDispatch();
  const{theme} = useTheme();
  const { homeData, count, name, age } = useSelector((state) => state.home);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  return   (
    <Layout style={{
      
      background:theme.background,
      padding: "20px 24px 24px" , minHeight: "100vh"}}>
     <HomeHeroBanner/>
    </Layout>
  );
  
};

export default HomePage;
