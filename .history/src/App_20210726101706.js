
function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width="40" height="40" src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="chart">
            <img src="/img/cart.svg" width={18} height={18} alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" width={18} height={18} alt="" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakers">

          <div className="card">
            <img src="img/1.jpg" width={133} height={112} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardBottomPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" height={11} width={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="img/2.jpg" width={133} height={112} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardBottomPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" height={11} width={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="img/3.jpg" width={133} height={112} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardBottomPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" height={11} width={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="img/4.jpg" width={133} height={112} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardBottomPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" height={11} width={11} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
