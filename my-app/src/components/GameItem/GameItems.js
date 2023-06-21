import React, { useState } from "react";
import GameGalery from "../GameGallery/Games";

const Games = () => {
  const [games, setGames] = useState([
    {
      id: 0,
      name: "League of Legends",
      genre: "MOBA",
      img: "https://gamiom.com/wp-content/uploads/2020/01/League-of-Legends-photo.jpg",
      platform: ["PC"],
      developer: "Riot Games",
      description:
        "League of Legends es un popular juego de estrategia en tiempo real en el género de los MOBA (Multiplayer Online Battle Arena). Los jugadores forman equipos y se enfrentan en emocionantes partidas donde deben destruir el nexo enemigo mientras controlan a poderosos campeones con habilidades únicas.",
      score: 0,
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      genre: "Action RPG",
      img: "https://th.bing.com/th/id/R.02931056d6f9e85421540891824699fb?rik=O4M%2bjevRMWooSw&riu=http%3a%2f%2fwww.mobygames.com%2fimages%2fcovers%2fl%2f305108-the-witcher-3-wild-hunt-playstation-4-front-cover.jpg&ehk=KhcXbl4En9fujtGcBDEff8FrppYGqpjIXRv4fjCigbE%3d&risl=&pid=ImgRaw&r=0",
      platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      developer: "CD Projekt RED",
      description:
        "The Witcher 3: Wild Hunt es un aclamado videojuego de rol de acción desarrollado por CD Projekt Red y lanzado en 2015. Basado en la exitosa serie de libros del escritor polaco Andrzej Sapkowski, el juego te sumerge en un vasto mundo abierto de fantasía medieval llamado el Continente.",
      score: 0,
    },
    {
      id: 2,
      name: "Grand Theft Auto V",
      genre: "Action-adventure",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202101/2019/JdvqcPlTYMxXrA1QQJm6TbDX.png",
      platform: [
        "PC",
        "PlayStation 4",
        "Xbox One",
        "PlayStation 3",
        "Xbox 360",
      ],
      developer: "Rockstar North",
      description:
        "Grand Theft Auto V es un juego de acción y aventura en Los Santos. Sigue a Michael, Franklin y Trevor, cada uno con su propia historia. Los jugadores realizan atracos y desafíos en un mundo abierto. Exploran la ciudad, participan en actividades y disfrutan del multijugador. La narrativa es rica y los personajes inolvidables.",
      score: 0,
    },
    {
      id: 3,
      name: "The Legend of Zelda: Breath of the Wild",
      genre: "Action-adventure",
      img: "https://external-preview.redd.it/kl3TULI0N4INaubyhK2h9vGm4raHjrdlDLozB_f2z_A.jpg?auto=webp&s=a0b5cd932fdbc6ca0dca483f61dcc36af59aa893",
      platform: ["Nintendo Switch", "Wii U"],
      graphicsEngine: "Havok, Disruptor",
      developer: "Nintendo EPD",
      description:
        "En The Legend of Zelda: Breath of the Wild, el jugador asume el papel de Link, quien despierta después de un largo sueño en un mundo postapocalíptico. Su misión es derrotar a Ganon y salvar al reino de Hyrule.",
      score: 0,
    },
    {
      id: 4,
      name: "Fortnite",
      genre: "Battle Royale",
      img: "https://th.bing.com/th/id/OIP.3QYWQTAkczL2dfT6JDqfGAHaHa?pid=ImgDet&rs=1",
      platform: [
        "PC",
        "PlayStation 4",
        "Xbox One",
        "Nintendo Switch",
        "iOS",
        "Android",
      ],
      graphicsEngine: "Unreal Engine 4",
      developer: "Epic Games ",
      description:
        " Fortnite es un popular videojuego de batalla real desarrollado por Epic Games. Los jugadores luchan en una isla hasta que solo queda un ganador. Combina elementos de construcción, acción y estrategia. Su estilo artístico único, eventos en vivo y actualizaciones constantes lo han convertido en un juego muy popular y emocionante.",
      score: 0,
    },
    {
      id: 5,
      name: "Minecraft",
      genre: "Sandbox",
      img: "https://th.bing.com/th/id/OIP.mZ9h3cth9tQmXN9xTEmyhQHaHa?pid=ImgDet&rs=1",
      platform: [
        "PC",
        "PlayStation 4",
        "Xbox One",
        "Nintendo Switch",
        "iOS",
        "Android",
      ],
      graphicsEngine: "Java Edition: LWJGL, Bedrock Edition: RenderDragon",
      developer: "Mojang Studios",
      description:
        "Los jugadores exploran un vasto paisaje, recolectan recursos y construyen estructuras utilizando bloques. Pueden enfrentarse a enemigos, criar animales y cultivar cultivos para sobrevivir. Con su estilo visual distintivo y una amplia comunidad de jugadores, Minecraft ofrece una experiencia creativa sin límites.",
      score: 0,
    },
    {
      id: 6,
      name: "Overwatch",
      genre: "First-person shooter",
      img: "https://1.bp.blogspot.com/-Ilc0C9BjHLs/V0QsjCyEK5I/AAAAAAABOUc/IbYf6dEfQxIx-2AyuyMEeiMPESLsaFhoACLcB/s1600/overwatch-game-cover.jpg",
      platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      graphicsEngine: "Custom (Derived from Source engine)",
      description:
        "Overwatch es un popular videojuego de disparos en primera persona (FPS) desarrollado y publicado por Blizzard Entertainment. Fue lanzado en 2016 y se ha convertido en uno de los juegos más populares en su género. En Overwatch, los jugadores forman equipos de seis personas y asumen el papel de héroes con habilidades únicas en un entorno de combate en equipo. El juego presenta una amplia variedad de héroes, cada uno con su propio estilo de juego, habilidades especiales y roles en el equipo, como tanques, DPS (daño por segundo) y sanadores.",
      score: 0,
      developer: " Blizzard Entertainment",
    },
    {
      id: 7,
      name: "Red Dead Redemption 2",
      genre: "Action-adventure",
      img: "https://th.bing.com/th/id/OIP.XyzJMuq152Nds6urQ0GnMAHaHa?pid=ImgDet&rs=1",
      platform: ["PC", "PlayStation 4", "Xbox One", "Stadia"],
      graphicsEngine: "RAGE",
      score: 0,
      developer: "Rockstar Games",
      description:
        "Red Dead Redemption 2 es un videojuego de acción y aventura desarrollado y publicado por Rockstar Games. Lanzado en 2018, es la secuela del exitoso Red Dead Redemption y está ambientado en el Viejo Oeste americano a finales del siglo XIX. El juego sigue la historia de Arthur Morgan, un forajido miembro de la banda de Van der Linde. El jugador asume el papel de Arthur y se sumerge en un vasto mundo abierto, lleno de detalles y vida salvaje, donde se enfrentará a desafíos y decisiones que afectarán el desarrollo de la historia.",
    },
    {
      id: 8,
      name: "Super Smash Bros. Ultimate",
      genre: "Fighting",
      img: "https://assets1.ignimgs.com/2018/06/13/super-smash-btros-ultimate---button-0001-1528851298611.jpg",
      platform: ["Nintendo Switch"],
      graphicsEngine: "Proprietary",
      developer: "Bandai Namco Studios",
      score: 0,
      description:
        "Super Smash Bros. Ultimate es un videojuego de lucha desarrollado por Nintendo para la consola Nintendo Switch. Lanzado en 2018, es la quinta entrega de la popular serie Super Smash Bros. y es considerado como la versión definitiva del juego, ya que incluye a todos los personajes jugables y escenarios de las entregas anteriores, así como nuevos añadidos. El objetivo principal de Super Smash Bros. Ultimate es enfrentar a diversos personajes icónicos de los videojuegos en emocionantes combates. El juego cuenta con un extenso elenco de más de 70 personajes seleccionables, que incluyen a personajes famosos de Nintendo como Mario, Link, Donkey Kong y Pikachu, así como personajes de otras franquicias de videojuegos como Sonic, Mega Man, Pac-Man y muchos más.",
    },
    {
      id: 9,
      name: "Call of Duty: Warzone",
      genre: "Battle Royale",
      img: "https://cdn1.dotesports.com/wp-content/uploads/2021/06/14121316/codwz25.jpg",
      platform: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
      ],
      graphicsEngine: "IW Engine",
      score: 0,
      developer: "Activision",
      description:
        "Call of Duty: Warzone es un popular videojuego de batalla real (battle royale) desarrollado y publicado por Activision. Fue lanzado en marzo de 2020 y está disponible de forma gratuita para jugar en PlayStation, Xbox y PC. En Call of Duty: Warzone, hasta 150 jugadores se enfrentan en un mapa masivo y abierto en una intensa batalla a muerte. El objetivo es ser el último jugador o equipo en pie. Los jugadores pueden unirse en equipos de hasta tres jugadores o participar en partidas en solitario.",
    },
    {
      id: 10,
      name: "Assassin's Creed Valhalla",
      genre: "Action-adventure",
      img: "https://th.bing.com/th/id/OIP.YZKAEMNRcXQoD_Okur6xvwHaLH?pid=ImgDet&rs=1",
      platform: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
      ],
      graphicsEngine: "AnvilNext 2.0",
      score: 0,
      developer: "Ubisoft Montreal",
      description:
        "Assassin's Creed Valhalla es un videojuego de acción y aventura desarrollado y publicado por Ubisoft. Fue lanzado en noviembre de 2020 y está disponible para jugar en varias plataformas, incluyendo PlayStation, Xbox, PC y Stadia. El juego está ambientado en la época vikinga y sigue la historia de Eivor, un valiente guerrero vikingo que lidera a su clan en una búsqueda por establecer un nuevo hogar en tierras de Inglaterra. Los jugadores tienen la oportunidad de explorar un mundo abierto detallado y vasto, lleno de ciudades, aldeas, bosques, montañas y mares.",
    },
    {
      id: 11,
      name: "FIFA 23",
      genre: "Football simulation",
      img: "https://th.bing.com/th/id/R.d0050a2d437be247a1943aaaf0f4bbb2?rik=PuybCu3mPwZf4A&pid=ImgRaw&r=0",
      platform: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
        "Nintendo Switch",
      ],
      graphicsEngine: "Frostbite 3",
      score: 0,
      developer: "EA Sports",
      description:
        "FIFA 23 es un videojuego de fútbol publicado por Electronic Arts (o simplemente EA). Es la 30ª entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo la bandera de FIFA, y lanzada en todo el mundo el 30 de septiembre de 2022 para Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One y Xbox Series X / S. Kylian Mbappé es el atleta de portada de las ediciones estándar y heredada. Mbappé comparte la portada de la edición definitiva con Sam Kerr.",
    },
    {
      id: 12,
      name: "Resident Evil Village",
      genre: "Survival horror",
      developer: "Capcom",
      img: "https://th.bing.com/th/id/R.56f122a3bd1d4e8da9e3254386b7673e?rik=HmaZ7MrxNsMzRw&pid=ImgRaw&r=0",
      platform: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
      ],
      graphicsEngine: "RE Engine",
      score: 0,
      description:
        "Resident Evil Village es un videojuego de terror y supervivencia desarrollado y publicado por Capcom. Fue lanzado el 7 de mayo de 2021 para varias plataformas, incluyendo PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One y PC. Es la octava entrega principal de la serie Resident Evil y continúa la historia de su predecesor, Resident Evil 7: Biohazard. En Resident Evil Village, los jugadores asumen el papel de Ethan Winters, el protagonista de Resident Evil 7, quien se encuentra en un pueblo misterioso y aterrador en busca de su hija secuestrada. El juego combina elementos de acción, exploración y resolución de acertijos mientras los jugadores se adentran en un entorno lleno de peligrosos enemigos y horrores sobrenaturales.",
    },
    {
      id: 13,
      name: "Stardew Valley",
      genre: "RPG",
      developer: "ConcernedApe",
      img: "https://scottatnight.files.wordpress.com/2021/05/stardew-valley-1.png",
      platform: [
        "PC",
        "PlayStation 4",
        "Xbox One",
        "Nintendo Switch",
        "iOS",
        "Android",
      ],
      graphicsEngine: "XNA",
      score: 0,
      description:
        "Stardew Valley es un videojuego de simulación de granja desarrollado por Eric ConcernedApe Barone. Fue lanzado originalmente en febrero de 2016 y está disponible para varias plataformas, como PC, PlayStation 4, Xbox One, Nintendo Switch y dispositivos móviles. En Stardew Valley, los jugadores asumen el papel de un personaje que hereda una pequeña granja en el tranquilo pueblo de Stardew Valley. El objetivo principal del juego es administrar la granja, cultivar cultivos, criar animales y llevar una vida próspera en el campo. Los jugadores pueden personalizar su granja, interactuar con los aldeanos, explorar cuevas y minas, pescar, participar en eventos comunitarios y mucho más.",
    },
    {
      id: 14,
      name: "Horizon Zero Dawn",
      developer: "Guerrilla Games",
      genre: "Open-world RPG",
      img: "https://1.bp.blogspot.com/-1nzqgs8_vaE/Xy4UIiNcodI/AAAAAAAAThg/gwz6tELY9t0g8ENjx8WQH-6bCLc9KFYwQCLcBGAsYHQ/s1600/Horizon%2BZero%2BDawn%2BPC%2BCover%2BCaratula-www.juegosparawindows.com.jpg",
      platform: ["PlayStation 4", "PlayStation 5", "PC"],
      graphicsEngine: "Decima Engine",
      score: 0,
      description:
        "Horizon Zero Dawn es un videojuego de acción y aventura desarrollado por Guerrilla Games y lanzado originalmente en 2017 para PlayStation 4. Posteriormente, se lanzó una versión para PC en 2020. El juego ha sido muy aclamado por su mundo abierto, su historia cautivadora y su impresionante apartado visual. La historia de Horizon Zero Dawn tiene lugar en un futuro postapocalíptico donde la humanidad ha caído y la civilización tal como la conocemos ha sido reemplazada por máquinas salvajes. Los jugadores asumen el papel de Aloy, una joven cazadora y arquera habilidosa, que se embarca en un viaje para descubrir la verdad detrás de su pasado y el misterio que rodea a las máquinas.",
    },
    {
      id: 15,
      name: "Super Mario Odyssey",
      developer: "Nintendo EPD",
      genre: "Platformer",
      img: "https://th.bing.com/th/id/R.23f0c9a68ec1b01009591052fb38c8d8?rik=ZUKvcwu3k8SUUg&pid=ImgRaw&r=0",
      platform: ["Nintendo Switch"],
      graphicsEngine: "Proprietary",
      score: 0,
      description:
        "Super Mario Odyssey es un videojuego de plataformas desarrollado y publicado por Nintendo para la consola Nintendo Switch. Fue lanzado en 2017 y ha sido aclamado tanto por la crítica como por los jugadores por su innovación, jugabilidad divertida y encanto nostálgico. En Super Mario Odyssey, los jugadores asumen el papel de Mario, el famoso fontanero italiano, en una aventura para rescatar a la Princesa Peach de las garras de Bowser. Lo que hace que este juego sea único es su enfoque en la exploración de diferentes reinos en un mundo abierto y la capacidad de Mario para poseer y controlar objetos y personajes con su nuevo compañero, Cappy.",
    },
    {
      id: 16,
      name: "The Last of Us Part II",
      genre: "Action-adventure",
      developer: "Naughty Dog",
      img: "https://th.bing.com/th/id/R.5e4e3439700625b459fa04a118b91e87?rik=ANNmhVZIkgCviQ&pid=ImgRaw&r=0",
      platform: ["PlayStation 4", "PlayStation 5"],
      graphicsEngine: "Decima Engine",
      score: 0,
      description:
        "The Last of Us Part II es un videojuego de acción y aventura desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment. Es la secuela del aclamado juego The Last of Us, y continúa la historia de Ellie y Joel en un mundo postapocalíptico devastado por una pandemia. En The Last of Us Part II, los jugadores asumen el papel de Ellie, una joven superviviente que se embarca en un viaje emocionalmente intenso en busca de venganza. El juego presenta una narrativa profunda y emocional que explora temas como la moralidad, la pérdida y la redención en un mundo desolado.",
    },
    {
      id: 17,
      name: "Animal Crossing: New Horizons",
      developer: "Nintendo EPD",
      genre: "Life simulation",
      img: "https://d.newsweek.com/en/full/1574934/animal-crossing-new-horizons-logo-box-art.jpg",
      platform: ["Nintendo Switch"],
      graphicsEngine: "Proprietary",
      score: 0,
      description:
        "Animal Crossing: New Horizons es un videojuego de simulación de vida desarrollado y publicado por Nintendo para la consola Nintendo Switch. Es la quinta entrega principal de la serie Animal Crossing y ha ganado gran popularidad desde su lanzamiento en marzo de 2020. En Animal Crossing: New Horizons, los jugadores asumen el papel de un personaje que se muda a una isla desierta habitada por una variedad de animales antropomórficos. El juego se desarrolla en tiempo real y sigue un ciclo de día y noche, así como las estaciones del año, lo que brinda una experiencia de juego única y dinámica.",
    },
    {
      id: 18,
      name: "Cyberpunk 2077",
      developer: "CD Projekt Red",
      genre: "Action RPG",
      img: "https://th.bing.com/th/id/R.39da950d80a4f22ec6973cfe10e6ff2c?rik=fQXQsGMKTpW2Ew&pid=ImgRaw&r=0",
      platform: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
      ],
      graphicsEngine: "REDengine",
      score: 0,
      description:
        "Cyberpunk 2077 es un videojuego de rol de acción desarrollado y publicado por CD Projekt. El juego se ambienta en Night City, una metrópolis futurista obsesionada con el poder, la tecnología y la modificación corporal. El jugador asume el papel de V, un mercenario personalizable que busca alcanzar la fama y el éxito en este mundo distópico. En Cyberpunk 2077, los jugadores pueden explorar libremente Night City, una ciudad vibrante y peligrosa llena de personajes diversos, facciones en conflicto y misiones intrigantes. A medida que avanzan en la historia principal y realizan misiones secundarias, los jugadores toman decisiones que afectan el desarrollo de la trama y el destino de los personajes que encuentran.",
    },
    {
      id: 19,
      name: "Final Fantasy VII Remake",
      developer: "Square Enix",
      genre: "Action RPG",
      img: "https://th.bing.com/th/id/R.a2c65f253cb289cb7f1551691979d1a7?rik=pss4tFZb4VbX4w&riu=http%3a%2f%2fsolismagazine.com%2fwp-content%2fuploads%2f2020%2f04%2ffinal-fantasy-vii-remake-button-fin-1586205679705.jpg&ehk=y1uJ9MCEF7l%2bq%2b3PFceppyHJoBxJDD3VdduTbOKvfqU%3d&risl=&pid=ImgRaw&r=0",
      platform: ["PlayStation 4", "PlayStation 5"],
      graphicsEngine: "Unreal Engine 4",
      score: 0,
      description:
        "Final Fantasy VII Remake es una recreación del icónico juego de rol japonés Final Fantasy VII, desarrollado por Square Enix. Este remake presenta gráficos mejorados, una jugabilidad actualizada y una narrativa expandida en comparación con la versión original lanzada en 1997. El juego sigue la historia de Cloud Strife, un mercenario exmiembro de la organización militar llamada SOLDADO, mientras se une a un grupo de rebeldes conocido como AVALANCHA. Juntos, intentan luchar contra la malévola corporación Shinra Electric Power Company, que está agotando los recursos del planeta y amenazando su existencia.",
    },
  ]);

  return (
    <div
      className="galery"
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginRight: 0,
        boxSizing: "border-box",
      }}
    >
      {games.map((games) => {
        return (
          <GameGalery
            name={games.name}
            img={games.img}
            genre={games.genre}
            platform={games.platform}
            developer={games.developer}
            id={games.id}
            description={games.description}
            score={games.score}
          />
        );
      })}
    </div>
  );
};

export default Games;
