import { Home } from 'Pages';
import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RoutePaths from './RoutePath';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={RoutePaths.Home} element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
