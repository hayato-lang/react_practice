import { Link } from "react-router-dom"

export const Page404 = () => {
  return (
    <div>
      <h1>ページが存在しない！ハゲタコ！！</h1>
      <Link to="/">戻れハゲタコ</Link>
    </div>
  );
}