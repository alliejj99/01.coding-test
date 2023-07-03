import "./App.css";

function App() {
  const headArr = [];

  const returnValues = (num) => {
    let data = [];
    for (let j = 1; j <= 9; j++) {
      data.push(
        <p>
          {num} * {j} = {num * j}
        </p>
      );
    }
    return <div>{data}</div>;
  };

  const arrMult = () => {
    for (let i = 2; i <= 9; i++) {
      headArr.push(i);
    }
  };
  arrMult();
  return (
    <div className="app">
      {/* 1번 문제 - 계산기 */}
      <div className="calculator">
        <div className="value-area">
          <p>11</p>
        </div>

        <div className="contents-area">
          <ul className="button-area">
            <li>
              <button>c</button>
            </li>
            <li>
              <button>+/-</button>
            </li>
            <li>
              <button>%</button>
            </li>
            <li>
              <button>/</button>
            </li>
          </ul>

          <ul className="button-area">
            <li>
              <button>7</button>
            </li>
            <li>
              <button>8</button>
            </li>
            <li>
              <button>9</button>
            </li>
            <li>
              <button>*</button>
            </li>
          </ul>

          <ul className="button-area">
            <li>
              <button>4</button>
            </li>
            <li>
              <button>5</button>
            </li>
            <li>
              <button>6</button>
            </li>
            <li>
              <button>-</button>
            </li>
          </ul>

          <ul className="button-area">
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>+</button>
            </li>
          </ul>

          <ul className="button-area">
            <li className="w2">
              <button>0</button>
            </li>
            <li>
              <button>.</button>
            </li>
            <li>
              <button>=</button>
            </li>
          </ul>
        </div>
      </div>

      {/* 2번 문제 - 구구단 */}
      <div className="multiplication">
        {headArr.map((value, i) => (
          <div key={value}>
            <div>
              <p>{value} 단</p>
            </div>

            {returnValues(i + 2)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
