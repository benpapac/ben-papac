
import { cards } from "./wh-constants";
import Card from "./components/card";

export default function WorkHistory() {
    return (
        <div className={"mt-10 w-screen flex flex-col"}>
          {
            cards.map((card, idx) => 
              <Card 
                alt={card.alt} 
                bg={card.bg}
                copy={card.copy} 
                idx={idx} 
                image={card.image}
                href={card.href} 
                title={card.title} 
                top={card.top}
                key={idx}
              />)
          }
        </div>
    )

}