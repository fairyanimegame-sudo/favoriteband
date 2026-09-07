import { Band } from "../types/band";

export const mockBands: Band[] = [
  {
    id: "1",
    name: "Supertramp",
    genre: "Rock, Progressive rock, Progressive pop, Soft rock, Pop",
    formationYear: 1970,
    imageUrl:
      "/Bands/Supertramp.jpg",
    members: [
      {
        id: "1",
        name: "Roger Hodgson",
        role: "Lead and backing vocals, keyboards, guitars, bass, flageolet, cello",
        imageUrl: "/Member/Supertram/Roger-Hodson.jpg"
      },
      {
        id: "2",
        name: "Rick Davies",
        role: "Lead and backing vocals, keyboards, harmonica, melodica",
        imageUrl: "/Member/Supertram/Rick_Davies.png"
      },
      {
        id: "3",
        name: "John Helliwell",
        role: "Saxophones, woodwinds, backing vocals, occasional keyboards, onstage MC",
        imageUrl: "/Member/Supertram/Richard.jpg"
      },
      { id: "4", name: "Dougie Thomson", role: "Bass guitar, backing vocals", imageUrl: "/Member/Supertram/Dougie_Thomson.jpg" },
      { id: "5", name: "Bob Siebenberg", role: "Drums, percussion", imageUrl: "/Member/Supertram/Bob.jpg" },
    ],
  },
  {
    id: "2",
    name: "The Darkest Romance (TDR)",
    genre: "Alternative Metal",
    formationYear: 2010,
    imageUrl:
      "/Bands/TRD.jpg",
    members: [
      { id: "1", name: "แม็ก-ธิติวัฒน์ รองทอง", role: "Vocals, bass guitar", imageUrl: "/Member/TDR/Max.jpg" },
      { id: "2", name: "ก้อง-ก้องอุดม ใจทัศน์กุล", role: "Guitar", imageUrl: "/Member/TDR/Kong.jpg" },
      { id: "3", name: "เต้-ปัฏฐสิทธิ์ ห้วยห้อง", role: "Guitar", imageUrl: "/Member/TDR/Tae.jpg" },
      { id: "4", name: "เกม-ธณัตชัย เหลือรักษ์", role: "Drums", imageUrl: "/Member/TDR/Game.jpg" },
    ],
  },
  {
    id: "3",
    name: "Korn",
    genre: "Nu metal, Alternative metal, Hard rock",
    formationYear: 1993,
    imageUrl:
      "/Bands/Korn.jpg",
    members: [
      { id: "1", name: "Jonathan Davis", role: "Vocals",  imageUrl: "/Member/Korn/Jonathan.jpg" },
      { id: "2", name: "James Shaffer", role: "Guitar", imageUrl: "/Member/Korn/james.jpg" },
      { id: "3", name: "Brian Welch", role: "Guitar", imageUrl: "/Member/Korn/Brian.jpg" },
      { id: "4", name: "Ray Luzier", role: "Drums", imageUrl: "/Member/Korn/Ray.jpg" },
    ],
  },
  {
    id: "4",
    name: "Muse",
    genre: "Alternative rock, Progressive rock, Space rock, Art rock, Hard rock",
    formationYear: 1994,
    imageUrl:
      "/Bands/Muse.jpg",
    members: [
      { id: "1", name: "Matt Bellamy", role: "Vocals, guitar, piano", imageUrl: "/Member/muse/Matt.jpg"},
      { id: "2", name: "Chris Wolstenholme", role: "Bass, backing vocals", imageUrl: "/Member/muse/Chris.jpg" },
      { id: "3", name: "Dominic Howard", role: "Drums, percussion", imageUrl: "/Member/muse/Dominic.jpg" },
    ],
  },
  {
    id: "5",
    name: "Lomosonic",
    genre: "Alternative rock, Hard rock",
    formationYear: 2005,
    imageUrl:
      "/Bands/Lomosonic.jpg",
    members: [
      { id: "1", name: "บอย-อริย์ธัช พลตาล", role: "Vocals", imageUrl: "/Member/Lomosonic/Boy.jpeg" },
      { id: "2", name: "ป้อม-ฉัตรชัย งามสิริมงคลชัย", role: "Guitar", imageUrl: "/Member/Lomosonic/Pom.jpg" },
      { id: "3", name: "ปิติ-ปิติ เอสตราลาโด สหพงศ์ เดน โดมินิค", role: "Guitar", imageUrl: "/Member/Lomosonic/Piti.jpg" },
      { id: "4", name: "ออตโต้-ชาญเดช จันทร์จำเริญ", role: "Drums", imageUrl: "/Member/Lomosonic/Auto.jpg" },
    ],
  },
];