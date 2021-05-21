import api from '../../../service/api';

async function getRandomJOke(){
  const request = await api.get('random')
  const response = request.data
  return response
}


let Home = {
  is_private: false,

  render: async () => {
      const jokes = await getRandomJOke();

      let view = /*html*/`
          <div>
            <h1>Primeira Pégina</h1>
            <img src=${jokes.icon_url} alt=${jokes.value}>
            <p>${jokes.value}</p>
          </div>
          <div>
            <form>
              <input type="text" id="name" placeholder="name">    <br>          
              <input type="text" id="email" placeholder="email">      <br>        
              <input type="text" id="phone" placeholder="phone">          <br>    
              <input type="submit"  value="enviar">
            </form>
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;