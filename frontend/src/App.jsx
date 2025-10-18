import Header from "./components/header";
import SideBar from "./components/SideBar";
import AppRouter from "./router/appRouter";

export default function App() {
  return (
    <div className="layout">
      <Header />
      <div className="workspace">
        <SideBar />
        <main>
          <AppRouter />
        </main>
      </div>
    </div>
  );
}
