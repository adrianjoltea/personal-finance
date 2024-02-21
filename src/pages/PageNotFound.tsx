import { useMoveBack } from "../hooks/useMoveBack";
export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="page-not-found-container">
        <h3>There seems to be a problem</h3>
        <button onClick={useMoveBack()}>&larr;</button>
      </div>
    </div>
  );
}
