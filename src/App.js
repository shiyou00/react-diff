import React, {useState} from 'react';
import Wrap from "./Component/Wrap";
import Foo from "./Component/Foo";
import Bar from "./Component/Bar";

function App() {
  const [status,setStatus] = useState(true);

  const toggle = ()=>{
    setStatus(!status);
  }

  const s1 = (
    <div>
      <button onClick={toggle}>节点类型不同</button>
      {
        status ?
          (
            <Foo>
              <Wrap />
            </Foo>
          )
          :
          (
            <Bar>
              <Wrap />
            </Bar>
          )
      }
    </div>
  );

  const s2 = (
    <div>
      <button onClick={toggle}>子节点对比</button>
      {
        status?
          (
            <div>
              <Foo key="Foo" />
              <Bar key="Bar" />
            </div>
          ):
          (
            <div>
              <Foo key="Foo" />
              <Wrap key="Wrap" />
              <Bar key="Bar" />
            </div>
          )
      }
    </div>
  );

  return (
    <div className="App">
      {
        s2
      }
    </div>
  );
}

export default App;
