import * as React from "react";
import './Table.css'

export default function Table() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch('https://reqres.in/api/users/',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },body:JSON.stringify({
        
          "page": 1,
          "per_page": 6,
          "total": 12,
          "total_pages": 2,
          "data": [
              {
                  "id": 1,
                  "email": "Co-Founder/CEO",
                  "first_name": "George",
                  "avatar": "https://reqres.in/img/faces/1-image.jpg"
              },
              {
                  "id": 2,
                  "email": "Co-Founder/CTO",
                  "first_name": "Janet",
                  "avatar": "https://reqres.in/img/faces/2-image.jpg"
              },
              {
                  "id": 3,
                  "email": "Manager,Business Relations",
                  "first_name": "Emma",
                  "avatar": "https://reqres.in/img/faces/3-image.jpg"
              },
              {
                  "id": 4,
                  "email": "Font-end Developer",
                  "first_name": "Eve",
                  "avatar": "https://reqres.in/img/faces/4-image.jpg"
              },
              {
                  "id": 5,
                  "email": "Designer",
                  "first_name": "Charles",
                  "avatar": "https://reqres.in/img/faces/5-image.jpg"
              },
              {
                  "id": 6,
                  "email": "Director,Product Development",
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
    });
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="tablecon">
        <div className="meetcon">
      <h2 className="tin">Meet our leadership</h2>
      <p >Libero fames augue nisi,quis. la ac elit odio vitae elementum enim vitae ullaacorpper suspensisse, Vivamus fringilla</p>
      </div>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div className="infocon" key={user.id}>
                <img key={user.avatar} src={user.avatar} />
                <div>
                  <div>{user.first_name}</div>
                  <div className="jobl">{user.email}</div>
                </div>                             
              </div>
            );
          })}          
      </div>
    </div>
    
  );
}
