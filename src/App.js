import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages_practice/Home'
// import About from './pages_practice/About'
// import Contact from './pages_practice/Contact'
import ProductList from './pages_practice/ProductList'
import Login from './pages_practice/Login'
import NotFoundPage from './pages_practice/NotFoundPage'
import ProductDetail from './pages_practice/ProductDetail'

import ProductListQs from './pages_practice/ProductListQs'
import ProductDetailQs from './pages_practice/ProductDetailQs'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <div>
          <Link to="/">首頁</Link>
          <br />
          <Link to="/product-list">產品清單</Link>
          <br />
          <Link to="/product-list-qs">產品清單(Query String)</Link>
          <br />
          <Link to="/login">登入</Link>
        </div>
        <Switch>
          <Route path="/product-list">
            <ProductList />
          </Route>
          <Route path="/product-detail/:id?">
            <ProductDetail />
          </Route>
          <Route path="/product-list-qs">
            <ProductListQs />
          </Route>
          <Route path="/product-detail-qs">
            <ProductDetailQs />
          </Route>
          <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
