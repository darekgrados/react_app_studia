import RootLayout from "./layouts/RootLayout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import NotFoundPage from "./pages/NotFoundPage";
import PeoplePage from "./pages/PeoplePage";

function App() {
  const menuItems = [
    { id: 1, label: 'Home', url: '/home', element: <Home /> },
    { id: 2, label: 'Laboratorium 1', url: '/laboratorium1', element: <Lab1 /> },
    { id: 3, label: 'Laboratorium 2', url: '/laboratorium2', element: <Lab2 /> },
    { id: 4, label: 'People', url: '/people/:id', element: <PeoplePage /> },
  ];

  return (
    <RootLayout items={menuItems}>
      <Routes>
        {menuItems.map((item) => (
          <Route key={item.id} path={item.url} element={item.element} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RootLayout>
  );
}


export default App;
