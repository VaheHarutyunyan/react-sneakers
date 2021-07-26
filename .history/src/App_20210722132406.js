
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
        <div className="card">
          <img src="img/1.jpg" width={133} height={112} alt="" />
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="cardBottom">
            <div>
              <span></span>
              <b></b>
            </div>
            <button>
              <img src="/img/plus.svg" alt="" height={11} width={11} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
