import AccordionGallery from "./AccordeonGallery"
import corpuse1 from "../img/corpuse1.jpg"
import corpuse2 from "../img/corpuse2.jpg"
import corpuse3 from "../img/corpuse3.jpg"
import corpuse4 from "../img/corpuse4.jpg"
import corpuse5 from "../img/corpuse5.jpg"

const items = [
  { image: corpuse1, label: 'Фізіологічний корпус', link: '#' },
  { image: corpuse2, label: 'Фізіологічний корпус', link: '#' },
  { image: corpuse3, label: 'Морфологічний корпус', link: '#' },
  { image: corpuse4, label: 'Корпус загальноосвітніх дисциплін', link: '#' },
  { image: corpuse5, label: 'Спрортивний комплекс ', link: '#' }
];

function CorpusesGallery(){
    return(
        <div className="py-4" >
            <AccordionGallery
                items={items}
                defaultIndex={2}
                expandRatio={0.52}
                trigger="hover"
                accentColor="#ffffff"
                overlayColor="#060010"
                textColor="#ffffff"
                grayscale
                showLabels
                duration={0.6}
                ease="power3.out"
                parallax={0.5}
                 tilt={8}
                stagger={0.06}
                height={460}
                gap={10}
                radius={16}
                orientation="horizontal"
/>
        </div>
    )
}
export default CorpusesGallery