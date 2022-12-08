import "./CardProfile.css";

export default function CardSmall({ name, username, img, email, bio, company, location}) {
  return (
    <div className="card">
      <img src={img} alt="" className="avatar" />
      <div className="description">
        <div>
          <p id="name">{name}</p>
          <p id="username">Github: {username}</p>
          <p id="email">Email: {email}</p>
          <p id="bio">Bio: {bio}</p>
          <p id="company">Company: {company}</p>
          <p id="location">Location: {location}</p>
        </div>
      </div>
    </div>
  );
}
