import { useLocation } from "react-router";

export const Page1DetailA = () => {
  const {state} = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailAです</h1>
    </div>
  );
}