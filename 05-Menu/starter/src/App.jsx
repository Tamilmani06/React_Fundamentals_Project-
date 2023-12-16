import Title from "./Title";
import menu from './data';
import {useState} from 'react';
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all",  ...new Set( menu.map((item)=>item.category))]
const App = () => {
  const [menuItem,setMenuItem]= useState(menu);
  const [categories,SetCategories]= useState(allCategories)
  const filterItems= (category)=>{

    if(category==="all"){
      return setMenuItem(menu)
    }
    const newItems= menu.filter((item)=> item.category === category
    )
    console.log(newItems)
    setMenuItem(newItems)
  }


  return <main>
    <section className="menu">
      <Title text="Our Menu"/>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItem}/>
    </section>
  </main>
};
export default App;
