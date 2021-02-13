import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import UserDetail from './pages/UserDetail'
import EpisodeDetail from './pages/EpisodeDetail'
import DetailedUserHeader from './components/DetailedUserHeader'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/search">
        <Home />
      </Route>
      <Route exact path="*">
        <div>
          <DetailedUserHeader />
          <Switch>
            <Route exact path="/character/:id">
              <UserDetail />
            </Route>
            <Route exact path="/episode/:id">
              <EpisodeDetail />
            </Route>
            <Route exact path="*">
              <Redirect to="/search" />
            </Route>
          </Switch>
        </div>
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router
