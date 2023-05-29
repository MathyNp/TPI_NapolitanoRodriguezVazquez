import React, { useState } from "react";
import GamesGalery from "../Games";

const Games = () => {
  const [games, setGames] = useState([
    {
      id: 0,
      name: "League of Legends",
      genre: ["MOBA"],
      img: "https://gamiom.com/wp-content/uploads/2020/01/League-of-Legends-photo.jpg",
      platform: ["PC"],
      developer: "Riot Games",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      genre: ["Action RPG"],
      img: "https://th.bing.com/th/id/OIP.smb9E3gmqMX-XT7EH3rZzAHaHa?pid=ImgDet&rs=1",
      platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      developer: "CD Projekt RED",
    },
    {
      id: 2,
      name: "Grand Theft Auto V",
      genre: ["Open-world", "Action-adventure"],
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202101/2019/JdvqcPlTYMxXrA1QQJm6TbDX.png",
      platform: [
        "PC",
        "PlayStation 4",
        "Xbox One",
        "PlayStation 3",
        "Xbox 360",
      ],
      developer: "Rockstar North",
    },
    {
      id: 3,
      name: "The Legend of Zelda: Breath of the Wild",
      genre: ["Action-adventure"],
      img: "https://external-preview.redd.it/kl3TULI0N4INaubyhK2h9vGm4raHjrdlDLozB_f2z_A.jpg?auto=webp&s=a0b5cd932fdbc6ca0dca483f61dcc36af59aa893",
      platform: ["Nintendo Switch", "Wii U"],
      graphicsEngine: "Havok, Disruptor",
    },
    {
      id: 4,
      name: "Fortnite",
      genre: ["Battle Royale", "Third-person shooter"],
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
    },
    {
      id: 5,
      name: "Minecraft",
      genre: ["Sandbox", "Construction"],
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
    },
    {
      id: 6,
      name: "Overwatch",
      genre: ["First-person shooter"],
      img: "https://1.bp.blogspot.com/-Ilc0C9BjHLs/V0QsjCyEK5I/AAAAAAABOUc/IbYf6dEfQxIx-2AyuyMEeiMPESLsaFhoACLcB/s1600/overwatch-game-cover.jpg",
      platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      graphicsEngine: "Custom (Derived from Source engine)",
    },
    {
      id: 7,
      name: "Red Dead Redemption 2",
      genre: ["Open-world", "Action-adventure"],
      img: "https://th.bing.com/th/id/OIP.XyzJMuq152Nds6urQ0GnMAHaHa?pid=ImgDet&rs=1",
      platform: ["PC", "PlayStation 4", "Xbox One", "Stadia"],
      graphicsEngine: "RAGE",
    },
    {
      id: 8,
      name: "Super Smash Bros. Ultimate",
      genre: ["Fighting"],
      img: "https://assets1.ignimgs.com/2018/06/13/super-smash-btros-ultimate---button-0001-1528851298611.jpg",
      platform: ["Nintendo Switch"],
      graphicsEngine: "Proprietary",
    },
    {
      id: 9,
      name: "Call of Duty: Warzone",
      genre: ["Battle Royale", "First-person shooter"],
      img: "https://cdn1.dotesports.com/wp-content/uploads/2021/06/14121316/codwz25.jpg",
      platform: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
      ],
      graphicsEngine: "IW Engine",
    },
    {
      id: 10,
      name: "Assassin's Creed Valhalla",
      genre: ["Open-world", "Action-adventure"],
      img: "https://th.bing.com/th/id/OIP.YZKAEMNRcXQoD_Okur6xvwHaLH?pid=ImgDet&rs=1",
      platform: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
      ],
      graphicsEngine: "AnvilNext 2.0",
    },
    {
      id: 11,
      name: "FIFA 23",
      genre: ["Sports", "Football simulation"],
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
    },
    {
      id: 12,
      name: "Resident Evil Village",
      genre: ["Survival horror"],
      img: "https://th.bing.com/th/id/R.56f122a3bd1d4e8da9e3254386b7673e?rik=HmaZ7MrxNsMzRw&pid=ImgRaw&r=0",
      platform: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
      ],
      graphicsEngine: "RE Engine",
    },
    {
      id: 13,
      name: "Stardew Valley",
      genre: ["Simulation", "RPG"],
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
    },
    {
      id: 14,
      name: "Horizon Zero Dawn",
      genre: ["Action", "Open-world RPG"],
      img: "https://1.bp.blogspot.com/-1nzqgs8_vaE/Xy4UIiNcodI/AAAAAAAAThg/gwz6tELY9t0g8ENjx8WQH-6bCLc9KFYwQCLcBGAsYHQ/s1600/Horizon%2BZero%2BDawn%2BPC%2BCover%2BCaratula-www.juegosparawindows.com.jpg",
      platform: ["PlayStation 4", "PlayStation 5", "PC"],
      graphicsEngine: "Decima Engine",
    },
    {
      id: 15,
      name: "Super Mario Odyssey",
      genre: ["Platformer"],
      img: "https://th.bing.com/th/id/R.23f0c9a68ec1b01009591052fb38c8d8?rik=ZUKvcwu3k8SUUg&pid=ImgRaw&r=0",
      platform: ["Nintendo Switch"],
      graphicsEngine: "Proprietary",
    },
    {
      id: 16,
      name: "The Last of Us Part II",
      genre: ["Action-adventure", "Survival horror"],
      img: "https://th.bing.com/th/id/R.5e4e3439700625b459fa04a118b91e87?rik=ANNmhVZIkgCviQ&pid=ImgRaw&r=0",
      platform: ["PlayStation 4", "PlayStation 5"],
      graphicsEngine: "Decima Engine",
    },
    {
      id: 17,
      name: "Animal Crossing: New Horizons",
      genre: ["Life simulation"],
      img: "https://d.newsweek.com/en/full/1574934/animal-crossing-new-horizons-logo-box-art.jpg",
      platform: ["Nintendo Switch"],
      graphicsEngine: "Proprietary",
    },
    {
      id: 18,
      name: "Cyberpunk 2077",
      genre: ["Open-world", "Action RPG"],
      img: "https://th.bing.com/th/id/R.39da950d80a4f22ec6973cfe10e6ff2c?rik=fQXQsGMKTpW2Ew&pid=ImgRaw&r=0",
      platform: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
      ],
      graphicsEngine: "REDengine",
    },
    {
      id: 19,
      name: "Final Fantasy VII Remake",
      genre: ["Action RPG"],
      img: "https://th.bing.com/th/id/R.a2c65f253cb289cb7f1551691979d1a7?rik=pss4tFZb4VbX4w&riu=http%3a%2f%2fsolismagazine.com%2fwp-content%2fuploads%2f2020%2f04%2ffinal-fantasy-vii-remake-button-fin-1586205679705.jpg&ehk=y1uJ9MCEF7l%2bq%2b3PFceppyHJoBxJDD3VdduTbOKvfqU%3d&risl=&pid=ImgRaw&r=0",
      platform: ["PlayStation 4", "PlayStation 5"],
      graphicsEngine: "Unreal Engine 4",
    },
    {
      id: 22,
      name: "Hades",
      genre: ["Action", "Roguelike"],
      img: "https://www.gamelegant.com/media/2020/06/hades-cover-scaled.jpg",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
      graphicsEngine: "Custom (Derived from Unity)",
    },
  ]);

  return (
    <div className="galery">
      {games.map((games) => {
        return (
          <GamesGalery
            name={games.name}
            img={games.img}
            genre={games.genre}
            platform={games.platform}
            developer={games.developer}
            id={games.id}
          />
        );
      })}
    </div>
  );
};

export default Games;
