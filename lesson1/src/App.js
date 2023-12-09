import { Component, Component2 } from './Component';
import Button from './Button';
import Header from './Header';


function App() {
  return (
    <div>
      <h1>
        <Header/>
        Welcome
        <Component/>
        <Component2/>
        <Button button={'Нажми на меня'}/>
        <Button button={'OK'}/>
        <Button button={'Отмена'}/>
      </h1>
    </div>
  );
}


export default App;
