import RootLayout from "./layouts/RootLayout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3Page";
import Lab4 from "./pages/Lab4Page";
import NotFoundPage from "./pages/NotFoundPage";
import PeoplePage from "./pages/PeoplePage";
import AppContext from "./data/AppContext.jsx";
import AppReducer from "./data/AppReducer";
import { useReducer } from "react";
import { data } from "./data/module-data";
import Lab4Page from "./pages/Lab4Page.jsx";
import CreateForm from "./components/CreateForm.jsx";
//import EditForm from "./components/EditForm.jsx";

function App() {
  const menuItems = [
    { id: 1, label: "Home", url: "/home", element: <Home /> },
    { id: 2, label: "Laboratorium 1", url: "/laboratorium1", element: <Lab1 /> },
    { id: 3, label: "Laboratorium 2", url: "/laboratorium2/:id", element: <Lab2 /> },
    { id: 4, label: "Laboratorium 3", url: "/laboratorium3", element: <Lab3 /> },
    { id: 5, label: "Laboratorium 4", url: "/laboratorium4", element: <Lab4Page /> },
    { id: 6, label: "Lab4 Add", url: "/lab4/add", element: <CreateForm /> },
    //{ id: 7, label: "Lab4 Edit", url: "/lab4/edit", element: <EditForm /> },
    //{ id: 4, label: 'People', url: '/people/:id', element: <PeoplePage /> },
  ];

  const [state, appDispatch] = useReducer(AppReducer, data);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route key={item.id} path={item.url} element={item.element} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </AppContext.Provider>
  );
}

export default App;
