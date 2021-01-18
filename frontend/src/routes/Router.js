import { Route, Switch } from 'react-router-dom';
import SearchScreen from '../screens/searchScreen/SearchScreen'
import ComparisonScreen from '../screens/comparisonScreen/ComparisonScreen'

const Router = () =>{

    return (
        <Switch>
            <Route exact path= '/'>
                <SearchScreen/>
            </Route>
            <Route exact path='/comparison'>
                <ComparisonScreen/>
            </Route>
        </Switch>
    );
}

export default Router