import React, { useState } from 'react'

function Home() {
  const [data, setData] = useState([
    {
      img: "./mars.png", groupName: "f1-1779", vaqt: "17:30", talabalar: "6", teacher: "Bekzod Mirzaaliyev", kuni: "JUFT", rangi: "red"
    },
    {
      img: "./mars.png", groupName: "f2-1703", vaqt: "18:40", talabalar: "9", teacher: "Bekzod Mirzaaliyev", kuni: "JUFT", rangi: "red"
    },
    {
      img: "./mars.png", groupName: "front-1010", vaqt: "10:10", talabalar: "12", teacher: "Bekzod Mirzaaliyev", kuni: "JUFT", rangi: "red"
    },
    {
      img: "./mars.png", groupName: "front-1012", vaqt: "10:10", talabalar: "12", teacher: "Bekzod Mirzaaliyev", kuni: "JUFT", rangi: "red"
    },
    {
      img: "./mars.png", groupName: "front-908", vaqt: "15:10", talabalar: "12", teacher: "Bekzod Mirzaaliyev", kuni: "JUFT", rangi: "red"
    },
    {
      img: "./mars.png", groupName: "front-998", vaqt: "15:10", talabalar: "7", teacher: "Bekzod Mirzaaliyev", kuni: "JUFT", rangi: "red"
    },
    {
      img: "./mars.png", groupName: "INPR-1021", vaqt: "09:00", talabalar: "7", teacher: "Bekzod Mirzaaliyev", kuni: "JUFT", rangi: "red"
    },
    {
      img: "./mars.png", groupName: "INPR-1641", vaqt: "17:10", talabalar: "9", teacher: "Bekzod Mirzaaliyev", kuni: "JUFT", rangi: "red"
    },
    {
      img: "./mars.png", groupName: "INPR-961", vaqt: "17:30", talabalar: "1", teacher: "Bekzod Mirzaaliyev", kuni: "JUFT", rangi: "red"
    },
    {
      img: "./mars.png", groupName: "INPR-961", vaqt: "17:30", talabalar: "1", teacher: "Bekzod Mirzaaliyev", kuni: "JUFT", rangi: "red"
    },
    

  ])
  return (
    <div className='flex flex-wrap gap-5'>
      {
        data.map((item, index) => (
          <div className="card bg-base-100 min-w-56 flex-1 shadow-xl rounded-lg">
            <div className={`bg-red-600 text-white w-full h-44 flex flex-col items-center font-bold justify-center gap-4`}>
              <img
                src={item.img}
                alt={item.groupName} 
                className='w-2/3 '/>
              <p>{item.groupName}</p>
              <p>{item.teacher} | {item.kuni}</p>
            </div>
            <div className="p-2 flex flex-col gap-2">
              <p className='flex items-center justify-between'>
                <span>Talabalar:</span>
                <span>{item.talabalar}</span>
              </p>
              <p className='flex items-center justify-between'>
                <span>vaqt:</span>
                <span>{item.vaqt}</span>
              </p>
              <div className="flex items-center justify-end">
                <button className="btn btn-success text-white btn-sm">tekshirish</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home