import { useHistory } from "react-router";
import { useLocation } from "react-router";

export const Page1DetailA = () => {
  const {state} = useLocation();
  const history = useHistory();
  console.log(state);
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAです</h1>
      <br />
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
}