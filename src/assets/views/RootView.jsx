import { Outlet } from "react-router-dom";

const RootView = () => {
  return (
    <>
    <header>este es el header</header>
    <main className="container">
      <Outlet/>
    </main>
    <footer>este es el footer</footer>
    </>
  )
}
export default RootView;