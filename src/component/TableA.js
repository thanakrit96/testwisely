import * as React from "react";
import './TableA.css'
import { SiTwitter,SiLinkedin } from "react-icons/si";

export default function Table() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch('https://reqres.in/api/users/',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "page": 1,
          "per_page": 6,
          "total": 12,
          "total_pages": 2,
          "data": [
              {
                  "id": 1,
                  "email": "Copywriter",
                  "first_name": "George",
                  "avatar": "https://reqres.in/img/faces/1-image.jpg"
              },
              {
                  "id": 2,
                  "email": "Senior Designer",
                  "first_name": "Janet",
                  "avatar": "https://reqres.in/img/faces/2-image.jpg"
              },
              {
                  "id": 3,
                  "email": "Manager,Business Relations",
                  "first_name": "Principal Designer",
                  "avatar": "https://reqres.in/img/faces/3-image.jpg"
              },
              {
                  "id": 4,
                  "email": "VIP,User Exoeriance",
                  "first_name": "Eve",
                  "avatar": "https://reqres.in/img/faces/4-image.jpg"
              },
              {
                  "id": 5,
                  "email": "VP,Human Resources",
                  "first_name": "Charles",
                  "avatar": "https://reqres.in/img/faces/5-image.jpg"
              },
              {
                  "id": 6,
                  "email": "Senioer Font-end Developer",
                  "first_name": "Tracey",
                  "avatar": "https://reqres.in/img/faces/6-image.jpg"
              }
          ],
          "support": {
              "url": "https://reqres.in/#support-heading",
              "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
          },
          "updatedAt": "2023-01-30T04:07:16.190Z"
      })
    })
      .then(function (response){
        return response.json()        
    })
    console.log(res) 
     res.data.sort(compare) 
     console.log(res) 
    setUsers(res.data)
  };
  const compare = ( a, b )=> {
    if ( a.first_name < b.first_name ){
      return -1;
    }
    if ( a.first_name > b.first_name ){
      return 1;
    }
    return 0;
  }
  

  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="tablecons">
        <div className="meetcons">
      <h2 className="tins">Meet our team</h2>
      <p >Onare sagittis,suspendisse in hendrerit quis.sed dui aliquet lectus sit pretium egetas vel mattis neque.</p>
      </div>
      <div className="flexs">
        {users.length &&
          users.map((user) => {
            return (
              <div className="infocons" key={user.id}>
                <img key={user.avatar} src={user.avatar} />
                <div className="twli">
                  <div className="name">{user.first_name}</div>
                  <div className="jobM">{user.email}</div>
                     
                     <div className="tw">
                      <div className="twii"><SiTwitter/></div>
                      <div className="liin"><SiLinkedin/></div>
                     </div>
                </div>                              
              </div>
            );
          })}          
      </div>
    </div>
    
  );
}
