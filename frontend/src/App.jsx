import Header from "./components/Header";
import SideBar from "./components/SideBar";
import AppRouter from "./router/AppRouter";
import './styles/pages/layout.scss'

export default function App() {
  return (
    <>
      <Header />
      <div className="workspace">
        <SideBar />
        <main>
          <AppRouter />
        </main>
      </div>
    </>
  );
}
