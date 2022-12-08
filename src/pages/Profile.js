import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import CardProfile from "../component/CardProfile";
import "./Profile.css";

export default function Profile() {
  const [data, setData] = useState([]);
  const githubUsername = [
    "nabilahanas",
    "knimoni",
    "JuanRitonga", 
    "Septagung23"
  ];
  
  useEffect(()=>{
    const githubDataTemp = [];
    async function fetchData() {
      for(let i=0;i<githubUsername.length;i++){
        await axios
        .get("https://api.github.com/users/" + githubUsername[i])
        .then((res) => {
          githubDataTemp.push(res.data)
        })
        .catch((err) => {
          throw `gagal ${err.message}`; 
        });
      }
    }
  
    fetchData()
      .then(
        ()=> setData(githubDataTemp)
      )
      .catch(err=>alert(err));
  },[]);

    return (
      <>      
        <div className="Title">
          <h1 className="textTitle">Profil Kelompok</h1>
        </div>
        <div className="Profilelist">
       {data.map((item) => (
          <Fragment key={item.id}>
            <CardProfile
              img={item.avatar_url}
              username={item.login}
              email={item.email}
              name={item.name}
              bio={item.bio}
              company={item.company}
              location={item.location}
            />
          </Fragment>
        ))}
        </div>
      </>
    );
  }
