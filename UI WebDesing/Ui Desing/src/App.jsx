import React from 'react'
import Section1 from './Components/Section1/section1.jsx'
import Section2 from './Components/Section2/section2.jsx'

const App = () => {

const users = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1758598303611-3acd3aeb43dd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxofGVufDB8fHx8fA%3D%3D",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maiores saepe ut reiciendis iure minus?",
    button: "Satisfied"
  },
  {
    id: "2",
    img: "https://images.unsplash.com/flagged/photo-1574164908900-6275ca361157?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8fmh0by1wYWdlfHxofGVufDB8fHx8fA%3D%3D",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, ipsam! Numquam maxime voluptatibus maiores debitis!",
    button: "Underwhere"
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1572016047668-5b5e909e1605?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minima, ea reprehenderit dolorem odio placeat!",
    button: "Underbanked"
  },

  {
    id: "4",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Repellendus facilis accusantium nihil.",
    button: "Happy"
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque libero dolores, similique doloribus.",
    button: "Verified"
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vitae. Doloribus neque veniam maxime.",
    button: "Trusted"
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, assumenda! Laborum excepturi eos quidem.",
    button: "Premium"
  }
];
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App