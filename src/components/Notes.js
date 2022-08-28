import { RemoveIcon } from "./Icons";
const Notes = ({ data, id, removeNotes }) => {
    const clickHandler = (e) => {
        e.preventDefault();
        removeNotes(id)
    }
  return (
    <div className="row notes">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h5>{data.title}</h5>
            <p>{data.desc}</p>
            <button className="btn" onClick={clickHandler}>
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
