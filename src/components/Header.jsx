import vite from '/vite.svg'
export default function Header() {
  return (
    <header>
    <h3>Result!!!!</h3>
    <img src={vite} alt="" />
    <span>Time: {new Date().toLocaleTimeString()}</span>
  </header>
  )
}