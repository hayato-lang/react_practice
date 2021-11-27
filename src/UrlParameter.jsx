import { useLocation } from "react-router";
import { useParams } from "react-router";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメーターは{ id }です</p>
      <p>クエリパラメーターは{ query.get("name") }です</p>
    </div>
  );
}