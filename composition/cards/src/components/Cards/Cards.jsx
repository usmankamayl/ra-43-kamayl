export const Cards = ({img, children}) => {
  return (
    <div className="card" style={{width: "18rem",margin:"10% auto",}}>
      <img src={img} className="card-img-top" alt="photo" />
      {children}
    </div>
  );
};


