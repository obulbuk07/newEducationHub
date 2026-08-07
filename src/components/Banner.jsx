import DriftWall from "./DriftWall";
import ifnmuLogo from "../img/ifnmu_logo.png"
import father from "../img/Oleksandr_Bulbuk.jpg"
import studentGuideLogo from "../img/student_guide_logo.jpg"
import photo1 from "../img/photo1.jpg"
import photo2 from "../img/photo2.jpg"
import photo3 from "../img/photo3.jpg"
import photo4 from "../img/photo4.jpg"
import photo5 from "../img/photo5.jpg"

const items = [
  
  { image: father, title: 'Peaks', href: 'https://example.com/two' },
  { image: photo1, title: 'Peaks', href: 'https://example.com/three' },
  { image: photo2, title: 'Peaks', href: 'https://example.com/three' },
  { image: photo3, title: 'Peaks', href: 'https://example.com/three' },
  { image: photo4, title: 'Peaks', href: 'https://example.com/three' },
  { image: photo5, title: 'Peaks', href: 'https://example.com/three' },
  { image: studentGuideLogo, title: 'Peaks', href: 'https://example.com/four' },
  { image: photo2, title: 'Peaks', href: 'https://example.com/three' },
  
];

function Banner(){
    return(
        <div className="flex gap-20  w-4/4 max-auto">
            <div className="w-200 flex flex-col gap-4" >
                <h1 className="text-2xl">Освітній хаб ІФНМУ</h1>
                <h2 className="text-xl">Простір нових можливостей у медичній освіті</h2>
                <p>Цифровий освітній хаб Фахового медичного коледжу ІФНМУ під керівництвом Олександра Бульбука створює єдине навчальне середовище для студентів коледжів та медичних вишів. Платформа забезпечує вільний і гнучкий доступ до освітніх матеріалів із будь-якого куточка світу.</p>
                <p>Цей простір реалізує концепцію навчання протягом життя, допомагаючи майбутнім фахівцям галузі охорони здоров’я розвивати якісні soft skills. Він відкриває додаткові можливості для самореалізації, професійного зростання та побудови успішної кар'єри.</p>
            </div>
            <div className="w-300 h-100">
                <div style={{ height: 400 }}>
  <DriftWall
    items={items}
    columns={4}
    tileWidth={140}
    tileHeight={140}
    gap={8}
    tilt={16}
    turn={-14}
    perspective={1200}
    depth={120}
    speed={32}
    direction="up"
    variance={0.45}
    parallax={0.6}
    lift={64}
    fade={0.25}
    dim={0.8}
    overlayColor="#4f4f4f"
    radius={13}
    roll={0}
    pauseOnHover={false}
    grayscale={false}
/>
</div>
            </div>
        </div>
    )
}
export default Banner;