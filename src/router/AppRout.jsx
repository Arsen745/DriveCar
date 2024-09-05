import { Route, Routes} from 'react-router-dom'
import HomePages from '../pages/HomePages'
import AboutPages from '../pages/AboutPages'
import Admin from '../pages/Admin'

const rout = [
    {
        path: '/',
        component: <HomePages/>,
        key: 'home'
    },
    {
        path: '/about',
        component: <AboutPages/>,
        key: 'about'
    },
    {
        path: '/admin',
        component: <Admin/>,
        key: 'admin'
    }
    
]

const AppRout = () => {
  return (
    <Routes>
        {rout.map(el => (
            <Route path={el.path} element={el.component} key={el.key}/>
        ))}
    </Routes>
  )
}

export default AppRout