const CreateNote = () => {
  return (
    <div className="container createNote">
      <div className="card">
        <div className="card-body">
          <form className="">
            <input className="form-control" placeholder="Title..." />
            <textarea className="form-control" placeholder="Description..." />
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 plus-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
