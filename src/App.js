import useStore from './status/store';
import './App.css';

const App = (props) => {
  const { isLogin, count, increase, toggleIsLogin, setCnt, clearCnt } =
      useStore();

  return (
      <>
          <div>
              <p>{"" + isLogin}</p>
              <button onClick={toggleIsLogin}>
                  <b>click!!!</b>
              </button>
          </div>
          <br></br>
          <div>
              <div>Now Count is {count}</div>
              <button onClick={increase}>+1</button>
              <button onClick={() => setCnt(100)}>set 100</button>
              <button onClick={clearCnt}>clear</button>
          </div>
      </>
  );
};

export default App;
